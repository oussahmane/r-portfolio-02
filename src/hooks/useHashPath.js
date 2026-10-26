import { useEffect, useState } from 'react';

export function readHashPath() {
  const raw = window.location.hash.replace(/^#/, '');
  if (!raw || raw === '/') return '/';
  return raw.replace(/\/$/, '');
}

export function useHashPath() {
  const [path, setPath] = useState(readHashPath);

  useEffect(() => {
    const onChange = () => setPath(readHashPath());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return path;
}
