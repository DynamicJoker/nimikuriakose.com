import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Check, MoreHorizontal } from 'lucide-react';

const comments = [
  {
    author: 'VP_of_Engineering',
    initials: 'VP',
    time: '2 weeks ago',
    text: "Nimi's ability to translate complex SOC2 compliance requirements into digestible engineering sprints saved our Q3 roadmap.",
    status: 'Approved'
  },
  {
    author: 'Lead_Security_Architect',
    initials: 'LS',
    time: '1 month ago',
    text: "Finally, a PM who actually understands cloud architecture. Unblocked our GCP migration in record time.",
    status: 'LGTM'
  }
];

const StakeholderComments = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto border-t border-border mt-10">
      <div className="flex items-center gap-3 mb-10 pb-4 border-b border-border">
        <MessageSquare className="w-6 h-6 text-primary" />
        <h2 className="text-xl md:text-2xl font-bold text-gray-200">Stakeholder Reviews</h2>
      </div>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px before:h-full before:w-0.5 before:bg-border">
        {comments.map((comment, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative flex items-start gap-4"
          >
            {/* Avatar line dot */}
            <div className="relative z-10 w-12 h-12 bg-console border-4 border-console rounded-full flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary font-bold text-sm">
                {comment.initials}
              </div>
            </div>

            {/* Comment Box */}
            <div className="flex-1 bg-panel border border-border rounded-lg shadow-sm">
              <div className="px-4 py-3 border-b border-border bg-console/30 flex items-center justify-between rounded-t-lg">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-gray-200 text-sm">@{comment.author}</span>
                  <span className="text-xs text-gray-500 font-mono hidden md:inline">commented {comment.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 px-2 py-0.5 bg-success/10 border border-success/20 text-success text-[10px] uppercase font-bold rounded-full tracking-wider">
                    <Check className="w-3 h-3" />
                    {comment.status}
                  </span>
                  <button className="text-gray-500 hover:text-gray-300">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-4 text-sm text-gray-300 leading-relaxed font-mono">
                {comment.text}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StakeholderComments;
