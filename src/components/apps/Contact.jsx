import { useState } from 'react';
import { channels, profile } from '../../data/profile';
import { messageErrorText, sendMessage } from '../../lib/messages';

const EMPTY = { name: '', email: '', message: '', company: '' };

function validate(form) {
  const errors = {};
  const name = form.name.trim();
  const email = form.email.trim();
  const message = form.message.trim();

  if (!name) errors.name = 'Enter your name.';
  else if (name.length > 80) errors.name = 'Use 80 characters or fewer.';

  if (!email) errors.email = 'Enter your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.';
  else if (email.length > 120) errors.email = 'Use 120 characters or fewer.';

  if (!message) errors.message = 'Enter a message.';
  else if (message.length > 2000) errors.message = 'Use 2000 characters or fewer.';

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);
  const available = channels.filter((channel) => channel.href);
  const missing = channels.filter((channel) => !channel.href);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setStatus(null);
  };

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setStatus(null);
    if (Object.keys(nextErrors).length) return;
    if (form.company.trim()) {
      setStatus({ type: 'success', text: 'Message sent.' });
      setForm(EMPTY);
      return;
    }

    setSending(true);
    try {
      await sendMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });
      setForm(EMPTY);
      setStatus({ type: 'success', text: 'Message sent.' });
    } catch (error) {
      setStatus({ type: 'error', text: messageErrorText(error) });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
      <div>
        <p className="kicker">Contact</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-50">{profile.name}</h2>
        <p className="mt-3 text-sm leading-6 text-stone-400">
          Send a message here, or use a published channel.
        </p>
        {available.length > 0 ? (
          <ul className="mt-6 grid gap-2">
            {available.map((channel) => (
              <li key={channel.id}>
                <a
                  className="btn btn-secondary w-full justify-start"
                  href={channel.href}
                  {...(channel.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                >
                  {channel.label}
                  <span className="truncate text-stone-400">{channel.href.replace('mailto:', '')}</span>
                </a>
              </li>
            ))}
          </ul>
        ) : null}
        {missing.length > 0 ? (
          <p className="mt-4 text-sm text-stone-400">Not published yet: {missing.map((channel) => channel.label).join(', ')}.</p>
        ) : null}
      </div>

      <form className="grid gap-4" onSubmit={submit} noValidate>
        <div aria-hidden="true">
          <input
            id="contact-company"
            className="sr-only"
            name="company"
            value={form.company}
            onChange={update}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <Field id="contact-name" label="Name" error={errors.name}>
          <input
            id="contact-name"
            className={`field ${errors.name ? 'field-invalid' : ''}`}
            name="name"
            value={form.name}
            onChange={update}
            autoComplete="name"
            maxLength={80}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            required
          />
        </Field>
        <Field id="contact-email" label="Email" error={errors.email}>
          <input
            id="contact-email"
            className={`field ${errors.email ? 'field-invalid' : ''}`}
            name="email"
            type="email"
            value={form.email}
            onChange={update}
            autoComplete="email"
            maxLength={120}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            required
          />
        </Field>
        <Field id="contact-message" label="Message" error={errors.message}>
          <textarea
            id="contact-message"
            className={`field min-h-32 ${errors.message ? 'field-invalid' : ''}`}
            name="message"
            value={form.message}
            onChange={update}
            maxLength={2000}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            required
          />
        </Field>
        <div className="flex flex-wrap items-center gap-3">
          <button className="btn btn-primary" type="submit" disabled={sending}>
            {sending ? 'Sending…' : 'Send message'}
          </button>
          {status ? (
            <p className={status.type === 'error' ? 'text-sm text-rose-200' : 'text-sm text-emerald-100'} role="status">
              {status.text}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm text-stone-200" htmlFor={id}>
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-1 text-sm text-rose-200" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
