import { Mail, CirclePlus, ArrowUpRight } from 'lucide-react';

/**
 * Contact section – Jira "Create Issue" styled contact form.
 */
const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-2xl mx-auto border-t border-border mt-10">
      <div className="bg-panel border border-border rounded-xl shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="bg-console/50 px-6 py-4 border-b border-border flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-200 flex items-center gap-2">
            <CirclePlus className="w-5 h-5 text-primary" />
            Create Issue
          </h2>
          <span className="text-xs font-mono text-gray-500 bg-border px-2 py-1 rounded">Project: Portfolio</span>
        </div>

        {/* Modal Body (Form) */}
        <form className="p-6 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Summary <span className="text-danger">*</span></label>
            <input 
              type="text" 
              placeholder="E.g., Opportunity for Lead Security PM" 
              className="w-full bg-console border border-border rounded-md px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Reporter Contact <span className="text-danger">*</span></label>
              <input 
                type="email" 
                placeholder="you@company.com" 
                className="w-full bg-console border border-border rounded-md px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Priority</label>
              <div className="relative">
                <select defaultValue="Medium" className="w-full bg-console border border-border rounded-md px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer">
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
              rows="5" 
              placeholder="Describe the role or project requirements..."
              className="w-full bg-console border border-border rounded-md px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
            ></textarea>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-border mt-6">
            <button type="button" className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors">
              Cancel
            </button>
            <button type="submit" className="px-6 py-2 bg-primary text-console text-sm font-bold rounded-md hover:bg-primary-light transition-colors flex items-center gap-2">
              Create Ticket <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
