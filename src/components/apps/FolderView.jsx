import React from 'react';
import { Folder, FileText, ChevronRight, ShieldAlert, ShieldCheck, Terminal, Target } from 'lucide-react';

const FolderView = ({ folderName, subFolders }) => {
    return (
        <div className="h-full bg-[#0A0A0A] text-white font-sans p-6 overflow-y-auto">
            <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                <Folder size={24} className={folderName === 'Offensive' ? 'text-red-600' : 'text-blue-500'} />
                <h2 className="text-xl font-bold tracking-tight uppercase">{folderName}</h2>
                <span className="text-white/20 text-xs font-mono ml-auto">ROOT://{folderName.toLowerCase()}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {subFolders.map((sub, idx) => (
                    <div 
                        key={idx} 
                        className="group p-5 bg-[#151515] border border-white/5 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer flex flex-col items-center text-center space-y-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] active:scale-95"
                    >
                        <div className={`p-4 rounded-2xl ${folderName === 'Offensive' ? 'bg-gradient-to-br from-red-600 to-red-900 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]' : 'bg-gradient-to-br from-blue-600 to-blue-900 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                             {sub.icon}
                        </div>
                        <div>
                             <h3 className="text-sm font-bold text-white/90 group-hover:text-white transition-colors truncate w-full max-w-[120px]">
                                {sub.title}
                             </h3>
                             <p className="text-[10px] text-white/40 mt-1 uppercase font-black tracking-tighter">
                                {sub.type || 'Directory'}
                             </p>
                        </div>
                    </div>
                ))}
            </div>

            {subFolders.length === 0 && (
                <div className="h-64 flex flex-col items-center justify-center text-white/20 space-y-4">
                    <Terminal size={48} className="opacity-10" />
                    <p className="text-sm font-mono tracking-widest">DIRECTORY_EMPTY</p>
                </div>
            )}
            
            <div className="mt-12 p-4 bg-black/50 border border-white/5 rounded-lg">
                 <p className="text-[10px] font-mono text-white/30 leading-relaxed uppercase">
                    [*] System Indexing Completed <br/>
                    [*] {subFolders.length} Objects found in current directory <br/>
                    [*] Access Permissions: READ_ONLY
                 </p>
            </div>
        </div>
    );
};

export default FolderView;
