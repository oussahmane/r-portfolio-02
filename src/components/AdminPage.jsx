import { useEffect } from 'react';
import Inbox from './apps/Inbox';

export default function AdminPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'Inbox — Oussama Abderrahmane';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="h-dvh overflow-y-auto overscroll-y-contain bg-[#070807] text-stone-100">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <a className="text-sm text-stone-400 underline-offset-4 hover:text-stone-100 hover:underline" href={import.meta.env.BASE_URL}>
          Portfolio
        </a>
        <div className="mt-6">
          <Inbox />
        </div>
      </div>
    </div>
  );
}
