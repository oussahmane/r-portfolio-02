import React from 'react';
import { Network, Router, Globe, ShieldCheck, Activity, Zap, Cpu, Server } from 'lucide-react';

const Networking = () => {
    const ccnaSkills = [
        {
            title: "CCNA 1",
            subtitle: "Introduction to Networks",
            icon: <Globe size={28} />,
            color: "text-cyan-400",
            bgColor: "bg-cyan-500/10",
            details: [
                "Layer 1-3 Fundamentals & Protocols",
                "Advanced IPv4 & IPv6 Subnetting",
                "Network Security Fundamentals",
                "Cisco IOS Command Line Mastery"
            ]
        },
        {
            title: "CCNA 2",
            subtitle: "Routing, Switching & Wireless",
            icon: <Router size={28} />,
            color: "text-indigo-400",
            bgColor: "bg-indigo-500/10",
            details: [
                "VLANs, STP, and EtherChannel",
                "Inter-VLAN Routing & DHCP",
                "WLAN Concepts & Security",
                "FHR Protocols (HSRP/GLBP)"
            ]
        },
        {
            title: "CCNA 3",
            subtitle: "Enterprise Networking & Automation",
            icon: <Activity size={28} />,
            color: "text-purple-400",
            bgColor: "bg-purple-500/10",
            details: [
                "OSPFv2 & Single-Area Configuration",
                "Network Security (ACLs/SNMP/Syslog)",
                "Quality of Service (QoS) Mastery",
                "Network Programmability & Automation"
            ]
        }
    ];

    return (
        <div className="p-8 h-full bg-[#0D0D0D] overflow-y-auto font-sans">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10">
                    <div className="flex items-center space-x-4">
                        <div className="p-4 bg-emerald-500/20 rounded-2xl text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                            <Network size={40} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-white tracking-tight uppercase">Network Engineering</h1>
                            <p className="text-white/40 font-mono text-sm tracking-wider mt-1">
                                CRITICAL_INFRASTRUCTURE_ARCHITECTURE // VER: 3.0
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {ccnaSkills.map((cert, idx) => (
                        <div key={idx} className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 group flex flex-col space-y-5">
                            <div className="flex items-center space-x-4">
                                <div className={`p-4 ${cert.bgColor} rounded-xl ${cert.color} group-hover:scale-110 transition-transform`}>
                                    {cert.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-0.5">{cert.title}</h3>
                                    <p className={`${cert.color} text-xs font-mono font-bold uppercase tracking-tighter`}>{cert.subtitle}</p>
                                </div>
                            </div>
                            <div className="h-px bg-white/5" />
                            <ul className="space-y-3">
                                {cert.details.map((detail, dIdx) => (
                                    <li key={dIdx} className="flex items-start space-x-2 text-white/50 text-sm leading-snug">
                                        <span className={`${cert.color} font-black mt-0.5`}>»</span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                            <Cpu size={120} />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                             <Zap size={20} className="text-yellow-400" /> Technical Toolkit
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {['Packet Tracer', 'GNS3', 'Wireshark', 'Putty/TeraTerm', 'Ansible', 'Cisco DNA Center'].map(tool => (
                                <div key={tool} className="flex items-center space-x-2 bg-white/5 p-3 rounded-lg text-white/70 text-xs font-medium border border-transparent hover:border-white/10 transition-colors">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                                    <span>{tool}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                            <Server size={120} />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                             <ShieldCheck size={20} className="text-emerald-400" /> Core Protocols
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {['TCP/IP', 'BGP', 'OSPF', 'EIGRP', 'VLANs', 'ACLs', 'VPN', 'SNMP', 'STP', 'HSRP', 'NAT/PAT'].map(protocol => (
                                <span key={protocol} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest">
                                    {protocol}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Networking;
