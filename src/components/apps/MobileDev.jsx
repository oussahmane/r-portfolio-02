import React from 'react';
import { Smartphone, Layers, Layout, Navigation } from 'lucide-react';

const MobileDev = () => {
    return (
        <div className="p-8 h-full bg-[#1e1e1e] overflow-y-auto flex flex-col md:flex-row gap-8">
            {/* Phone Mockup Container */}
            <div className="flex-shrink-0 flex items-center justify-center">
                <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden shadow-black/50">
                    {/* Notch */}
                    <div className="absolute top-0 inset-x-0 h-6 bg-black z-20 rounded-b-[1rem] mx-auto w-[120px]" />

                    {/* Inner Screen */}
                    <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6 relative">
                        <div className="w-full h-4/5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 shadow-xl flex flex-col space-y-4 pt-12">
                            <div className="w-12 h-12 bg-white/20 rounded-full animate-pulse" />
                            <div className="h-4 w-3/4 bg-white/20 rounded-full" />
                            <div className="h-4 w-1/2 bg-white/20 rounded-full" />
                            <div className="mt-8 grid grid-cols-2 gap-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-24 bg-white/10 rounded-xl" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description & Tech Stack */}
            <div className="flex-1 flex flex-col justify-center text-white/90">
                <h1 className="text-4xl font-bold mb-4">Mobile Development</h1>
                <p className="text-lg text-white/60 mb-8 max-w-lg leading-relaxed">
                    Crafting seamless, cross-platform mobile experiences with native-like performance and beautiful animations.
                </p>

                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg">
                            <Layers size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Flutter & Dart</h3>
                            <p className="text-white/50 text-sm">Building native interfaces for iOS and Android from a single codebase.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-lg">
                            <Layout size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">React Native</h3>
                            <p className="text-white/50 text-sm">Translating web concepts into powerful mobile applications.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-green-500/10 text-green-400 rounded-lg">
                            <Navigation size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Kotlin (Android)</h3>
                            <p className="text-white/50 text-sm">Native Android development for hardware-intensive features.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileDev;
