import { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Square, X } from 'lucide-react';
import { useWindowManager } from '../hooks/useWindowManager';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery';

const MotionPanel = motion.div;

function clampPosition(x, y, bounds, panel) {
  if (!bounds || !panel) return null;
  const maxX = Math.max(0, bounds.clientWidth - panel.offsetWidth);
  const maxY = Math.max(0, bounds.clientHeight - panel.offsetHeight);
  return {
    x: Math.round(Math.min(maxX, Math.max(0, x))),
    y: Math.round(Math.min(maxY, Math.max(0, y))),
  };
}

export default function Window({ app, windowState, isActive, isMobile, boundsRef }) {
  const { closeWindow, minimizeWindow, maximizeWindow, focusWindow, setWindowPosition, focusedId } = useWindowManager();
  const reducedMotion = usePrefersReducedMotion();
  const panelRef = useRef(null);
  const titleRef = useRef(null);
  const dragRef = useRef(null);
  const titleId = useId();
  const { id, x, y, isMaximized } = windowState;
  const [pos, setPos] = useState({ x, y });
  const [tracked, setTracked] = useState({ x, y });
  if (tracked.x !== x || tracked.y !== y) {
    setTracked({ x, y });
    setPos({ x, y });
  }
  const posRef = useRef(pos);
  const fill = isMobile || isMaximized;
  const Icon = app.icon;
  const Content = app.component;

  useEffect(() => {
    posRef.current = pos;
  }, [pos]);

  useEffect(() => {
    if (focusedId === id) titleRef.current?.focus();
  }, [focusedId, id]);

  useEffect(() => {
    if (fill) return undefined;
    const clampNow = () => {
      const current = posRef.current;
      const next = clampPosition(current.x, current.y, boundsRef.current, panelRef.current);
      if (!next || (next.x === current.x && next.y === current.y)) return;
      setPos(next);
      setWindowPosition(id, next.x, next.y);
    };
    const frame = requestAnimationFrame(clampNow);
    const observer = new ResizeObserver(clampNow);
    if (panelRef.current) observer.observe(panelRef.current);
    if (boundsRef.current) observer.observe(boundsRef.current);
    window.addEventListener('resize', clampNow);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', clampNow);
    };
  }, [boundsRef, fill, id, setWindowPosition]);

  const finishDrag = (event) => {
    const drag = dragRef.current;
    if (!drag || (event && drag.pointerId !== event.pointerId)) return;
    dragRef.current = null;
    if (!drag.last) return;
    setWindowPosition(id, drag.last.x, drag.last.y);
  };

  const onTitlePointerDown = (event) => {
    focusWindow(id);
    if (fill || event.button !== 0 || event.target.closest('button')) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      pointerId: event.pointerId,
      originX: pos.x,
      originY: pos.y,
      startX: event.clientX,
      startY: event.clientY,
      last: null,
    };
  };

  const onTitlePointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const next = clampPosition(
      drag.originX + event.clientX - drag.startX,
      drag.originY + event.clientY - drag.startY,
      boundsRef.current,
      panelRef.current,
    );
    if (!next) return;
    drag.last = next;
    setPos(next);
  };

  const onTitleKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeWindow(id);
      return;
    }
    if (fill) return;
    const step = event.shiftKey ? 48 : 16;
    const deltas = {
      ArrowLeft: [-step, 0],
      ArrowRight: [step, 0],
      ArrowUp: [0, -step],
      ArrowDown: [0, step],
    };
    const delta = deltas[event.key];
    if (!delta) return;
    event.preventDefault();
    const next = clampPosition(pos.x + delta[0], pos.y + delta[1], boundsRef.current, panelRef.current);
    if (!next) return;
    setPos(next);
    setWindowPosition(id, next.x, next.y);
  };

  return (
    <MotionPanel
      ref={panelRef}
      role="dialog"
      aria-labelledby={titleId}
      aria-modal="false"
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      transition={{ duration: reducedMotion ? 0 : 0.16 }}
      onPointerDown={() => focusWindow(id)}
      className={`absolute flex flex-col overflow-hidden border bg-[#101412] shadow-[0_28px_70px_rgba(0,0,0,0.42)] ${
        fill ? 'inset-2 rounded-lg md:inset-3' : 'rounded-xl'
      } ${isActive ? 'border-emerald-200/25' : 'border-white/10'}`}
      style={
        fill
          ? { zIndex: windowState.zIndex }
          : {
              zIndex: windowState.zIndex,
              left: pos.x,
              top: pos.y,
              width: 'min(56rem, calc(100% - 1.25rem))',
              height: 'min(40rem, calc(100% - 1.25rem))',
            }
      }
    >
      <div
        ref={titleRef}
        tabIndex={0}
        onKeyDown={onTitleKeyDown}
        onPointerDown={onTitlePointerDown}
        onPointerMove={onTitlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        className={`flex h-11 shrink-0 items-center gap-3 border-b border-white/10 px-3 ${
          fill ? '' : 'cursor-grab touch-none active:cursor-grabbing'
        } ${isActive ? 'bg-[#1a201c]' : 'bg-[#141816]'}`}
        aria-label={`${app.title} window. Arrow keys move it when it is not maximized. Escape closes it.`}
      >
        <div className="flex items-center gap-1.5" data-window-controls="">
          <button
            type="button"
            className="window-control window-control-close"
            aria-label={`Close ${app.title}`}
            onClick={() => closeWindow(id)}
          >
            <X size={10} aria-hidden="true" />
          </button>
          {!isMobile ? (
            <button
              type="button"
              className="window-control window-control-minimize"
              aria-label={`Minimize ${app.title}`}
              onClick={() => minimizeWindow(id)}
            >
              <Minus size={10} aria-hidden="true" />
            </button>
          ) : null}
          {!isMobile ? (
            <button
              type="button"
              className="window-control window-control-maximize"
              aria-label={isMaximized ? `Restore ${app.title}` : `Maximize ${app.title}`}
              onClick={() => maximizeWindow(id)}
            >
              <Square size={8} aria-hidden="true" />
            </button>
          ) : null}
        </div>
        <div id={titleId} className="min-w-0 flex-1 truncate text-center text-sm text-stone-100">
          {app.title}
        </div>
        <Icon size={15} className="shrink-0 text-stone-400" aria-hidden="true" />
      </div>
      <div className={app.bleed ? 'min-h-0 flex-1 overflow-hidden' : 'window-scroll min-h-0 flex-1'}>
        <Content />
      </div>
    </MotionPanel>
  );
}

export function WindowLayer({ windows, appsById, isMobile, boundsRef }) {
  const visible = windows.filter((windowItem) => !windowItem.isMinimized && appsById[windowItem.id]);
  const topZ = visible.reduce((highest, windowItem) => Math.max(highest, windowItem.zIndex), 0);

  return (
    <AnimatePresence>
      {visible.map((windowItem) => (
        <Window
          key={windowItem.id}
          app={appsById[windowItem.id]}
          windowState={windowItem}
          isActive={windowItem.zIndex === topZ}
          isMobile={isMobile}
          boundsRef={boundsRef}
        />
      ))}
    </AnimatePresence>
  );
}
