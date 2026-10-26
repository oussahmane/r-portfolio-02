import { useEffect, useRef, useState } from 'react';
import { LayoutGrid } from 'lucide-react';
import { APPS } from '../data/registry';
import { useWindowManager } from '../hooks/useWindowManager';
import LaunchButton from './LaunchButton';

function activeWindowId(windows) {
  return [...windows]
    .filter((windowItem) => !windowItem.isMinimized)
    .sort((a, b) => b.zIndex - a.zIndex)[0]?.id;
}

export default function Dock() {
  const { windows, openWindow } = useWindowManager();
  const [launcherOpen, setLauncherOpen] = useState(false);
  const launcherRef = useRef(null);
  const activeId = activeWindowId(windows);
  const dockApps = APPS.filter((app) => app.dock);

  useEffect(() => {
    if (!launcherOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setLauncherOpen(false);
    };
    const onPointer = (event) => {
      if (!launcherRef.current?.contains(event.target)) setLauncherOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [launcherOpen]);

  return (
    <nav
      className="fixed bottom-0 left-0 top-11 z-30 hidden w-16 flex-col items-center border-r border-white/10 bg-black/80 py-3 backdrop-blur-md md:flex"
      aria-label="Applications"
    >
      <div className="flex w-full flex-1 flex-col items-center gap-2 overflow-y-auto px-2">
        {dockApps.map((app) => (
          <LaunchButton
            key={app.id}
            app={app}
            current={activeId === app.id}
            iconSize={20}
            className="dock-button"
          />
        ))}
      </div>
      <div ref={launcherRef} className="relative mt-2">
        <button
          type="button"
          className="dock-button"
          aria-label="All applications"
          aria-expanded={launcherOpen}
          aria-controls="app-launcher"
          onClick={() => setLauncherOpen((open) => !open)}
        >
          <LayoutGrid size={20} aria-hidden="true" />
        </button>
        {launcherOpen ? (
          <div
            id="app-launcher"
            role="menu"
            className="absolute bottom-0 left-14 z-40 w-56 rounded-xl border border-white/10 bg-[#141816] p-1 shadow-2xl"
          >
            {APPS.map((app) => (
              <button
                key={app.id}
                type="button"
                role="menuitem"
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-stone-100 hover:bg-white/5"
                onClick={() => {
                  openWindow(app.id);
                  setLauncherOpen(false);
                }}
              >
                <app.icon size={16} aria-hidden="true" />
                {app.title}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}
