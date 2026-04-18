import React from 'react';
import { Layers, Server, Database, Code2, Cpu, Globe } from 'lucide-react';

const WebDev = () => {
    const technologies = [
        // { name: 'Node.js', icon: Server, color: 'text-green-500' },
        // { name: 'Next.js', icon: Globe, color: 'text-white' },
        // { name: 'TypeScript', icon: Code2, color: 'text-blue-500' },
        // { name: 'MongoDB', icon: Database, color: 'text-green-600' },
        // { name: 'PostgreSQL', icon: Database, color: 'text-blue-300' },
        // { name: 'GraphQL', icon: Cpu, color: 'text-pink-500' },

    { name: 'HTML', icon: Code2, color: 'text-orange-500' },
    { name: 'CSS', icon: Code2, color: 'text-blue-500' },
    { name: 'JavaScript', icon: Code2, color: 'text-yellow-400' },
    { name: 'Bootstrap', icon: Layers, color: 'text-purple-600' },
    { name: 'Tailwind CSS', icon: Layers, color: 'text-cyan-400' },

    { name: 'React', icon: Code2, color: 'text-blue-400' },

    { name: 'PHP', icon: Server, color: 'text-indigo-400' },
    { name: 'Laravel', icon: Server, color: 'text-red-500' },
    { name: 'Java EE', icon: Cpu, color: 'text-red-400' },
    { name: 'MySQL', icon: Database, color: 'text-blue-600' },
    { name: 'Firebase', icon: Database, color: 'text-yellow-500' },

    ];

    return (
        <div className="p-8 h-full bg-[#1e1e1e] overflow-y-auto">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-2 text-white/90">Web Development</h1>
                <p className="text-white/60 mb-8 border-b border-white/10 pb-4">
                    Building scalable, high-performance web applications with modern technologies.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {technologies.map((tech) => {
                        const Icon = tech.icon;
                        return (
                            <div
                                key={tech.name}
                                className="bg-[#2D2D2D] p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col items-center justify-center space-y-3 cursor-pointer group"
                            >
                                <div className={`p-4 rounded-full bg-black/30 group-hover:scale-110 transition-transform ${tech.color}`}>
                                    <Icon size={32} />
                                </div>
                                <span className="font-medium text-white/80 group-hover:text-white transition-colors">{tech.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WebDev;
