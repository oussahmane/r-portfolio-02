import React from 'react';
import TopBar from './TopBar';
import Dock from './Dock';
import Window from './Window';
import { useWindowManager } from '../contexts/WindowManagerContext';
import { AnimatePresence } from 'framer-motion';

const DesktopEnvironment = () => {
    const { windows } = useWindowManager();

    return (
        <div className="w-screen h-screen overflow-hidden relative selection:bg-emerald-500/20 select-none bg-transparent">
            <TopBar />
            <Dock />

            {/* Desktop Area for Windows */}
            <div className="absolute top-0 left-0 right-0 bottom-0 z-10 overflow-hidden pointer-events-none">
                {/* We need pointer events on windows, so we reset it for children */}
                <AnimatePresence>
                    {windows.map((window) => (
                        <div key={window.id} className="pointer-events-auto">
                            <Window window={window} />
                        </div>
                    ))}
                </AnimatePresence>
            </div>

        </div>
    );
};

export default DesktopEnvironment;
