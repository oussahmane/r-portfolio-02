import { useContext } from 'react';
import { WindowManagerContext } from '../contexts/windowContext';

export function useWindowManager() {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error('useWindowManager must be used within WindowManagerProvider');
  }
  return context;
}
