import { motion, useReducedMotion } from 'motion/react';
import { DollarSign, TrendingUp, ShieldCheck, Activity, ChartBar } from 'lucide-react';
import SectionHeader from './SectionHeader';
import metrics from '../data/metrics';

const iconMap = { DollarSign, TrendingUp, ShieldCheck, Activity };

const ImpactDashboard = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-border mt-10">
      <SectionHeader icon={ChartBar} title="Impact Dashboard" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = iconMap[metric.icon];
          return (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20, filter: 'drop-shadow(0 0 0 rgba(129,140,248,0))' }}
              whileInView={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 1,
                      y: 0,
                      filter: [
                        'drop-shadow(0 0 0 rgba(129,140,248,0))',
                        'drop-shadow(0 0 0.85rem rgba(129,140,248,0.22))',
                        'drop-shadow(0 0 0 rgba(129,140,248,0))',
                      ],
                    }
              }
              viewport={{ once: true }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 0.5,
                      delay: index * 0.1,
                      filter: { duration: 1.1, delay: index * 0.1 + 0.12, ease: 'easeOut' },
                    }
              }
              className="bg-panel border border-border rounded-xl p-6 shadow-lg hover:border-border-hover transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wide">{metric.title}</span>
                <div className="reactive-icon-glow p-2 bg-console rounded-md border border-border">
                  <Icon className={`w-5 h-5 ${metric.color}`} />
                </div>
              </div>
              <div className="text-4xl font-black text-gray-100 tracking-tight mb-2">{metric.value}</div>
              <div className="text-xs text-gray-500 font-mono">{metric.subtext}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ImpactDashboard;
