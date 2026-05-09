import React from 'react';
import { Monitor, Cpu, Code, Package } from 'lucide-react';

const DesktopDev = () => {
    // const projects = [
    //     {
    //         title: 'Electron App Studio',
    //         description: 'A cross-platform desktop application built with Electron, React, and Node.js for managing creative assets.',
    //         icon: Monitor,
    //         tech: ['Electron', 'React', 'Tailwind'],
    //         color: 'bg-blue-500/10 text-blue-400 border-blue-500/30'
    //     },
    //     {
    //         title: 'Python Data Analyzer',
    //         description: 'High-performance local data processing tool using Python, Pandas, and PyQt5 for the UI.',
    //         icon: Cpu,
    //         tech: ['Python', 'PyQt5', 'Pandas'],
    //         color: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30'
    //     },
    //     {
    //         title: 'C++ Game Engine',
    //         description: 'Custom 2D rendering engine built from scratch using C++ and OpenGL for maximum performance.',
    //         icon: GamepadIcon, // Will define inline
    //         tech: ['C++', 'OpenGL', 'CMake'],
    //         color: 'bg-purple-500/10 text-purple-400 border-purple-500/30'
    //     },
    //     {
    //         title: 'Rust CLI Tools',
    //         description: 'Blazing fast command-line utilities for system administration built with Rust.',
    //         icon: Code,
    //         tech: ['Rust', 'Cargo', 'CLI'],
    //         color: 'bg-orange-500/10 text-orange-400 border-orange-500/30'
    //     }
    // ];


    const projects = [
    {
        title: 'Desktop Development',
        description: 'Strong knowledge of desktop and system-level programming with experience in compiled and cross-platform technologies.',
        icon: Monitor,
        tech: ['C', 'C++', 'Java', 'Python', 'Electron'],
        color: 'bg-blue-500/10 text-blue-400 border-blue-500/30'
    }
];

    return (
        <div className="p-8 h-full bg-[#1e1e1e] overflow-y-auto">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-2 text-white/90">Desktop Applications</h1>
                <p className="text-white/60 mb-8 border-b border-white/10 pb-4">
                    Building powerful, native-feeling applications across macOS, Windows, and Linux.
                </p>

                <div className="space-y-6">
                    {projects.map((project, idx) => {
                        const Icon = project.icon;
                        return (
                            <div key={idx} className={`relative p-6 rounded-2xl border ${project.color} bg-black/20 hover:bg-black/40 transition-colors group flex items-start space-x-6`}>
                                <div className="p-4 rounded-xl bg-black/50 backdrop-blur-sm shadow-inner hidden sm:block">
                                    <Icon size={32} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white/90 mb-2">{project.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-2xl">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 text-xs font-medium bg-black/30 rounded-full border border-white/10 text-white/70">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// Quick functional icon since Gamepad is not imported
function GamepadIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="6" y1="12" x2="10" y2="12" />
            <line x1="8" y1="10" x2="8" y2="14" />
            <line x1="15" y1="13" x2="15.01" y2="13" />
            <line x1="18" y1="11" x2="18.01" y2="11" />
            <rect x="2" y="6" width="20" height="12" rx="2" />
        </svg>
    );
}

export default DesktopDev;
