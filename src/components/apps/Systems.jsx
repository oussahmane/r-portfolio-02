import { profile } from '../../data/profile';

export default function Systems() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="kicker">Environments</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-50">Systems</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-400">Operating systems I use and configure.</p>
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {profile.systems.map(([name, kind]) => (
          <li key={name} className="rounded-xl border border-white/10 bg-black/20 px-3 py-4">
            <p className="font-medium text-stone-100">{name}</p>
            <p className="mt-1 text-xs text-stone-400">{kind}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
