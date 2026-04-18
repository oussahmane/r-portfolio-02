import React, { useEffect, useState } from 'react';
import { ShieldAlert, ServerCog, Fingerprint, Lock, ShieldCheck, Terminal, Target, Database, Activity } from 'lucide-react';

const Cybersecurity = () => {
    const [matrixText, setMatrixText] = useState('');

    useEffect(() => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~';
        let iter = 0;
        const interval = setInterval(() => {
            let text = '';
            for (let i = 0; i < 200; i++) {
                text += chars.charAt(Math.floor(Math.random() * chars.length));
                if (i % 40 === 0) text += '\n';
            }
            setMatrixText(text);
            iter++;
            if (iter > 10) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full bg-[#050505] text-emerald-500 font-mono relative overflow-hidden flex flex-col">
            {/* Matrix Background Effect */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none overflow-hidden select-none whitespace-pre-wrap break-all text-[10px] leading-none tracking-tighter">
                {matrixText.repeat(10)}
            </div>

            <div className="relative z-10 p-8 flex-1 overflow-y-auto custom-scrollbar">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                        <div className="flex items-center space-x-6">
                            <div className="p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.15)] animate-pulse">
                                <ShieldAlert size={48} className="text-emerald-400" />
                            </div>
                            <div>
                                <h1 className="text-5xl font-black tracking-[0.2em] uppercase text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.4)]">
                                    Offensive Security
                                </h1>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-800 rounded">AUTH_LEVEL: ROOT</span>
                                    <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-800 rounded">STATUS: ACTIVE_PENTEST</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column: Certs & Skills */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Certifications Card */}
                            <div className="bg-[#0A0A0A] border border-emerald-500/20 p-6 rounded-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <ShieldCheck size={100} />
                                </div>
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <Terminal size={20} className="text-emerald-400" /> Professional_Credentials
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { name: "CCNA Ethical Hacker", level: "L3 EXPERT" },
                                        { name: "Cisco Networking Expert (1, 2, 3)", level: "L3 CERTIFIED" },
                                        { name: "TryHackMe - Top 1% Global", level: "PLATINUM RANK" },
                                        { name: "CompTIA Security+", level: "ASSOCIATE" }
                                    ].map(cert => (
                                        <div key={cert.name} className="p-4 bg-emerald-900/10 border border-emerald-500/10 rounded-xl group hover:border-emerald-500/40 transition-all">
                                            <span className="text-[10px] font-bold text-emerald-600 tracking-[0.15em] mb-1 block">{cert.level}</span>
                                            <h3 className="text-emerald-100 font-bold leading-tight group-hover:text-emerald-400 transition-colors uppercase">{cert.name}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTF Progress & Rankings */}
                            <div className="bg-[#0A0A0A] border border-emerald-500/20 p-6 rounded-2xl relative overflow-hidden">
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <Target size={20} className="text-emerald-400" /> Operational_Performance
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between mb-2 text-sm font-bold">
                                            <span>TRYHACKME_RANKING</span>
                                            <span className="text-emerald-400">99.8th PERCENTILE</span>
                                        </div>
                                        <div className="h-2 bg-emerald-950 rounded-full overflow-hidden border border-emerald-800">
                                            <div className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] w-[99.8%]" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {[
                                            { label: "CTFS_CAPTURED", val: "150+" },
                                            { label: "MACHINES_DOWN", val: "85" },
                                            { label: "LAB_HOURS", val: "1200+" },
                                            { label: "VULNS_FOUND", val: "32" }
                                        ].map(stat => (
                                            <div key={stat.label} className="text-center p-3 border border-emerald-900/30 rounded-lg">
                                                <div className="text-2xl font-black text-emerald-400">{stat.val}</div>
                                                <div className="text-[9px] text-emerald-700 font-bold uppercase">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Toolkit & Lab */}
                        <div className="space-y-8">
                            {/* Arsenal */}
                            <div className="bg-emerald-950/20 border border-emerald-500/30 p-6 rounded-2xl">
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <ServerCog size={20} className="text-emerald-400" /> Arsenal_V3
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {['Metasploit', 'Burp Suite', 'Nmap', 'Wireshark', 'Hydra', 'Hashcat', 'Autopsy', 'Ghidra', 'OWASP ZAP', 'Cobalt Strike'].map(tool => (
                                        <span key={tool} className="px-3 py-1 bg-emerald-900/30 border border-emerald-600/30 rounded-md text-[11px] font-bold text-emerald-300 hover:bg-emerald-400 hover:text-black transition-all cursor-crosshair">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Home Lab Environment */}
                            <div className="bg-[#0A0A0A] border border-emerald-500/20 p-6 rounded-2xl relative overflow-hidden group">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                                    <Database size={20} className="text-emerald-400" /> Lab_Environment
                                </h2>
                                <div className="space-y-3 font-mono text-xs opacity-80 group-hover:opacity-100 transition-opacity">
                                    <div className="flex items-center gap-2">
                                        <Activity size={12} className="text-emerald-600" />
                                        <span>HYPERVISOR: PROXMOX / ESXI</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Activity size={12} className="text-emerald-600" />
                                        <span>NETWORKING: PFSENSE / OPNSENSE</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Activity size={12} className="text-emerald-600" />
                                        <span>ACTIVE_DIRECTORY: WIN_SERVER_2022</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Activity size={12} className="text-emerald-600" />
                                        <span>IDS/IPS: SNORT / SURICATA</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Activity size={12} className="text-emerald-600" />
                                        <span>HONEYPOTS: COWRIE / DIONAEA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer System Console */}
                    <div className="mt-8 p-4 bg-black/80 border border-emerald-500/50 font-mono text-[10px] leading-relaxed text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                        <div className="flex items-center justify-between opacity-60 mb-2 border-b border-emerald-900/50 pb-1">
                            <span>SYSTEM_CONSOLE // DEBUG_MODE</span>
                            <span>UTC: {new Date().toISOString()}</span>
                        </div>
                        <p className="flex items-center gap-2"><span className="text-emerald-700">[INFO]</span> root_access: GRANTED</p>
                        <p className="flex items-center gap-2"><span className="text-emerald-700">[INFO]</span> network_auditing_seq: IN_PROGRESS</p>
                        <p className="flex items-center gap-2"><span className="text-emerald-700">[INFO]</span> hash_cracking_worker: 4 NODES ONLINE</p>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="animate-pulse">_</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cybersecurity;
