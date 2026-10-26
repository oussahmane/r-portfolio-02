import { profile } from '../../data/profile';

export default function Skills() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="kicker">Capabilities</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-50">Skills and technologies</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-400">
        Grouped from the technologies already listed in this portfolio. A note is added only where this site itself is the example.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {profile.skillGroups.map((group) => (
          <section key={group.title} className="rounded-xl border border-white/10 bg-black/20 p-4">
            <h3 className="text-base font-medium text-stone-50">{group.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
            {group.note ? <p className="mt-3 text-sm leading-6 text-stone-400">{group.note}</p> : null}
          </section>
        ))}
      </div>
    </div>
  );
}
