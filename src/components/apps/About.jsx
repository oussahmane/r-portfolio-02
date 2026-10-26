import { profile } from '../../data/profile';
import { useWindowManager } from '../../hooks/useWindowManager';

const SECTIONS = [
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['networking', 'Networking'],
  ['security', 'Security'],
  ['cv', 'CV'],
  ['contact', 'Contact'],
];

export default function About() {
  const { openWindow } = useWindowManager();

  return (
    <div className="about-grid">
      <div>
        <p className="kicker">Portfolio</p>
        <p className="mt-3 text-4xl font-semibold tracking-tight text-stone-50">{profile.name}</p>
        <p className="mt-2 text-lg text-emerald-100">{profile.role}</p>
        <p className="mt-4 max-w-xl text-base leading-7 text-stone-200">{profile.headline}</p>
        <p className="mt-3 max-w-xl text-sm leading-6 text-stone-400">{profile.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <button className="btn btn-primary" type="button" onClick={() => openWindow('projects')}>
            View projects
          </button>
          <button className="btn btn-secondary" type="button" onClick={() => openWindow('cv')}>
            View CV
          </button>
          <button className="btn btn-secondary" type="button" onClick={() => openWindow('contact')}>
            Contact
          </button>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technical strengths">
          {profile.strengths.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <aside className="rounded-xl border border-white/10 bg-black/25 p-4">
        <h2 className="text-sm font-medium text-stone-100">Open a section</h2>
        <div className="mt-3 grid gap-2">
          {SECTIONS.map(([id, label]) => (
            <button
              key={id}
              type="button"
              className="btn btn-secondary justify-start"
              onClick={() => openWindow(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
