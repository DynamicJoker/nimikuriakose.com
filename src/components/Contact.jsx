import { useState } from 'react';
import { CirclePlus, ArrowUpRight } from 'lucide-react';
import siteConfig from '../data/siteConfig';

/**
 * Contact section – Jira "Create Issue" styled contact form.
 */
const Contact = () => {
  const [formState, setFormState] = useState({ status: 'idle', message: '' });
  const isSending = formState.status === 'sending';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormState({ status: 'sending', message: 'Sending ticket...' });

    try {
      const response = await fetch(siteConfig.contactForm.endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Unable to create the ticket right now.');
      }

      form.reset();
      setFormState({
        status: 'success',
        message: 'Ticket created. Thanks for reaching out.',
      });
    } catch (error) {
      setFormState({
        status: 'error',
        message: error.message || 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-2xl mx-auto border-t border-border mt-10">
      <div className="bg-panel border border-border rounded-xl shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="bg-console/50 px-4 py-4 border-b border-border flex flex-wrap items-center justify-between gap-3 md:px-6">
          <h2 className="text-lg font-bold text-gray-200 flex min-w-0 items-center gap-2">
            <CirclePlus className="w-5 h-5 text-primary" />
            Create Issue
          </h2>
          <span className="text-xs font-mono text-gray-500 bg-border px-2 py-1 rounded break-words">Project: Portfolio</span>
        </div>

        {/* Modal Body (Form) */}
        <form className="p-4 space-y-6 md:p-6" onSubmit={handleSubmit} onReset={() => setFormState({ status: 'idle', message: '' })}>
          <input type="hidden" name="access_key" value={siteConfig.contactForm.accessKey} />
          <input type="hidden" name="subject" value={siteConfig.contactForm.subject} />
          <input type="hidden" name="from_name" value={siteConfig.contactForm.fromName} />
          <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Summary <span className="text-danger">*</span></label>
            <input 
              name="summary"
              type="text" 
              placeholder="E.g., Opportunity for Lead Security PM" 
              className="w-full bg-console border border-border rounded-md px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              disabled={isSending}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Reporter Contact <span className="text-danger">*</span></label>
              <input 
                name="email"
                type="email" 
                placeholder="you@company.com" 
                className="w-full bg-console border border-border rounded-md px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                disabled={isSending}
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Priority</label>
              <div className="relative">
                <select
                  name="priority"
                  defaultValue="Medium"
                  className="w-full bg-console border border-border rounded-md px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer disabled:opacity-60"
                  disabled={isSending}
                >
                  <option value="Highest (Blocker)">Highest (Blocker)</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Description</label>
            <textarea 
              name="message"
              rows="5" 
              placeholder="Describe the role or project requirements..."
              className="w-full bg-console border border-border rounded-md px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
              disabled={isSending}
            ></textarea>
          </div>

          {formState.message && (
            <div
              className={`rounded-md border px-4 py-3 text-sm font-mono ${
                formState.status === 'success'
                  ? 'border-success/30 bg-success/10 text-success'
                  : formState.status === 'error'
                    ? 'border-danger/30 bg-danger/10 text-danger'
                    : 'border-primary/30 bg-primary/10 text-primary-light'
              }`}
              role="status"
              aria-live="polite"
            >
              {formState.message}
            </div>
          )}

          <div className="pt-4 flex flex-wrap items-center justify-end gap-3 border-t border-border mt-6">
            <button type="reset" className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors disabled:opacity-60" disabled={isSending}>
              Cancel
            </button>
            <button type="submit" className="px-6 py-2 bg-primary text-console text-sm font-bold rounded-md hover:bg-primary-light transition-colors flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-60" disabled={isSending}>
              {isSending ? 'Creating...' : 'Create Ticket'} <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
