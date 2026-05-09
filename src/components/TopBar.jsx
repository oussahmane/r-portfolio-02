import React, { useState, useEffect } from 'react';
import { Wifi, Volume2, BatteryCharging, ChevronDown, ShieldAlert } from 'lucide-react';

const TopBar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
        });
    };

    return (
        <div className="h-7 w-full bg-black/60 text-white text-[10px] font-bold grid grid-cols-3 px-1 sm:px-4 z-50 fixed top-0 select-none shadow-2xl backdrop-blur-md border-b border-white/5 uppercase tracking-widest">
            {/* Left section: Activities */}
            <div className="flex items-center justify-start gap-3">
                <div className="flex items-center hover:bg-emerald-500/10 px-1 sm:px-2 py-0.5 rounded cursor-pointer transition-all text-emerald-400 gap-2">
                    <ShieldAlert size={14} className="flex-shrink-0" />
                    <span className="hidden sm:inline">SEC_OPS // STATION_01</span>
                    <span className="sm:hidden font-black">ROOT</span>
                </div>
            </div>

            {/* Center section: Clock */}
            <div className="flex items-center justify-center">
                <div className="flex items-center hover:bg-white/10 px-1 sm:px-2 py-0.5 rounded cursor-pointer transition-colors whitespace-nowrap">
                    <span className="hidden sm:inline">{formatTime(currentTime)}</span>
                    <span className="sm:hidden">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            </div>

            {/* Right section: System Icons */}
            <div className="flex items-center justify-end">
                <div className="flex items-center space-x-1 sm:space-x-3 hover:bg-white/10 px-1 sm:px-2 py-0.5 rounded cursor-pointer transition-colors overflow-hidden">
                    <Wifi size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                    <Volume2 size={14} className="hidden sm:block sm:w-4 sm:h-4 flex-shrink-0" />
                    <div className="flex items-center space-x-1 flex-shrink-0">
                        <BatteryCharging size={14} className="sm:w-4 sm:h-4" />
                        <span className="text-[10px] sm:text-xs hidden sm:inline">100%</span>
                    </div>
                    <ChevronDown size={12} className="ml-0.5 sm:ml-1 opacity-80 flex-shrink-0" />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
