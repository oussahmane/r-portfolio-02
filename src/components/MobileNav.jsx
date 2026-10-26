import { useEffect, useRef, useState } from 'react';
import { APPS } from '../data/registry';
import { useWindowManager } from '../hooks/useWindowManager';
import LaunchButton from './LaunchButton';

function activeWindowId(windows) {
  return [...windows]
    .filter((windowItem) => !windowItem.isMinimized)
    .sort((a, b) => b.zIndex - a.zIndex)[0]?.id;
}

export default function MobileNav() {
  const { windows } = useWindowManager();
  const [moreOpen, setMoreOpen] = useState(false);
  const sheetRef = useRef(null);
  const activeId = activeWindowId(windows);
  const primary = APPS.filter((app) => app.mobile);
  const moreApps = APPS.filter((app) => !app.mobile);

  useEffect(() => {
    if (!moreOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setMoreOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [moreOpen]);

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-black/85 backdrop-blur-md md:hidden" aria-label="Applications">
      {moreOpen ? (
        <div
          ref={sheetRef}
          id="mobile-more"
          className="grid grid-cols-2 gap-1 border-b border-white/10 p-2"
          onClick={() => setMoreOpen(false)}
        >
          {moreApps.map((app) => (
            <LaunchButton
              key={app.id}
              app={app}
              current={activeId === app.id}
              showLabel
              iconSize={16}
              className="nav-link justify-start"
            />
          ))}
        </div>
      ) : null}
      <div className="grid grid-cols-5">
        {primary.map((app) => (
          <LaunchButton
            key={app.id}
            app={app}
            current={activeId === app.id}
            showLabel
            iconSize={16}
            className="mobile-tab"
          />
        ))}
        <button
          type="button"
          className="mobile-tab"
          aria-expanded={moreOpen}
          aria-controls="mobile-more"
          onClick={() => setMoreOpen((open) => !open)}
        >
          <span>More</span>
        </button>
      </div>
    </nav>
  );
}
