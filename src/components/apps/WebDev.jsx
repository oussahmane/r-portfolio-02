import React from 'react';
import { Code2, Layout, Database, Github, ExternalLink, ShieldCheck, Zap, Lock, Globe } from 'lucide-react';

const WebDev = () => {
    const projects = [
        {
            title: "Secure E-Commerce API",
            desc: "Full-stack application with JWT authentication, role-based access control (RBAC), and SQL injection prevention layers.",
            tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
            security: "OWASP Top 10 Hardened"
        },
        {
            title: "Blockchain Explorer",
            desc: "Decentralized application for monitoring real-time blockchain transactions with secure wallet integration.",
            tech: ["React", "Web3.js", "Solidty", "Ether.js"],
            security: "Smart Contract Audited"
        }
    ];

    return (
        <div className="p-8 h-full bg-[#0A0A0A] overflow-y-auto font-sans">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/5 pb-8">
                    <div className="flex items-center space-x-5">
                        <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-400">
                            <Code2 size={40} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-white tracking-tight uppercase">Secure Full-Stack Development</h1>
                            <p className="text-white/40 font-mono text-xs tracking-widest mt-1">
                                SECURE_CODING_PRACTICES // OPS_READY
                            </p>
                        </div>
                    </div>
                </div>

                {/* Secure Coding Philosophy */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        { icon: <Lock className="text-blue-400" />, title: "Data Protection", desc: "Encryption at rest and in transit using industry-standard TLS & AES." },
                        { icon: <ShieldCheck className="text-emerald-400" />, title: "Secure Auth", desc: "Multi-factor authentication & secure session management implementation." },
                        { icon: <Zap className="text-yellow-400" />, title: "Performance", desc: "Optimized, scalable architectures without compromising security." }
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-[#111111] border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all">
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Tech Stack */}
                <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                    <Database size={18} className="text-blue-500" /> Technology_Arsenal
                </h2>
                <div className="flex flex-wrap gap-3 mb-12">
                    {['React.js', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'GraphQL', 'TypeScript'].map(tech => (
                        <span key={tech} className="px-4 py-2 bg-blue-500/5 border border-blue-500/20 text-blue-300 rounded-xl text-xs font-bold hover:bg-blue-500/20 transition-all cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Featured Projects */}
                <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                    <Globe size={18} className="text-blue-500" /> Featured_Deployments
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group bg-gradient-to-br from-[#111111] to-[#0A0A0A] border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-all relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-3">
                                <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[9px] font-black rounded border border-emerald-500/20 uppercase">
                                    {project.security}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed mb-6">{project.desc}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map(t => (
                                    <span key={t} className="text-[10px] text-blue-500 font-bold uppercase tracking-tighter">#{t}</span>
                                ))}
                            </div>
                            <div className="flex items-center space-x-4">
                                <a href="#" className="flex items-center gap-2 text-xs font-bold text-white/70 hover:text-white transition-colors">
                                    <Github size={14} /> GITHUB_REPO
                                </a>
                                <a href="#" className="flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors">
                                    <ExternalLink size={14} /> LIVE_DEMO
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WebDev;
