import { profile } from '../../data/profile';

export default function Networking() {
  return (
    <div className="mx-auto max-w-4xl">
      <p className="kicker">Coursework</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-50">Networking</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-400">
        Cisco CCNA 1, 2, and 3 topics. These are coursework areas, not a claim of expert certification.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {profile.coursework.map((course) => (
          <section key={course.id} className="rounded-xl border border-white/10 bg-black/20 p-4">
            <h3 className="text-lg font-medium text-stone-50">{course.title}</h3>
            <p className="mt-1 text-sm text-emerald-100/80">{course.subtitle}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-stone-300">
              {course.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border border-white/10 bg-black/20 p-4">
          <h3 className="text-base font-medium text-stone-50">Protocols</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {profile.protocols.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-xl border border-white/10 bg-black/20 p-4">
          <h3 className="text-base font-medium text-stone-50">Lab tools</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {profile.labTools.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
