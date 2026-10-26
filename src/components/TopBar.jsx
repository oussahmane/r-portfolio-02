import { useEffect, useRef, useState } from 'react';
import { Menu } from 'lucide-react';
import { profile } from '../data/profile';
import { APPS } from '../data/registry';
import { useWindowManager } from '../hooks/useWindowManager';
import LaunchButton from './LaunchButton';

function activeWindowId(windows) {
  return [...windows]
    .filter((windowItem) => !windowItem.isMinimized)
    .sort((a, b) => b.zIndex - a.zIndex)[0]?.id;
}

export default function TopBar() {
  const { windows, openWindow } = useWindowManager();
  const [now, setNow] = useState(() => new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const activeId = activeWindowId(windows);
  const navApps = APPS.filter((app) => app.nav);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const onPointer = (event) => {
      if (!menuRef.current?.contains(event.target)) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [menuOpen]);

  const clock = now.toLocaleString('en', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <header className="fixed inset-x-0 top-0 z-30 grid h-11 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 border-b border-white/10 bg-black/75 px-3 text-stone-100 backdrop-blur-md">
      <p className="truncate text-sm font-medium">{profile.name}</p>
      <time className="px-2 text-xs text-stone-300" dateTime={now.toISOString()}>
        <span className="hidden sm:inline">{clock}</span>
        <span className="sm:hidden">
          {now.toLocaleTimeString('en', { hour: 'numeric', minute: '2-digit' })}
        </span>
      </time>
      <div className="flex items-center justify-end">
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Portfolio">
          {navApps.map((app) => (
            <LaunchButton
              key={app.id}
              app={app}
              current={activeId === app.id}
              showIcon={false}
              showLabel
              className="nav-link"
            />
          ))}
        </nav>
        <div ref={menuRef} className="relative lg:hidden">
          <button
            type="button"
            className="btn btn-secondary h-8 px-2"
            aria-expanded={menuOpen}
            aria-controls="app-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu size={16} aria-hidden="true" />
            <span>Menu</span>
          </button>
          {menuOpen ? (
            <div id="app-menu" role="menu" className="absolute right-0 top-10 z-40 w-52 rounded-xl border border-white/10 bg-[#141816] p-1 shadow-2xl">
              {APPS.map((app) => (
                <button
                  key={app.id}
                  type="button"
                  role="menuitem"
                  className="flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-stone-100 hover:bg-white/5"
                  onClick={() => {
                    openWindow(app.id);
                    setMenuOpen(false);
                  }}
                >
                  {app.title}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
