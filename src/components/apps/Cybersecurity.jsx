import React, { useEffect, useState } from 'react';
import { ShieldAlert, ServerCog, Fingerprint, Lock } from 'lucide-react';

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
        <div className="h-full bg-black text-green-500 font-mono relative overflow-hidden flex flex-col">
            {/* Matrix Background Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden select-none whitespace-pre-wrap break-all text-sm leading-tight">
                {matrixText}
                {matrixText}
                {matrixText}
            </div>

            <div className="relative z-10 p-8 flex-1 overflow-y-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center space-x-4 mb-6">
                        <ShieldAlert size={40} className="text-green-400" />
                        <h1 className="text-4xl font-bold tracking-widest uppercase text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]">
                            Cybersecurity
                        </h1>
                    </div>

                    <div className="w-full h-px bg-green-500/30 mb-8" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Certifications & Skills */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold border-b border-green-500/30 pb-2"> SEC_CLEARANCE_LEVEL</h2>

                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <span className="text-green-500 mt-1">[*]</span>
                                    <div>
                                        <strong className="block text-green-300">CompTIA Security+</strong>
                                        <span className="text-green-600 text-sm">Network security, compliance, operational security</span>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-green-500 mt-1">[*]</span>
                                    <div>
                                        <strong className="block text-green-300">Certified Ethical Hacker (CEH)</strong>
                                        <span className="text-green-600 text-sm">Penetration testing, vulnerability assessment</span>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-green-500 mt-1">[*]</span>
                                    <div>
                                        <strong className="block text-green-300">Cisco CCNA 1 & 2</strong>
                                        <span className="text-green-600 text-sm">Routing, Switching, Network Fundamentals</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Toolkit */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold border-b border-green-500/30 pb-2"> ARSENAL_MODULES</h2>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="border border-green-500/20 bg-green-950/20 p-4 rounded flex flex-col items-center justify-center space-y-2 hover:bg-green-900/40 transition-colors">
                                    <ServerCog className="text-green-400" />
                                    <span className="text-sm">Nmap</span>
                                </div>

                                <div className="border border-green-500/20 bg-green-950/20 p-4 rounded flex flex-col items-center justify-center space-y-2 hover:bg-green-900/40 transition-colors">
                                    <Fingerprint className="text-green-400" />
                                    <span className="text-sm">Metasploit</span>
                                </div>

                                <div className="border border-green-500/20 bg-green-950/20 p-4 rounded flex flex-col items-center justify-center space-y-2 hover:bg-green-900/40 transition-colors">
                                    <Lock className="text-green-400" />
                                    <span className="text-sm">Wireshark</span>
                                </div>

                                <div className="border border-green-500/20 bg-green-950/20 p-4 rounded flex flex-col items-center justify-center space-y-2 hover:bg-green-900/40 transition-colors">
                                    <ShieldAlert className="text-green-400" />
                                    <span className="text-sm">Burp Suite</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Operating Systems */}
                    <div className="mt-8 space-y-6">
                        <h2 className="text-xl font-semibold border-b border-green-500/30 pb-2"> OPERATING_SYSTEMS</h2>
                        <div className="flex flex-wrap gap-3">
                            {['Windows', 'Linux', 'Ubuntu', 'Debian', 'Linux Mint', 'Kali Linux', 'Parrot OS', 'Arch Linux', 'Manjaro', 'Ubuntu Server', 'Debian Server'].map(os => (
                                <span key={os} className="px-3 py-1.5 bg-green-900/20 border border-green-500/30 rounded text-green-400 text-sm hover:bg-green-800/40 transition-colors cursor-default">
                                    &gt; {os}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-green-950/30 border-l-4 border-green-500 font-mono text-sm leading-relaxed text-green-400/80">
                        <p> initializing intrusion_detection_system...</p>
                        <p> [OK] packets_sniffed: 45,912</p>
                        <p> [OK] vulnerabilities_patched: TRUE</p>
                        <p className="animate-pulse"> waiting_for_input_</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cybersecurity;
