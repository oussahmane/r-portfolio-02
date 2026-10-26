import { profile } from '../../data/profile';

function Resource({ href, label, missing }) {
  if (!href) {
    return <p className="text-sm text-stone-400">{missing}</p>;
  }

  return (
    <a className="btn btn-secondary" href={href} target="_blank" rel="noreferrer noopener">
      {label}
    </a>
  );
}

export default function Projects() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="kicker">Selected work</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-50">Projects</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-400">
        Each card is limited to work that can be described from this repository. Repository and demo links appear only when a URL is set.
      </p>
      <div className="mt-8 grid gap-5">
        {profile.projects.map((project) => (
          <article key={project.id} className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
            <div className="border-b border-white/10 bg-[#0c100e] px-4 py-3" aria-hidden="true">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-3 font-mono text-[11px] text-stone-500">interface preview</span>
              </div>
              <div className="mt-4 grid h-24 grid-cols-[4.5rem_1fr] overflow-hidden rounded-md border border-white/10">
                <div className="border-r border-white/10 bg-emerald-200/5" />
                <div className="space-y-2 p-3">
                  <div className="h-2 w-24 rounded bg-emerald-100/20" />
                  <div className="h-2 w-40 rounded bg-white/10" />
                  <div className="h-2 w-32 rounded bg-white/10" />
                </div>
              </div>
            </div>
            <div className="space-y-5 p-5">
              <div>
                <h3 className="text-xl font-semibold text-stone-50">{project.name}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-300">{project.summary}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-stone-100">Problem</h4>
                <p className="mt-1 text-sm leading-6 text-stone-400">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-stone-100">What I built</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-stone-300">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-stone-100">Technologies</h4>
                <ul className="mt-2 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
                  {project.stack.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-stone-100">Engineering decisions</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-stone-300">
                  {project.decisions.map((decision) => (
                    <li key={decision}>{decision}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
                <Resource href={project.github} label="GitHub repository" missing="GitHub repository not added." />
                <Resource href={project.demo} label="Live demonstration" missing="Live demonstration not added." />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
