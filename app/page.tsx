"use client";

import { motion } from "framer-motion";
import { ArrowDown, Terminal as TerminalIcon, Code, Cpu, Award, Layers, ExternalLink, Mail } from "lucide-react";

export default function Home() {
  const scrollToStats = () => {
    document.getElementById("stats-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white font-mono selection:bg-zinc-800 selection:text-white">
      
      {/* SECTION 00: THE HERO HUB */}
      <main className="flex min-h-screen flex-col items-center justify-center p-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        <div className="absolute top-6 left-6 right-6 flex justify-between text-[10px] tracking-widest text-zinc-500 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            STATUS: ACTIVE // SYSTEM_ONLINE
          </div>
          <div>SYS_LOC // PORTFOLIO_CORE</div>
        </div>

        <div className="text-center space-y-8 relative z-10 max-w-xl">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-xs tracking-widest text-zinc-500 uppercase"
          >
            <TerminalIcon size={12} className="text-zinc-400" />
            <span>00 // INITIAL_MANIFESTO</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold tracking-tighter uppercase bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent px-4"
          >
            VR MOUNISH REDDY
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-3"
          >
            <p className="text-sm md:text-base text-zinc-400 tracking-tight max-w-md mx-auto leading-relaxed px-2">
              Computer Science & Engineering · 3rd Year Student.
              Approaching web architecture as an exact science, prioritizing high performance and deterministic code systems.
            </p>
            <p className="text-xs text-zinc-600 italic">
              "The hand will shake. The heart will not. Compile anyway."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="pt-4"
          >
            <button 
              onClick={scrollToStats}
              className="group flex items-center gap-2 mx-auto px-4 py-2 border border-zinc-800 rounded-full text-xs tracking-widest text-zinc-400 hover:text-white hover:border-zinc-400 transition-all duration-300 bg-zinc-950/50 backdrop-blur-sm cursor-pointer"
            >
              EXPLORE THE CORE
              <ArrowDown size={12} className="group-hover:translate-y-0.5 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex justify-between text-[10px] tracking-widest text-zinc-600">
          <div>M.26 // BUILD_PHASE_01</div>
          <div>BACKED BY NEXT.JS + TAILWIND</div>
        </div>
      </main>

      {/* SECTION 01: BY THE NUMBERS */}
      <section id="stats-section" className="min-h-[70vh] flex flex-col justify-center px-6 py-24 max-w-5xl mx-auto space-y-16">
        <div className="space-y-2 border-b border-zinc-900 pb-6">
          <p className="text-xs tracking-widest text-zinc-500 uppercase">01 // TELEMETRY DATA</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">BY THE NUMBERS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-zinc-900 bg-zinc-950/40 p-6 rounded-lg space-y-4 hover:border-zinc-700 transition-colors duration-300">
            <div className="flex items-center justify-between text-zinc-500">
              <span className="text-xs tracking-wider">METRIC_01</span>
              <Code size={16} />
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold tracking-tight">10+</div>
              <div className="text-xs text-zinc-400 uppercase font-bold tracking-wide">Projects Built</div>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Full-stack architectures and automation algorithms compiled throughout engineering school.
            </p>
          </div>

          <div className="border border-zinc-900 bg-zinc-950/40 p-6 rounded-lg space-y-4 hover:border-zinc-700 transition-colors duration-300">
            <div className="flex items-center justify-between text-zinc-500">
              <span className="text-xs tracking-wider">METRIC_02</span>
              <Layers size={16} />
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold tracking-tight">250+</div>
              <div className="text-xs text-zinc-400 uppercase font-bold tracking-wide">Algorithmic Solutions</div>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Data structures and structural problem solving checkpoints completed across test pipelines.
            </p>
          </div>

          <div className="border border-zinc-900 bg-zinc-950/40 p-6 rounded-lg space-y-4 hover:border-zinc-700 transition-colors duration-300">
            <div className="flex items-center justify-between text-zinc-500">
              <span className="text-xs tracking-wider">METRIC_03</span>
              <Cpu size={16} />
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold tracking-tight">04+</div>
              <div className="text-xs text-zinc-400 uppercase font-bold tracking-wide">Core Ecosystems</div>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Proficiency optimized in runtime environments using C++, Python, TypeScript, and SQL databases.
            </p>
          </div>

          <div className="border border-zinc-900 bg-zinc-950/40 p-6 rounded-lg space-y-4 hover:border-zinc-700 transition-colors duration-300">
            <div className="flex items-center justify-between text-zinc-500">
              <span className="text-xs tracking-wider">METRIC_04</span>
              <Award size={16} />
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold tracking-tight">3rd Year</div>
              <div className="text-xs text-zinc-400 uppercase font-bold tracking-wide">Academic Matrix</div>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Specializing in core Computer Science paths: Database Management systems, OS architecture, and AI models.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 02: THE PROJECT FORGE */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 py-24 max-w-5xl mx-auto space-y-16">
        
        <div className="space-y-2 border-b border-zinc-900 pb-6">
          <p className="text-xs tracking-widest text-zinc-500 uppercase">02 // REPOSITORY DEPLOYMENTS</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">THE PROJECT FORGE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 1: Blockchain Voting */}
          <div className="group border border-zinc-900 bg-zinc-950/20 p-8 rounded-xl space-y-6 hover:bg-zinc-950/60 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-[10px] tracking-widest text-zinc-600 font-bold">SYSTEM // DECENTRALIZED</span>
                <div className="flex gap-3 text-zinc-500">
                  <a href="#" className="hover:text-white transition-colors">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href="#" className="hover:text-white transition-colors"><ExternalLink size={16} /></a>
                </div>
              </div>
              <h3 className="text-xl font-bold tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
                Blockchain Online Voting System
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                A highly secure, tamper-proof voting infrastructure engineered on a distributed network. Eliminates central database vulnerability by utilizing cryptographic block hashing and smart contract transaction consensus for immutability.
              </p>
            </div>
            <div className="pt-6 flex flex-wrap gap-2">
              <span className="text-[10px] bg-zinc-900 text-zinc-400 px-2.5 py-1 rounded border border-zinc-800">Blockchain</span>
              <span className="text-[10px] bg-zinc-900 text-zinc-400 px-2.5 py-1 rounded border border-zinc-800">Cryptography</span>
              <span className="text-[10px] bg-zinc-900 text-zinc-400 px-2.5 py-1 rounded border border-zinc-800">Smart Contracts</span>
            </div>
          </div>

          {/* Project 2: Student Management */}
          <div className="group border border-zinc-900 bg-zinc-950/20 p-8 rounded-xl space-y-6 hover:bg-zinc-950/60 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-[10px] tracking-widest text-zinc-600 font-bold">SYSTEM // AUTOMATION</span>
                <div className="flex gap-3 text-zinc-500">
                  <a href="#" className="hover:text-white transition-colors">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href="#" className="hover:text-white transition-colors"><ExternalLink size={16} /></a>
                </div>
              </div>
              <h3 className="text-xl font-bold tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                Student Management System
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                An enterprise administration tool written in Python to track, parse, and organize relational academic records. Built with robust backend sorting algorithms, object-oriented structural patterns, and strict error-handling workflows.
              </p>
            </div>
            <div className="pt-6 flex flex-wrap gap-2">
              <span className="text-[10px] bg-zinc-900 text-zinc-400 px-2.5 py-1 rounded border border-zinc-800">Python</span>
              <span className="text-[10px] bg-zinc-900 text-zinc-400 px-2.5 py-1 rounded border border-zinc-800">OOP Logic</span>
              <span className="text-[10px] bg-zinc-900 text-zinc-400 px-2.5 py-1 rounded border border-zinc-800">Databases</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 03: THE CONTACT PIPELINE */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 py-24 max-w-5xl mx-auto space-y-12">
        
        <div className="space-y-2 border-b border-zinc-900 pb-6">
          <p className="text-xs tracking-widest text-zinc-500 uppercase">03 // COMMUNICATIONS LINK</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">CONNECT PIPELINE</h2>
        </div>

        <div className="bg-zinc-950/30 border border-zinc-900 p-8 rounded-xl max-w-2xl space-y-6">
          <p className="text-sm text-zinc-400 leading-relaxed">
            Looking for a technical engineering intern or collaborating on distributed system projects? Let's initialize a handshake sequence.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            
            <a href="mailto:your.email@example.com" className="flex items-center gap-3 px-4 py-3 border border-zinc-900 rounded-lg hover:border-zinc-500 hover:bg-zinc-950/80 transition-all duration-300 text-xs text-zinc-400 hover:text-white">
              <Mail size={14} className="text-zinc-500" />
              <span>EMAIL CORE</span>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 border border-zinc-900 rounded-lg hover:border-zinc-500 hover:bg-zinc-950/80 transition-all duration-300 text-xs text-zinc-400 hover:text-white">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg" className="text-zinc-500"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"></path></svg>
              <span>LINKEDIN</span>
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 border border-zinc-900 rounded-lg hover:border-zinc-500 hover:bg-zinc-950/80 transition-all duration-300 text-xs text-zinc-400 hover:text-white">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg" className="text-zinc-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span>GITHUB</span>
            </a>

          </div>
        </div>

        <div className="pt-12 text-center text-[10px] text-zinc-700 uppercase tracking-widest">
          © {new Date().getFullYear()} VR MOUNISH REDDY // ALL RIGHTS RESERVED.
        </div>

      </section>

    </div>
  );
}