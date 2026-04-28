import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 bg-console relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-3xl bg-panel rounded-lg border border-border shadow-2xl overflow-hidden relative z-10">
        {/* Terminal Header */}
        <div className="bg-border px-4 py-2 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-danger"></div>
          <div className="w-3 h-3 rounded-full bg-warning"></div>
          <div className="w-3 h-3 rounded-full bg-success"></div>
          <span className="ml-2 text-xs text-gray-400 font-mono">user@cloud-console:~</span>
        </div>
        
        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm md:text-base text-gray-300 min-h-[300px]">
          <TypeAnimation
            sequence={[
              '> aws s3 sync s3://pm-portfolio/skills ./local',
              1000,
              '> aws s3 sync s3://pm-portfolio/skills ./local\nDownloading objects: 100% (24/24), 2.1 MiB\n> Fetching certifications... [Done]',
              1000,
              '> aws s3 sync s3://pm-portfolio/skills ./local\nDownloading objects: 100% (24/24), 2.1 MiB\n> Fetching certifications... [Done]\n> echo "Hello, I build secure, scalable solutions."',
              1000,
              '> aws s3 sync s3://pm-portfolio/skills ./local\nDownloading objects: 100% (24/24), 2.1 MiB\n> Fetching certifications... [Done]\n> echo "Hello, I build secure, scalable solutions."\nHello, I build secure, scalable solutions.',
              1000,
              '> aws s3 sync s3://pm-portfolio/skills ./local\nDownloading objects: 100% (24/24), 2.1 MiB\n> Fetching certifications... [Done]\n> echo "Hello, I build secure, scalable solutions."\nHello, I build secure, scalable solutions.\n> ./initialize_profile.sh',
              1000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={0}
            style={{ whiteSpace: 'pre-line' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
