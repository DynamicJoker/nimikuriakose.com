import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, ShieldCheck, Activity, BarChart3 } from 'lucide-react';

const metrics = [
  {
    title: 'Budget Managed',
    value: '$2.4M',
    subtext: 'Delivered under budget',
    icon: DollarSign,
    color: 'text-success'
  },
  {
    title: 'Sprint Velocity',
    value: '+24% YoY',
    subtext: 'Optimization across 5 enterprise teams',
    icon: TrendingUp,
    color: 'text-primary'
  },
  {
    title: 'Compliance & Risk',
    value: '100%',
    subtext: 'SOC2/ISO27001 audit pass rate',
    icon: ShieldCheck,
    color: 'text-warning'
  },
  {
    title: 'Uptime/Deployment',
    value: '99.99%',
    subtext: 'Zero-downtime infrastructure migrations',
    icon: Activity,
    color: 'text-primary-light'
  }
];

const ImpactDashboard = () => {
  return (
    <section className="py-20 px-6 max-w-[1400px] mx-auto border-t border-border mt-10">
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
        <BarChart3 className="w-6 h-6 text-primary" />
        <h2 className="text-xl md:text-2xl font-bold text-gray-200">Impact Dashboard</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-panel border border-border rounded-xl p-6 shadow-lg hover:border-border-hover transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wide">{metric.title}</span>
                <div className="p-2 bg-console rounded-md border border-border group-hover:border-primary/50 transition-colors">
                  <Icon className={`w-5 h-5 ${metric.color}`} />
                </div>
              </div>
              <div className="text-4xl font-black text-gray-100 tracking-tight mb-2">
                {metric.value}
              </div>
              <div className="text-xs text-gray-500 font-mono">
                {metric.subtext}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ImpactDashboard;
