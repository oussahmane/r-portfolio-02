/**
 * Public profile content.
 * Only facts already present in this project, rewritten so they are not overstated.
 * Add email, github, linkedin, and cv (a file name inside /public) when you have them.
 * Add further projects only when you can describe real work and link a repository or demo.
 */

export const profile = {
  name: 'Oussama Abderrahmane',
  role: 'Software developer',
  headline: 'Web, mobile, and desktop applications, with networking and security study.',
  summary:
    'I build application interfaces and study how those systems are networked and secured. This site is the work I can show in full: a desktop-style portfolio with its own window manager and a canvas background.',
  email: '0u55x4m4@gmail.com',
  github: '',
  linkedin: '',
  cv: '',
  strengths: [
    'React interfaces',
    'Mobile and desktop development',
    'Cisco networking coursework',
    'Security fundamentals',
  ],
  skillGroups: [
    {
      title: 'Programming languages',
      items: ['C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'Python', 'Go'],
    },
    {
      title: 'Frontend and web',
      items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      note: 'This portfolio is built with React, Vite, Tailwind CSS, and Framer Motion.',
    },
    {
      title: 'Backend and APIs',
      items: ['Node.js', 'Express', 'GraphQL'],
    },
    {
      title: 'Mobile and desktop',
      items: ['Flutter', 'Kotlin', 'Electron'],
    },
    {
      title: 'Databases and infrastructure',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Firebase'],
      note: 'The contact form stores messages in Cloud Firestore.',
    },
    {
      title: 'Security and networking',
      items: ['TCP/IP', 'IPv4 and IPv6', 'VLANs', 'ACLs', 'OSPF', 'Wireshark', 'Nmap', 'Burp Suite'],
      note: 'Networking topics follow the Cisco coursework in the Networking window.',
    },
  ],
  projects: [
    {
      id: 'workstation-portfolio',
      name: 'Workstation Portfolio',
      summary: 'A personal site presented as a developer workstation, so the interface itself is part of the work.',
      problem:
        'Give a recruiter a direct view of who I am and what I can show, without replacing that with a generic one-page template.',
      features: [
        'Window manager with open, close, minimize, maximize, restore, and focus',
        'Windows that drag inside the desktop, including with a keyboard from the title bar',
        'Text navigation, a dock, and a mobile app bar that open the same sections',
        'Canvas digital rain that stays behind the interface and respects reduced motion',
        'Optional terminal shortcuts for the same sections as the buttons',
        'Contact form that stores messages in Cloud Firestore, with an inbox for reading them',
      ],
      stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Firebase'],
      decisions: [
        'Sections are windows rather than routes, so several can stay open. The menu, dock, and terminal call the same open action.',
        'The background paints on a canvas. Animation frames are not stored in React state.',
      ],
      github: '',
      demo: '',
    },
  ],
  coursework: [
    {
      id: 'ccna-1',
      title: 'CCNA 1',
      subtitle: 'Introduction to Networks',
      topics: [
        'Layer 1–3 fundamentals and common protocols',
        'IPv4 and IPv6 subnetting',
        'Network security fundamentals',
        'Cisco IOS command line',
      ],
    },
    {
      id: 'ccna-2',
      title: 'CCNA 2',
      subtitle: 'Routing, switching, and wireless',
      topics: [
        'VLANs, STP, and EtherChannel',
        'Inter-VLAN routing and DHCP',
        'Wireless LAN concepts and security',
        'First-hop redundancy',
      ],
    },
    {
      id: 'ccna-3',
      title: 'CCNA 3',
      subtitle: 'Enterprise networking and automation',
      topics: [
        'OSPFv2 single-area configuration',
        'ACLs, SNMP, and syslog',
        'Quality of service concepts',
        'Network automation concepts',
      ],
    },
  ],
  securityTopics: [
    'Secure coding practices',
    'Authentication and access control',
    'Transport protection and data handling',
    'Network security fundamentals from the Cisco coursework',
  ],
  securityTools: ['Wireshark', 'Nmap', 'Burp Suite', 'OWASP ZAP', 'Metasploit', 'Hashcat', 'Hydra', 'Autopsy', 'Ghidra'],
  labTools: ['Packet Tracer', 'GNS3', 'Wireshark', 'PuTTY'],
  protocols: ['TCP/IP', 'OSPF', 'VLANs', 'ACLs', 'STP', 'NAT', 'SNMP', 'VPN'],
  systems: [
    ['Windows', 'Desktop'],
    ['Linux', 'General use'],
    ['Ubuntu', 'Desktop and server'],
    ['Debian', 'Desktop and server'],
    ['Linux Mint', 'Desktop'],
    ['Kali Linux', 'Security labs'],
    ['Parrot OS', 'Security labs'],
    ['Arch Linux', 'Desktop'],
    ['Manjaro', 'Desktop'],
    ['Ubuntu Server', 'Server'],
    ['Debian Server', 'Server'],
  ],
};

export const channels = [
  { id: 'email', label: 'Email', href: profile.email ? `mailto:${profile.email}` : '' },
  { id: 'github', label: 'GitHub', href: profile.github },
  { id: 'linkedin', label: 'LinkedIn', href: profile.linkedin },
];

export const cvHref = profile.cv ? `${import.meta.env.BASE_URL}${profile.cv.replace(/^\//, '')}` : '';
