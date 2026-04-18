import React, { useState, useEffect } from 'react';

const Terminal = () => {
    const [text, setText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

//     const fullText = `enigma@ubuntu:~$ neofetch
//        _,met$$$$$gg.          enigma@ubuntu
//     ,g$$$$$$$$$$$$$$$P.       -------------
//   ,g$$P"     """Y$$.".        OS: Ubuntu 22.04.3 LTS x86_64
//  ,$$P'              \`$$$.     Host: Portfolio Machine v1.0
// ',$$P       ,ggs.     \`$$b:   Kernel: 5.15.0-89-generic
// \`d$$'     ,$P"'   .    $$$    Uptime: 42 days, 13 hours, 37 mins
//  $$P      d$'     ,    $$P    Packages: 2435 (dpkg), 12 (snap)
//  $$:      $$.   -    ,d$$'    Shell: bash 5.1.16
//  $$;      Y$b._   _,d$P'      Resolution: 1920x1080
//  Y$b       \`"Y$$$$P"'         DE: GNOME 42.9
//  \`Y$b        \`""'             WM: Mutter
//   \`Y$b                        WM Theme: Adwaita
//     \`"Y$b.                    Theme: Yaru-dark [GTK2/3]
//        \`"Y$b.                 Icons: Yaru [GTK2/3]
//           \`"Y$b.              Terminal: gnome-terminal
//               \`""             CPU: 12th Gen Intel i7-12700K (20) @ 4.900GHz
//                               GPU: NVIDIA GeForce RTX 3080
//                               Memory: 10485MiB / 32000MiB


const fullText = `
enigma@soc-station:~$ neofetch
//        _,met$$$$$gg.          oussama@soc-station
//     ,g$$$$$$$$$$$$$$$P.       -------------------
//   ,g$$P"     """Y$$.".        OS: Kali GNU/Linux Rolling x86_64
//  ,$$P'              \`$$$.     Host: Security-Research-V1
// ',$$P       ,ggs.     \`$$b:   Kernel: 6.5.0-kali3-amd64
// \`d$$'     ,$P"'   .    $$$    Uptime: 13 days, 7 hours, 21 mins
//  $$P      d$'     ,    $$P    Packages: 3142 (dpkg), 15 (snap)
//  $$:      $$.   -    ,d$$'    Shell: zsh 5.9
//  $$;      Y$b._   _,d$P'      Resolution: 2560x1440
//  Y$b       \`"Y$$$$P"'         DE: Xfce 4.18
//  \`Y$b        \`""'             WM: Xfwm4
//   \`Y$b                        Theme: Kali-Dark [GTK2/3]
//     \`"Y$b.                    Icons: Flat-Remix-Blue-Dark
//        \`"Y$b.                 Terminal: qterminal
//           \`"Y$b.              CPU: 13th Gen Intel i9-13900K (32) @ 5.8GHz
//               \`""             GPU: NVIDIA GeForce RTX 4090
//                               Memory: 16384MiB / 64000MiB


enigma@soc-station:~$ whoami
Oussama Abderrahmane: Senior Cybersecurity Pentester & Full-Stack Developer

enigma@soc-station:~$ certs --list
[*] Cisco Certified Network Associate (CCNA 1, 2, 3)
[*] Cisco Certified Ethical Hacker
[*] Web & Mobile Development Expert

enigma@soc-station:~$ echo "Initializing secure workstation environment..."
enigma@soc-station:~$ _`;

    // useEffect(() => {
    //     if (currentIndex < fullText.length) {
    //         const timeout = setTimeout(() => {
    //             setText(prev => prev + fullText[currentIndex]);
    //             setCurrentIndex(prev => prev + 1);
    //         }, 5); // Fast typing speed

    //         return () => clearTimeout(timeout);
    //     }
    // }, [currentIndex, fullText]);


useEffect(() => {
    if (currentIndex < fullText.length) {
        // Add multiple characters at once for speed
        const BATCH_SIZE = 5;
        const nextIndex = Math.min(currentIndex + BATCH_SIZE, fullText.length);
        
        const frame = requestAnimationFrame(() => {
            setText(prev => prev + fullText.substring(currentIndex, nextIndex));
            setCurrentIndex(nextIndex);
        });
        
        return () => cancelAnimationFrame(frame);
    }
}, [currentIndex, fullText]);

    return (
        <div className="h-full w-full bg-[#300A24] bg-opacity-95 p-4 font-mono text-sm overflow-auto text-green-400 font-medium">
            <pre className="whitespace-pre-wrap leading-relaxed m-0 p-0 font-inherit drop-shadow-md">
                {text}
            </pre>
        </div>
    );
};

export default Terminal;
