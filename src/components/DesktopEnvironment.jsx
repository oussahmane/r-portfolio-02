import React from 'react';
import TopBar from './TopBar';
import Dock from './Dock';
import Window from './Window';
import { useWindowManager } from '../contexts/WindowManagerContext';
import { AnimatePresence } from 'framer-motion';
import { Folder, Monitor, Terminal } from 'lucide-react';
import FolderView from './apps/FolderView';
import MatrixBackground from './MatrixBackground';

const DESKTOP_STRUCTURE = [
    {
        id: 'offensive-root',
        title: 'Offensive',
        icon: Folder,
        color: 'text-red-600',
        subFolders: [
            { title: 'web-security-labs', type: 'Application', icon: <Terminal size={32} /> },
            { title: 'pentesting-reports', type: 'Application', icon: <Terminal size={32} /> },
            { title: 'ctf-writeups', type: 'Application', icon: <Terminal size={32} /> },
            { title: 'beginner', type: 'Application', icon: <Terminal size={32} /> },
        ]
    },
    {
        id: 'defensive-root',
        title: 'Defensive',
        icon: Folder,
        color: 'text-blue-500',
        subFolders: [
            { title: 'siem-project', type: 'Application', icon: <Monitor size={32} /> },
            { title: 'network-tools', type: 'Application', icon: <Monitor size={32} /> },
        ]
    }
];

const DesktopEnvironment = () => {
    const { windows, openWindow } = useWindowManager();

    const handleFolderClick = (folder) => {
        openWindow(
            folder.id, 
            folder.title, 
            folder.icon, 
            () => <FolderView folderName={folder.title} subFolders={folder.subFolders} />
        );
    };

    return (
        <div className="w-screen h-screen overflow-hidden relative selection:bg-emerald-500/20 select-none bg-transparent">
            <MatrixBackground />
            <TopBar />
            <Dock />

            {/* Desktop Icons Grid */}
            <div className="absolute top-12 left-16 sm:left-20 p-8 grid grid-cols-1 gap-12 w-fit z-0">
                {DESKTOP_STRUCTURE.map((folder) => {
                    const Icon = folder.icon;
                    return (
                        <div 
                            key={folder.id}
                            onClick={() => handleFolderClick(folder)}
                            className="flex flex-col items-center justify-center space-y-2 group cursor-pointer w-24 p-2 rounded-xl hover:bg-white/5 transition-all"
                        >
                            <div className={`relative p-1 ${folder.color} group-hover:scale-110 transition-transform duration-300`}>
                                <Icon size={58} className="drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
                                <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <span className="text-[11px] font-bold text-white shadow-black drop-shadow-lg text-center leading-tight uppercase tracking-widest px-1 py-0.5 bg-black/20 rounded backdrop-blur-sm border border-white/5">
                                {folder.title}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Desktop Area for Windows */}
            <div className="absolute top-0 left-0 right-0 bottom-0 z-10 overflow-hidden pointer-events-none">
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
