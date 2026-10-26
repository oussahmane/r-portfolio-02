import { profile } from '../../data/profile';

export default function Security() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="kicker">Study and practice</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-50">Security</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-400">
        Security sits next to application work: how access is granted, how data moves, and how network coursework applies to that.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border border-white/10 bg-black/20 p-4">
          <h3 className="text-base font-medium text-stone-50">Topics</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-stone-300">
            {profile.securityTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-xl border border-white/10 bg-black/20 p-4">
          <h3 className="text-base font-medium text-stone-50">Tools</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {profile.securityTools.map((tool) => (
              <li key={tool} className="chip">
                {tool}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
