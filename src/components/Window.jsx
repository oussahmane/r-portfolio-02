import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useWindowManager } from '../contexts/WindowManagerContext';

const Window = ({ window: appWindow }) => {
    const { closeWindow, minimizeWindow, maximizeWindow, focusWindow, activeZIndex } = useWindowManager();
    const constraintsRef = useRef(null);

    const { id, title, content: ContentComponent, icon: Icon, isMinimized, isMaximized, zIndex } = appWindow;

    const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMinimized) return null;

    const isActive = zIndex === activeZIndex;

    const windowVariants = {
        initial: { opacity: 0, scale: 0.95, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: 20 },
    };

    return (
        <motion.div
            drag={!isMaximized && !isMobile}
            dragElastic={0}
            dragMomentum={false}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={windowVariants}
            transition={{ duration: 0.2 }}
            onPointerDown={() => focusWindow(id)}
            className={`absolute flex flex-col overflow-hidden bg-[#0A0A0A] md:rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] border border-white/10 ${isMaximized
                ? 'top-7 left-12 sm:left-16 right-0 bottom-0 w-auto h-auto rounded-none'
                : 'top-7 md:top-20 left-12 sm:left-16 md:left-40 right-0 md:right-auto bottom-0 md:bottom-auto w-auto md:w-[900px] h-[calc(100vh-1.75rem)] md:h-[650px] max-w-[calc(100vw-3rem)] sm:max-w-[calc(100vw-4rem)] md:max-w-[calc(100vw-5rem)] max-h-[calc(100vh-1.75rem)] md:max-h-[calc(100vh-3rem)] rounded-none md:rounded-2xl'
                }`}
            style={{ zIndex }}
        >
            {/* Window Header */}
            <div
                className={`h-11 flex items-center justify-between px-4 select-none ${isActive ? 'bg-[#151515]' : 'bg-[#0F0F0F]'
                    } border-b border-white/5 handle cursor-grab active:cursor-grabbing`}
            >
                {/* Left Side: Window Controls (Ubuntu style) */}
                <div className="flex items-center space-x-2">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            closeWindow(id);
                        }}
                        className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 flex items-center justify-center transition-all shadow-md group"
                    >
                        <span className="opacity-0 group-hover:opacity-100 text-[6px] text-black">✖</span>
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            minimizeWindow(id);
                        }}
                        className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 flex items-center justify-center transition-all shadow-md group"
                    >
                        <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black pb-1">-</span>
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            maximizeWindow(id);
                        }}
                        className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 flex items-center justify-center transition-all shadow-md group"
                    >
                        <span className="opacity-0 group-hover:opacity-100 text-[6px] text-black rotate-45">⤢</span>
                    </button>
                </div>

                {/* Center: Title */}
                <div className="flex-1 text-center font-medium text-sm text-white/90 truncate px-4 pointer-events-none">
                    {title}
                </div>

                {/* Right Side: Spacer to balance title centering */}
                <div className="w-16 flex justify-end">
                    {Icon && <Icon size={16} className="text-white/50" />}
                </div>
            </div>

            {/* Window Content */}
            <div className="flex-1 overflow-auto bg-[#1E1E1E]">
                {ContentComponent && <ContentComponent />}
            </div>
        </motion.div>
    );
};

export default Window;
