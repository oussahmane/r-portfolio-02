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
enigma@ubuntu:~$ neofetch
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


enigma@ubuntu:~$ echo "Welcome to my portfolio! My name is Oussama Abderrahmane."

enigma@ubuntu:~$ echo "I'm a passionate full-stack developer."

enigma@ubuntu:~$ echo "contact me at oussahmane@gmail.com"

enigma@ubuntu:~$ _`;

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
