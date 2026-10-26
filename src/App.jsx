import DesktopEnvironment from './components/DesktopEnvironment';
import AdminPage from './components/AdminPage';
import { WindowManagerProvider } from './contexts/WindowManagerContext';
import { useHashPath } from './hooks/useHashPath';

function App() {
  const path = useHashPath();

  if (path === '/admin/login') {
    return <AdminPage />;
  }

  return (
    <WindowManagerProvider>
      <DesktopEnvironment />
    </WindowManagerProvider>
  );
}

export default App;
