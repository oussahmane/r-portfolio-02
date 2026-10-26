import { FileText, FolderOpen, Layers, Mail, Monitor, Network, Shield, TerminalSquare, User } from 'lucide-react';
import About from '../components/apps/About';
import Contact from '../components/apps/Contact';
import Cv from '../components/apps/Cv';
import Networking from '../components/apps/Networking';
import Projects from '../components/apps/Projects';
import Security from '../components/apps/Security';
import Skills from '../components/apps/Skills';
import Systems from '../components/apps/Systems';
import Terminal from '../components/apps/Terminal';

export const APPS = [
  { id: 'about', title: 'About', icon: User, component: About, dock: true, desktop: false, nav: true, mobile: true },
  { id: 'projects', title: 'Projects', icon: FolderOpen, component: Projects, dock: true, desktop: true, nav: true, mobile: true },
  { id: 'skills', title: 'Skills', icon: Layers, component: Skills, dock: true, desktop: true, nav: true, mobile: true },
  { id: 'networking', title: 'Networking', icon: Network, component: Networking, dock: true, desktop: false, nav: false, mobile: false },
  { id: 'security', title: 'Security', icon: Shield, component: Security, dock: true, desktop: true, nav: false, mobile: false },
  { id: 'systems', title: 'Systems', icon: Monitor, component: Systems, dock: true, desktop: false, nav: false, mobile: false },
  { id: 'cv', title: 'CV', icon: FileText, component: Cv, dock: true, desktop: true, nav: true, mobile: false },
  { id: 'contact', title: 'Contact', icon: Mail, component: Contact, dock: true, desktop: true, nav: true, mobile: true },
  { id: 'terminal', title: 'Terminal', icon: TerminalSquare, component: Terminal, dock: true, desktop: false, nav: false, mobile: false, bleed: true },
];

export function getApp(id) {
  return APPS.find((app) => app.id === id);
}

export function appsById() {
  return Object.fromEntries(APPS.map((app) => [app.id, app]));
}
