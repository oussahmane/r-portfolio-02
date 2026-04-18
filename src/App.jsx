import React from 'react';
import DesktopEnvironment from './components/DesktopEnvironment';
import { WindowManagerProvider } from './contexts/WindowManagerContext';

function App() {
  return (
    <WindowManagerProvider>
      <DesktopEnvironment />
    </WindowManagerProvider>
  );
}

export default App;
