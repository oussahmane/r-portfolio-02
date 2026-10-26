import { useEffect, useRef } from 'react';
import { profile } from '../data/profile';
import { APPS, appsById } from '../data/registry';
import { useWindowManager } from '../hooks/useWindowManager';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Dock from './Dock';
import LaunchButton from './LaunchButton';
import MatrixBackground from './MatrixBackground';
import MobileNav from './MobileNav';
import TopBar from './TopBar';
import { WindowLayer } from './Window';

function activeWindowId(windows) {
  return [...windows]
    .filter((windowItem) => !windowItem.isMinimized)
    .sort((a, b) => b.zIndex - a.zIndex)[0]?.id;
}

export default function DesktopEnvironment() {
  const boundsRef = useRef(null);
  const placedRef = useRef(false);
  const { windows, setWindowPosition } = useWindowManager();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const activeId = activeWindowId(windows);
  const desktopApps = APPS.filter((app) => app.desktop);

  useEffect(() => {
    if (placedRef.current || isMobile) return;
    const bounds = boundsRef.current;
    if (!bounds) return;
    placedRef.current = true;
    const width = Math.min(bounds.clientWidth - 20, 56 * 16);
    const height = Math.min(bounds.clientHeight - 20, 40 * 16);
    setWindowPosition(
      'about',
      Math.max(16, Math.round((bounds.clientWidth - width) / 2)),
      Math.max(16, Math.round((bounds.clientHeight - height) / 2)),
    );
  }, [isMobile, setWindowPosition]);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-[#070807] text-stone-100">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-14 focus:z-[80] focus:rounded-md focus:bg-[#17382c] focus:px-3 focus:py-2"
        href="#workspace"
      >
        Skip to content
      </a>
      <h1 className="sr-only">{`${profile.name}, ${profile.role}`}</h1>
      <MatrixBackground />
      <TopBar />
      <Dock />
      <MobileNav />
      <nav className="absolute left-16 top-14 z-20 hidden w-28 flex-col gap-4 xl:flex" aria-label="Desktop">
        {desktopApps.map((app) => (
          <LaunchButton
            key={app.id}
            app={app}
            current={activeId === app.id}
            showLabel
            iconSize={30}
            className="desktop-icon"
          />
        ))}
      </nav>
      <main
        id="workspace"
        ref={boundsRef}
        className="absolute bottom-16 left-0 right-0 top-11 z-10 md:bottom-0 md:left-16 xl:left-44"
      >
        <WindowLayer windows={windows} appsById={appsById()} isMobile={isMobile} boundsRef={boundsRef} />
      </main>
    </div>
  );
}
