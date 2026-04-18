import React from 'react';
import { Smartphone, Layers, Layout, Navigation, ShieldCheck, Lock, Fingerprint, EyeOff } from 'lucide-react';

const MobileDev = () => {
    return (
        <div className="p-8 h-full bg-[#050505] overflow-y-auto flex flex-col lg:flex-row gap-12 font-sans">
            {/* Phone Mockup Container */}
            <div className="flex-shrink-0 flex items-center justify-center">
                <div className="relative w-[320px] h-[640px] bg-[#0A0A0A] rounded-[3.5rem] border-[12px] border-[#1A1A1A] shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] overflow-hidden scale-90 md:scale-100 transition-transform duration-500 hover:scale-105">
                    {/* Notch */}
                    <div className="absolute top-0 inset-x-0 h-7 bg-black z-20 rounded-b-[1.5rem] mx-auto w-[140px] border-x border-b border-white/5" />

                    {/* Inner Screen */}
                    <div className="w-full h-full bg-gradient-to-br from-emerald-900/40 via-black to-blue-900/40 flex items-center justify-center p-6 relative">
                        <div className="w-full h-4/5 bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10 p-6 shadow-2xl flex flex-col space-y-5 pt-16 relative">
                            <div className="absolute top-6 left-6 flex items-center gap-2">
                                <Fingerprint size={24} className="text-emerald-400 opacity-50" />
                                <div className="h-1 w-12 bg-white/10 rounded-full" />
                            </div>
                            <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-2 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                                <ShieldCheck size={32} />
                            </div>
                            <div className="space-y-3">
                                <div className="h-4 w-full bg-white/10 rounded-lg animate-pulse" />
                                <div className="h-4 w-4/5 bg-white/10 rounded-lg animate-pulse" />
                                <div className="h-4 w-1/2 bg-white/5 rounded-lg animate-pulse" />
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-28 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center">
                                        <Lock size={20} className="text-white/10" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Biometric Scan Line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-emerald-500/30 blur-sm animate-[scan_4s_ease-in-out_infinite]" />
                    </div>
                </div>
            </div>

            {/* Description & Tech Stack */}
            <div className="flex-1 flex flex-col justify-center text-white/90">
                <div className="mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-black tracking-widest text-emerald-400 uppercase mb-4">
                        <Activity size={12} /> Secure_Mobile_Architecture
                    </div>
                    <h1 className="text-5xl font-black mb-6 tracking-tight">Vulnerability-Resilient Mobile Apps</h1>
                    <p className="text-lg text-white/40 max-w-xl leading-relaxed font-medium">
                        Developing enterprise-grade mobile solutions with a focus on **biometric authentication**, **secure storage (KeyStore/Keychain)**, and **certificate pinning**.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-start space-x-5 group">
                        <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-2xl group-hover:bg-emerald-500/20 transition-all border border-emerald-500/10">
                            <Layers size={28} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Flutter & Native Go</h3>
                            <p className="text-white/30 text-sm leading-relaxed">High-performance cross-platform apps with native security bridges.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-5 group">
                        <div className="p-4 bg-blue-500/10 text-blue-400 rounded-2xl group-hover:bg-blue-500/20 transition-all border border-blue-500/10">
                            <Navigation size={28} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Android Hardening</h3>
                            <p className="text-white/30 text-sm leading-relaxed">Kotlin-based native features with R8/ProGuard obfuscation.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-5 group">
                        <div className="p-4 bg-purple-500/10 text-purple-400 rounded-2xl group-hover:bg-purple-500/20 transition-all border border-purple-500/10">
                            <Lock size={28} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Encrypted Database</h3>
                            <p className="text-white/30 text-sm leading-relaxed">Implementation of SQLCipher and secure SQLite practices.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-5 group">
                        <div className="p-4 bg-orange-500/10 text-orange-400 rounded-2xl group-hover:bg-orange-500/20 transition-all border border-orange-500/10">
                            <EyeOff size={28} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Privacy Focused</h3>
                            <p className="text-white/30 text-sm leading-relaxed">Zero-knowledge architectures and data minimization.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                @keyframes scan {
                    0%, 100% { top: 0% }
                    50% { top: 100% }
                }
            `}</style>
        </div>
    );
};

export default MobileDev;
