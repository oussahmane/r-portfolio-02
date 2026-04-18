import React from 'react';
import { Network, Router, Globe, ShieldCheck } from 'lucide-react';

const Networking = () => {
    return (
        <div className="p-8 h-full bg-[#1e1e1e] overflow-y-auto">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-3 mb-2">
                    <Network size={32} className="text-cyan-400" />
                    <h1 className="text-3xl font-bold text-white/90">Networking</h1>
                </div>
                <p className="text-white/60 mb-8 border-b border-white/10 pb-4">
                    Strong foundation in network architectures, protocols, routing, and switching.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* CCNA 1 */}
                    <div className="bg-[#2D2D2D] p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                                <Globe size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white/90">CCNA 1</h3>
                                <p className="text-cyan-400 text-sm">Introduction to Networks</p>
                            </div>
                        </div>
                        <ul className="space-y-2 text-white/70 text-sm list-disc pl-5">
                            <li>Network architectures and protocols</li>
                            <li>OSI and TCP/IP models</li>
                            <li>Ethernet concepts and media</li>
                            <li>IPv4 and IPv6 addressing and subnetting</li>
                        </ul>
                    </div>

                    {/* CCNA 2 */}
                    <div className="bg-[#2D2D2D] p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                                <Router size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white/90">CCNA 2</h3>
                                <p className="text-indigo-400 text-sm">Routing, Switching & Wireless Essentials</p>
                            </div>
                        </div>
                        <ul className="space-y-2 text-white/70 text-sm list-disc pl-5">
                            <li>Switching concepts and VLANs</li>
                            <li>Routing concepts and configurations</li>
                            <li>Inter-VLAN routing (IVR)</li>
                            <li>Wireless LAN concepts and security</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Networking;
