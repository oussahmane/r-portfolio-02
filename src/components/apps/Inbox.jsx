import { useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { messageErrorText, removeMessage, setMessageStatus, subscribeToMessages } from '../../lib/messages';

function formatWhen(value) {
  if (!value?.toDate) return 'Just now';
  return value.toDate().toLocaleString('en', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

function authErrorText(error) {
  const code = error?.code || '';
  if (code === 'auth/invalid-credential' || code === 'auth/wrong-password' || code === 'auth/user-not-found' || code === 'auth/invalid-email') {
    return 'That email or password was not accepted.';
  }
  if (code === 'auth/too-many-requests') return 'Too many attempts. Wait and try again.';
  if (code === 'auth/network-request-failed') return 'The sign-in service could not be reached.';
  return 'Sign-in failed. Try again.';
}

export default function Inbox() {
  const [user, setUser] = useState(undefined);
  const [email, setEmail] = useState('oussahmane@gmail.com');
  const [password, setPassword] = useState('');
  const [signingIn, setSigningIn] = useState(false);
  const [authError, setAuthError] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');
  const [openId, setOpenId] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);
  const [actionError, setActionError] = useState('');
  const signedInId = user?.uid ?? null;
  const [trackedId, setTrackedId] = useState(signedInId);
  if (signedInId !== trackedId) {
    setTrackedId(signedInId);
    setMessages([]);
    setLoading(Boolean(signedInId));
    setError('');
    setOpenId(null);
    setPendingDelete(null);
    setActionError('');
  }

  useEffect(() => onAuthStateChanged(auth, (next) => setUser(next)), []);

  useEffect(() => {
    if (!user) return undefined;

    return subscribeToMessages(
      (next) => {
        setMessages(next);
        setLoading(false);
        setError('');
      },
      (failure) => {
        setMessages([]);
        setLoading(false);
        setError(messageErrorText(failure));
      },
    );
  }, [user]);

  const signIn = async (event) => {
    event.preventDefault();
    setAuthError('');
    setSigningIn(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      setPassword('');
    } catch (failure) {
      setAuthError(authErrorText(failure));
    } finally {
      setSigningIn(false);
    }
  };

  const toggleRead = async (item) => {
    setActionError('');
    try {
      await setMessageStatus(item.id, item.status === 'read' ? 'unread' : 'read');
    } catch (failure) {
      setActionError(messageErrorText(failure));
    }
  };

  const remove = async (id) => {
    setActionError('');
    try {
      await removeMessage(id);
      setPendingDelete(null);
      if (openId === id) setOpenId(null);
    } catch (failure) {
      setActionError(messageErrorText(failure));
    }
  };

  const visible = messages.filter((item) => filter === 'all' || item.status === filter);
  const unread = messages.filter((item) => item.status !== 'read').length;

  return (
    <div className="mx-auto max-w-3xl">
      <p className="kicker">Firestore · r-portfolio-02</p>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold tracking-tight text-stone-50">Inbox</h1>
        {user ? (
          <button className="btn btn-secondary" type="button" onClick={() => signOut(auth)}>
            Sign out
          </button>
        ) : null}
      </div>

      {user === undefined ? <p className="mt-6 text-sm text-stone-400">Checking sign-in…</p> : null}

      {user === null ? (
        <form className="mt-5 grid max-w-md gap-4" onSubmit={signIn}>
          <p className="text-sm leading-6 text-stone-400">
            Messages from the contact form are stored in Cloud Firestore. The published rules let anyone send a message and only a signed-in account read them.
          </p>
          <div>
            <label className="mb-1.5 block text-sm text-stone-200" htmlFor="inbox-email">Email</label>
            <input
              id="inbox-email"
              className="field"
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="username"
              required
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-stone-200" htmlFor="inbox-password">Password</label>
            <input
              id="inbox-password"
              className="field"
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
            />
          </div>
          {authError ? <p className="text-sm text-rose-200" role="alert">{authError}</p> : null}
          <button className="btn btn-primary w-fit" type="submit" disabled={signingIn}>
            {signingIn ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      ) : null}

      {user ? (
        <>
          <p className="mt-3 text-sm leading-6 text-stone-400">
            Signed in as {user.email}. {messages.length} total, {unread} unread.
          </p>

          <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter messages">
            {[
              ['all', 'All'],
              ['unread', 'Unread'],
              ['read', 'Read'],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                className={filter === value ? 'btn btn-primary' : 'btn btn-secondary'}
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>

          {error ? <p className="mt-4 text-sm text-rose-200" role="alert">{error}</p> : null}
          {actionError ? <p className="mt-4 text-sm text-rose-200" role="alert">{actionError}</p> : null}
          {loading ? <p className="mt-6 text-sm text-stone-400">Loading messages…</p> : null}

          {!loading && !error && visible.length === 0 ? (
            <p className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-stone-300">
              {messages.length === 0 ? 'No messages yet. A new contact form submission will show up here.' : 'No messages in this filter.'}
            </p>
          ) : null}

          <ul className="mt-4 grid gap-3">
            {visible.map((item) => {
              const open = openId === item.id;
              return (
                <li key={item.id} className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <button
                    type="button"
                    className="w-full text-left"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? null : item.id)}
                  >
                    <span className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="font-medium text-stone-50">{item.name || 'Unnamed'}</span>
                      <span className="text-xs text-stone-400">{formatWhen(item.createdAt)}</span>
                    </span>
                    <span className="mt-1 block text-sm text-stone-400">{item.email}</span>
                    {open ? null : <span className="mt-2 block line-clamp-2 text-sm leading-6 text-stone-300">{item.message}</span>}
                  </button>
                  <span className={`chip mt-3 inline-flex ${item.status === 'read' ? '' : 'text-emerald-100'}`}>
                    {item.status === 'read' ? 'Read' : 'Unread'}
                  </span>
                  {open ? (
                    <div className="mt-3">
                      <p className="whitespace-pre-wrap text-sm leading-6 text-stone-200">{item.message}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <button className="btn btn-secondary" type="button" onClick={() => toggleRead(item)}>
                          {item.status === 'read' ? 'Mark unread' : 'Mark read'}
                        </button>
                        {pendingDelete === item.id ? (
                          <button className="btn btn-secondary" type="button" onClick={() => remove(item.id)}>
                            Confirm delete
                          </button>
                        ) : (
                          <button className="btn btn-secondary" type="button" onClick={() => setPendingDelete(item.id)}>
                            Delete
                          </button>
                        )}
                      </div>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </>
      ) : null}
    </div>
  );
}
