import { channels, cvHref, profile } from '../../data/profile';

export default function Cv() {
  const available = channels.filter((channel) => channel.href);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <p className="text-sm text-stone-400">
          {cvHref ? 'A PDF copy is available to download.' : 'A PDF CV is not included in this project.'}
        </p>
        {cvHref ? (
          <a className="btn btn-primary" href={cvHref} download>
            Download CV
          </a>
        ) : null}
        <button className="btn btn-secondary" type="button" onClick={() => window.print()}>
          Print this view
        </button>
      </div>
      <article className="cv-sheet rounded-xl border border-white/10 bg-black/20 p-6">
        <p className="kicker">Curriculum vitae</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-50">{profile.name}</h2>
        <p className="mt-1 text-emerald-100">{profile.role}</p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-300">{profile.summary}</p>
        {available.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-3 text-sm">
            {available.map((channel) => (
              <li key={channel.id}>
                <a className="underline decoration-white/20 underline-offset-4" href={channel.href}>
                  {channel.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-stone-400">Email, GitHub, and LinkedIn are not published on this site yet.</p>
        )}

        <section className="mt-8">
          <h3 className="text-base font-medium text-stone-50">Projects</h3>
          {profile.projects.map((project) => (
            <div key={project.id} className="mt-3">
              <p className="font-medium text-stone-100">{project.name}</p>
              <p className="mt-1 text-sm leading-6 text-stone-300">{project.summary}</p>
              <p className="mt-1 text-sm text-stone-400">{project.stack.join(', ')}</p>
            </div>
          ))}
        </section>

        <section className="mt-8">
          <h3 className="text-base font-medium text-stone-50">Skills</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {profile.skillGroups.map((group) => (
              <p key={group.title} className="text-sm leading-6 text-stone-300">
                <span className="text-stone-100">{group.title}. </span>
                {group.items.join(', ')}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h3 className="text-base font-medium text-stone-50">Networking coursework</h3>
          <ul className="mt-3 space-y-2 text-sm text-stone-300">
            {profile.coursework.map((course) => (
              <li key={course.id}>
                <span className="text-stone-100">{course.title}.</span> {course.subtitle}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
