import { memo, useEffect, useRef } from 'react';

const GLYPHS = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉ0123456789';

function readReduced() {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = navigator.connection?.saveData === true;
  return motion || saveData;
}

function MatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const context = canvas.getContext('2d', { alpha: false });
    if (!context) return undefined;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduced = readReduced();
    let alive = true;
    let frameId = 0;
    let width = 0;
    let height = 0;
    let columns = [];
    let lastTime = 0;

    const gapFor = () => (width < 768 ? 28 : 22);
    const fontFor = () => (width < 768 ? 14 : 16);

    const paintStatic = () => {
      context.fillStyle = '#070807';
      context.fillRect(0, 0, width, height);
      context.font = `${fontFor()}px ui-monospace, monospace`;
      context.fillStyle = 'rgba(126, 168, 146, 0.18)';
      const gap = gapFor();
      for (let x = gap; x < width; x += gap * 3) {
        for (let y = 48; y < height; y += 72) {
          context.fillText(GLYPHS[(x + y) % GLYPHS.length], x, y);
        }
      }
    };

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      const count = Math.max(1, Math.ceil(width / gapFor()));
      const next = [];
      for (let index = 0; index < count; index += 1) {
        next.push(
          columns[index] || {
            y: Math.random() * height,
            speed: 1.4 + Math.random() * 2.2,
            glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
            changeIn: 8 + Math.random() * 18,
          },
        );
      }
      columns = next;
      context.fillStyle = '#070807';
      context.fillRect(0, 0, width, height);
      if (reduced) paintStatic();
    };

    const frame = (time) => {
      if (!alive) return;
      frameId = requestAnimationFrame(frame);
      if (reduced || document.hidden) return;
      const minDelta = width < 768 ? 50 : 34;
      if (time - lastTime < minDelta) return;
      const delta = Math.min(48, time - lastTime || minDelta);
      lastTime = time;

      context.fillStyle = 'rgba(7, 8, 7, 0.22)';
      context.fillRect(0, 0, width, height);
      const gap = gapFor();
      const fontSize = fontFor();
      context.font = `${fontSize}px ui-monospace, monospace`;

      for (let index = 0; index < columns.length; index += 1) {
        const column = columns[index];
        column.changeIn -= 1;
        if (column.changeIn <= 0) {
          column.glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          column.changeIn = 12 + Math.random() * 24;
        }
        const alpha = 0.22 + (index % 4) * 0.08;
        context.fillStyle = `rgba(158, 214, 180, ${alpha})`;
        context.fillText(column.glyph, index * gap + 2, column.y);
        column.y += column.speed * (delta / 16.67);
        if (column.y > height + fontSize) {
          column.y = -Math.random() * height * 0.35;
          column.speed = 1.4 + Math.random() * 2.2;
        }
      }
    };

    const onMotion = () => {
      reduced = readReduced();
      if (reduced) paintStatic();
    };

    const onVisibility = () => {
      lastTime = 0;
    };

    resize();
    frameId = requestAnimationFrame(frame);
    window.addEventListener('resize', resize);
    motionQuery.addEventListener('change', onMotion);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      alive = false;
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      motionQuery.removeEventListener('change', onMotion);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}

export default memo(MatrixBackground);
