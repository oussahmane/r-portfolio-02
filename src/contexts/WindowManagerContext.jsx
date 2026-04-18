import React, { createContext, useContext, useState, useCallback } from 'react';

const WindowManagerContext = createContext();

export const useWindowManager = () => useContext(WindowManagerContext);

export const WindowManagerProvider = ({ children }) => {
    const [windows, setWindows] = useState([]);
    const [activeZIndex, setActiveZIndex] = useState(1);

    const openWindow = useCallback((appId, title, icon, contentComponent) => {
        setWindows((prev) => {
            const existingWindow = prev.find((w) => w.id === appId);
            const newZIndex = activeZIndex + 1;
            setActiveZIndex(newZIndex);

            if (existingWindow) {
                // If already open, just bring to front and un-minimize if needed
                return prev.map((w) =>
                    w.id === appId
                        ? { ...w, isMinimized: false, zIndex: newZIndex }
                        : w
                );
            }

            // Otherwise, open new window
            return [
                ...prev,
                {
                    id: appId,
                    title,
                    icon,
                    content: contentComponent,
                    isMinimized: false,
                    isMaximized: false,
                    zIndex: newZIndex,
                },
            ];
        });
    }, [activeZIndex]);

    const closeWindow = useCallback((appId) => {
        setWindows((prev) => prev.filter((w) => w.id !== appId));
    }, []);

    const minimizeWindow = useCallback((appId) => {
        setWindows((prev) =>
            prev.map((w) => (w.id === appId ? { ...w, isMinimized: true } : w))
        );
    }, []);

    const maximizeWindow = useCallback((appId) => {
        setWindows((prev) =>
            prev.map((w) =>
                w.id === appId ? { ...w, isMaximized: !w.isMaximized } : w
            )
        );
    }, []);

    const focusWindow = useCallback((appId) => {
        setWindows((prev) => {
            const windowToFocus = prev.find((w) => w.id === appId);
            if (!windowToFocus || windowToFocus.zIndex === activeZIndex) return prev;

            const newZIndex = activeZIndex + 1;
            setActiveZIndex(newZIndex);

            return prev.map((w) =>
                w.id === appId ? { ...w, isMinimized: false, zIndex: newZIndex } : w
            );
        });
    }, [activeZIndex]);

    return (
        <WindowManagerContext.Provider
            value={{
                windows,
                openWindow,
                closeWindow,
                minimizeWindow,
                maximizeWindow,
                focusWindow,
                activeZIndex,
            }}
        >
            {children}
        </WindowManagerContext.Provider>
    );
};
