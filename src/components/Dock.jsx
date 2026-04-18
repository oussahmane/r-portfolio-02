import React from 'react';
import { useWindowManager } from '../contexts/WindowManagerContext';
import { Terminal as TerminalIcon, Code, Smartphone, Monitor, Shield, Grip } from 'lucide-react';

// Import our custom apps
import WebDev from './apps/WebDev';
import MobileDev from './apps/MobileDev';
import DesktopDev from './apps/DesktopDev';
import Cybersecurity from './apps/Cybersecurity';
import Terminal from './apps/Terminal';
import OperatingSystems from './apps/OperatingSystems';
import Networking from './apps/Networking';

const DOCK_APPS = [
    { id: 'web', title: 'Web Development', icon: Code, component: WebDev, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { id: 'mobile', title: 'Mobile Development', icon: Smartphone, component: MobileDev, color: 'text-green-400', bg: 'bg-green-500/10' },
    { id: 'desktop', title: 'Desktop Apps', icon: Monitor, component: DesktopDev, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { id: 'os', title: 'Operating Systems', icon: TerminalIcon, component: OperatingSystems, color: 'text-orange-400', bg: 'bg-orange-500/10' },
    { id: 'network', title: 'Networking', icon: Shield, component: Networking, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { id: 'cyber', title: 'Cybersecurity', icon: Shield, component: Cybersecurity, color: 'text-red-400', bg: 'bg-red-500/10' },
    { id: 'terminal', title: 'Terminal', icon: TerminalIcon, component: Terminal, color: 'text-white', bg: 'bg-white/10' },
];

const Dock = () => {
    const { openWindow, windows } = useWindowManager();

    const handleAppClick = (app) => {
        openWindow(app.id, app.title, app.icon, app.component);
    };

    return (
        <div className="fixed left-0 top-7 bottom-0 w-12 sm:w-16 bg-black/60 flex flex-col items-center py-4 z-40 backdrop-blur-md shadow-xl border-r border-white/10">
            <div className="flex-1 flex flex-col items-center space-y-2 sm:space-y-4 w-full">
                {DOCK_APPS.map((app) => {
                    const isOpen = windows.some((w) => w.id === app.id);
                    const Icon = app.icon;

                    return (
                        <div
                            key={app.id}
                            className="relative group flex items-center justify-center w-full"
                        >
                            <button
                                onClick={() => handleAppClick(app)}
                                className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-white/10 ${isOpen ? 'bg-white/5' : ''
                                    } ${app.bg} hover:shadow-lg`}
                                title={app.title}
                            >
                                <Icon size={20} className={`${app.color} drop-shadow-md sm:w-6 sm:h-6`} />
                            </button>

                            {/* Open Indicator Dot */}
                            {isOpen && (
                                <div className="absolute left-1 w-1.5 h-1.5 rounded-full bg-[#E95420]" />
                            )}

                            {/* Tooltip */}
                            <div className="absolute left-16 px-3 py-1 bg-black/80 text-white text-xs whitespace-nowrap rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                                {app.title}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* App Drawer Icon (Show Applications) */}
            <div className="mt-auto pt-4 relative group w-full flex justify-center flex-shrink-0">
                <button
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                    title="Show Applications"
                >
                    <Grip size={20} className="text-white opacity-80 sm:w-6 sm:h-6" />
                </button>
            </div>
        </div>
    );
};

export default Dock;
