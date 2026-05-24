import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';
import { CircleAlert, SquareCheck, Clock, Globe, Mail, MoreHorizontal, Shield, MapPin, Briefcase, Download, X } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import { dodItems, getTypingSequence, heroMetadata } from '../data/hero';

/**
 * Hero section — styled as a Jira-like "epic ticket".
 * Personal details are pulled from siteConfig and hero-specific data from hero.js.
 */

const EpicCardHero = ({ onMinimize }) => {
  const [checklist, setChecklist] = useState(0);

  return (
    <div className="w-full max-w-full min-w-0 bg-panel rounded-xl border border-border shadow-2xl overflow-hidden text-sm md:max-w-4xl md:text-base cursor-auto">
        
        {/* Top Header / Breadcrumb */}
        <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 gap-y-3 px-4 py-3 border-b border-border bg-console/50 sm:items-center md:px-6 md:py-4">
          <div className="flex min-w-0 items-center gap-3 overflow-hidden text-xs font-mono text-gray-400 md:text-sm">
            <span className="flex min-w-0 items-center gap-1 hover:text-primary transition-colors cursor-pointer">
              <Shield className="w-4 h-4 shrink-0 text-primary" />
              <span className="truncate">{siteConfig.initials.split('').join('')}</span>
            </span>
            <span>/</span>
            <span className="max-w-full truncate rounded-md bg-border px-2 py-1 text-gray-200 transition-colors hover:bg-border-hover cursor-pointer">{heroMetadata.ticketId}</span>
          </div>

          <button
            type="button"
            aria-label="Minimize hero card"
            title="Minimize hero card"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={onMinimize}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-console text-gray-400 transition-colors hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/60"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="col-span-2 flex min-w-0 flex-wrap items-center gap-2 text-[10px] font-mono sm:justify-end sm:text-xs">
            <div className="flex max-w-full shrink-0 items-center gap-1.5 rounded-full border border-warning/20 bg-warning/10 px-2 py-1 text-warning">
              <CircleAlert className="h-3 w-3 shrink-0" />
              <span className="font-bold">{heroMetadata.priority}</span>
            </div>
            <div className="flex min-w-0 max-w-full items-center gap-1.5 rounded-full border border-success/20 bg-success/10 px-2 py-1 text-success">
              <div className="h-2 w-2 shrink-0 rounded-full bg-success"></div>
              <span className="min-w-0 truncate font-bold">{siteConfig.status}</span>
            </div>
          </div>
        </div>

        {/* Issue Body */}
        <div className="min-w-0 p-4 md:p-8">
          <h1 className="mb-6 break-words text-[1.35rem] font-extrabold leading-tight tracking-tight text-white sm:text-2xl md:text-5xl">
            {siteConfig.title}
          </h1>
          
          {/* Metadata Row */}
          <div className="mb-8 grid min-w-0 grid-cols-1 gap-4 border-b border-border pb-6 text-sm text-gray-400 sm:grid-cols-2 lg:flex lg:flex-wrap lg:gap-6">
            <div className="flex min-w-0 items-center gap-2">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/20 text-xs font-bold text-primary">{siteConfig.initials}</div>
              <span className="min-w-0 break-words">Assignee: <span className="font-medium text-gray-200">{siteConfig.name}</span></span>
            </div>
            <div className="flex min-w-0 items-center gap-2">
              <Briefcase className="h-4 w-4 shrink-0" />
              <span className="min-w-0 break-words">Role: <span className="text-gray-200">{siteConfig.role}</span></span>
            </div>
            <div className="flex min-w-0 items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" />
              <span className="min-w-0 break-words">Velocity: <span className="text-gray-200">{siteConfig.experience}</span></span>
            </div>
            <div className="flex min-w-0 items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              <span className="min-w-0 break-words">Location: <span className="text-gray-200">{siteConfig.location}</span></span>
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-8">
            <h3 className="text-gray-400 font-medium mb-3 flex items-center gap-2">Epic Summary</h3>
            <div className="relative min-h-[10rem] min-w-0 overflow-hidden rounded-lg border border-border bg-console p-4 font-mono text-sm leading-relaxed text-gray-300 md:p-5 md:text-base">
              <TypeAnimation
                sequence={getTypingSequence(setChecklist)}
                wrapper="div"
                cursor={true}
                repeat={0}
                speed={85}
                style={{ overflowWrap: 'anywhere', whiteSpace: 'pre-line', wordBreak: 'break-word' }}
              />
            </div>
          </div>

          {/* Checklist Section */}
          <div className="mb-8 space-y-3">
            <h3 className="text-gray-400 font-medium mb-3">Definition of Done (DoD)</h3>
            {dodItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: checklist >= item.step ? 1 : 0, x: checklist >= item.step ? 0 : -10 }}
                className="flex min-w-0 items-start gap-3 rounded-md border border-border bg-console/50 p-3 text-gray-300 sm:items-center"
              >
                <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${checklist >= item.step ? 'bg-primary border-primary text-console' : 'border-gray-600'}`}>
                  {checklist >= item.step && <SquareCheck className="w-3.5 h-3.5" />}
                </div>
                <span className={`min-w-0 break-words transition-all ${checklist >= item.step ? 'line-through text-gray-600' : ''}`}>{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: checklist >= 4 ? 1 : 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 flex min-w-0 flex-wrap items-center gap-3 border-t border-border pt-4 sm:gap-4"
          >
            <button 
              type="button"
              onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
              className="min-h-10 min-w-0 rounded-md bg-primary px-5 py-2.5 font-bold text-console transition-colors hover:bg-primary-light sm:px-6"
            >
              View Roadmap
            </button>
            <button 
              type="button"
              onClick={() => alert('Downloading Secure Resume...')}
              className="flex min-h-10 min-w-0 items-center gap-2 rounded-md border border-border bg-console px-5 py-2.5 font-bold text-gray-200 transition-colors hover:border-gray-500 hover:text-white sm:px-6"
            >
              <Download className="h-4 w-4 shrink-0" />
              <span className="min-w-0 break-words">Download Resume</span>
            </button>

            <div className="ml-auto flex gap-2 md:ml-4">
              <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile" title="Open LinkedIn profile" className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-border bg-console text-gray-400 transition-all hover:border-primary hover:text-primary">
                <Globe className="w-5 h-5" />
              </a>
              <button 
                type="button"
                aria-label="Jump to contact form"
                title="Jump to contact form"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-border bg-console text-gray-400 transition-all hover:border-primary hover:text-primary"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 hidden lg:block"></div>
            <button type="button" aria-label="More hero actions" title="More hero actions" className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-border bg-console text-gray-500 hover:text-gray-300 lg:flex">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </motion.div>

        </div>
    </div>
  );
};

export default EpicCardHero;
