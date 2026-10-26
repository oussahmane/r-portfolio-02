import { useEffect, useRef, useState } from 'react';
import { profile } from '../../data/profile';
import { useWindowManager } from '../../hooks/useWindowManager';
import { runCommand } from '../../lib/terminalCommands';

const INTRO = `${profile.name} — workstation\nType help to list commands. The same sections are available from the menu and dock.`;

export default function Terminal() {
  const { openWindow } = useWindowManager();
  const [lines, setLines] = useState(() => [{ kind: 'out', text: INTRO }]);
  const [value, setValue] = useState('');
  const [status, setStatus] = useState('');
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const submit = (event) => {
    event.preventDefault();
    const raw = value;
    setValue('');
    const result = runCommand(raw, openWindow);
    if (result.clear) {
      setLines([{ kind: 'out', text: INTRO }]);
      setStatus('Screen cleared.');
      return;
    }
    setLines((current) => [
      ...current,
      { kind: 'in', text: raw },
      ...(result.output ? [{ kind: 'out', text: result.output }] : []),
    ]);
    setStatus(result.output || 'Ready.');
  };

  return (
    <div className="flex h-full flex-col bg-[#0c100e] font-mono text-[15px] leading-6 text-stone-200">
      <div ref={scrollRef} className="min-h-0 flex-1 overflow-auto p-4">
        {lines.map((line, index) => (
          <pre key={`${line.kind}-${index}`} className={`mb-3 whitespace-pre-wrap ${line.kind === 'in' ? 'text-emerald-100' : 'text-stone-200'}`}>
            {line.kind === 'in' ? `$ ${line.text}` : line.text}
          </pre>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {status}
      </p>
      <form className="flex items-center gap-2 border-t border-white/10 px-4 py-3" onSubmit={submit}>
        <label className="sr-only" htmlFor="terminal-command">
          Terminal command
        </label>
        <span aria-hidden="true" className="text-emerald-200/80">
          $
        </span>
        <input
          id="terminal-command"
          ref={inputRef}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="min-w-0 flex-1 bg-transparent text-stone-50 outline-none"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder="Type help"
        />
      </form>
    </div>
  );
}
