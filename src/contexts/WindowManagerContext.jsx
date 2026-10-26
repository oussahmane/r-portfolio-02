import { useCallback, useState } from 'react';
import { WindowManagerContext } from './windowContext';

const INITIAL_WINDOWS = [
  { id: 'about', isMinimized: false, isMaximized: false, zIndex: 1, x: 28, y: 24 },
];

function nextZ(windows) {
  return windows.reduce((highest, windowItem) => Math.max(highest, windowItem.zIndex), 0) + 1;
}

export function WindowManagerProvider({ children }) {
  const [windows, setWindows] = useState(INITIAL_WINDOWS);
  const [focusedId, setFocusedId] = useState(null);

  const openWindow = useCallback((appId) => {
    setFocusedId(appId);
    setWindows((current) => {
      const existing = current.find((windowItem) => windowItem.id === appId);
      const zIndex = nextZ(current);
      if (existing) {
        return current.map((windowItem) =>
          windowItem.id === appId ? { ...windowItem, isMinimized: false, zIndex } : windowItem,
        );
      }
      const offset = current.length % 5;
      return [
        ...current,
        {
          id: appId,
          isMinimized: false,
          isMaximized: false,
          zIndex,
          x: 28 + offset * 32,
          y: 24 + offset * 28,
        },
      ];
    });
  }, []);

  const closeWindow = useCallback((appId) => {
    setWindows((current) => current.filter((windowItem) => windowItem.id !== appId));
    queueMicrotask(() => {
      const candidates = [...document.querySelectorAll(`[data-launch="${CSS.escape(appId)}"]`)];
      const visible = candidates.find((element) => element.getClientRects().length > 0);
      (visible || candidates[0])?.focus();
    });
  }, []);

  const minimizeWindow = useCallback((appId) => {
    setWindows((current) =>
      current.map((windowItem) =>
        windowItem.id === appId ? { ...windowItem, isMinimized: true } : windowItem,
      ),
    );
  }, []);

  const maximizeWindow = useCallback((appId) => {
    setWindows((current) =>
      current.map((windowItem) =>
        windowItem.id === appId ? { ...windowItem, isMaximized: !windowItem.isMaximized } : windowItem,
      ),
    );
  }, []);

  const focusWindow = useCallback((appId) => {
    setWindows((current) => {
      const target = current.find((windowItem) => windowItem.id === appId);
      if (!target) return current;
      const zIndex = nextZ(current);
      if (target.zIndex === zIndex - 1 && !target.isMinimized) return current;
      return current.map((windowItem) =>
        windowItem.id === appId ? { ...windowItem, isMinimized: false, zIndex } : windowItem,
      );
    });
  }, []);

  const setWindowPosition = useCallback((appId, x, y) => {
    setWindows((current) =>
      current.map((windowItem) => (windowItem.id === appId ? { ...windowItem, x, y } : windowItem)),
    );
  }, []);

  return (
    <WindowManagerContext.Provider
      value={{
        windows,
        openWindow,
        focusedId,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        focusWindow,
        setWindowPosition,
      }}
    >
      {children}
    </WindowManagerContext.Provider>
  );
}
