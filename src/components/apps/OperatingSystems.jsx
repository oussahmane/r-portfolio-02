import React from 'react';
import { TerminalSquare, Server } from 'lucide-react';

const OperatingSystems = () => {
    const osList = [
        { name: 'Windows', type: 'Desktop' },
        { name: 'Linux', type: 'Kernel/General' },
        { name: 'Ubuntu', type: 'Desktop/Server' },
        { name: 'Debian', type: 'Desktop/Server' },
        { name: 'Linux Mint', type: 'Desktop' },
        { name: 'Kali Linux', type: 'Security' },
        { name: 'Parrot OS', type: 'Security' },
        { name: 'Arch Linux', type: 'Desktop/Advanced' },
        { name: 'Manjaro', type: 'Desktop' },
        { name: 'Ubuntu Server', type: 'Server' },
        { name: 'Debian Server', type: 'Server' },
    ];

    return (
        <div className="p-8 h-full bg-[#1e1e1e] overflow-y-auto">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-3 mb-2">
                    <TerminalSquare size={32} className="text-orange-400" />
                    <h1 className="text-3xl font-bold text-white/90">Operating Systems</h1>
                </div>
                <p className="text-white/60 mb-8 border-b border-white/10 pb-4">
                    Extensive experience configuring, managing, and developing across various OS environments.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {osList.map((os) => (
                        <div
                            key={os.name}
                            className="bg-[#2D2D2D] p-5 rounded-xl border border-white/5 hover:border-orange-500/30 hover:bg-black/30 transition-all flex flex-col items-center justify-center space-y-2 cursor-pointer group"
                        >
                            {os.name.includes('Server') ? (
                                <Server size={28} className="text-gray-400 group-hover:text-orange-400 transition-colors" />
                            ) : (
                                <TerminalSquare size={28} className="text-gray-400 group-hover:text-orange-400 transition-colors" />
                            )}
                            <span className="font-semibold text-white/80 group-hover:text-white transition-colors text-center">{os.name}</span>
                            <span className="text-xs text-white/40">{os.type}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OperatingSystems;
