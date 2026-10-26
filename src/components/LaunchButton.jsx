import { useWindowManager } from '../hooks/useWindowManager';

export default function LaunchButton({
  app,
  className = '',
  showIcon = true,
  showLabel = false,
  iconSize = 20,
  current = false,
}) {
  const { openWindow, windows } = useWindowManager();
  const isOpen = windows.some((windowItem) => windowItem.id === app.id && !windowItem.isMinimized);
  const Icon = app.icon;

  return (
    <button
      type="button"
      className={className}
      data-launch={app.id}
      data-open={isOpen ? 'true' : 'false'}
      data-current={current ? 'true' : 'false'}
      aria-pressed={isOpen}
      aria-current={current ? 'page' : undefined}
      aria-label={showLabel ? undefined : app.title}
      onClick={() => openWindow(app.id)}
    >
      {showIcon ? <Icon size={iconSize} aria-hidden="true" /> : null}
      {showLabel ? <span>{app.title}</span> : null}
    </button>
  );
}
