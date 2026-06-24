"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowDown, Code, Cpu, Award, Layers, ExternalLink, Mail, Terminal, ChevronRight } from "lucide-react";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Core Mouse Tracking Setup
  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) return <div className="bg-[#050505] min-h-screen" />;

  return (
    /* cursor-none ensures the native PC cursor stays invisible everywhere */
    <div className="bg-[#050505] text-zinc-100 font-mono selection:bg-zinc-800 selection:text-white min-h-screen relative overflow-x-hidden antialiased cursor-none">
      
      {/* THE ONLY CUSTOM CIRCLE CURSOR */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%)`,
          width: isHovered ? '50px' : '16px',
          height: isHovered ? '50px' : '16px',
          backgroundColor: isHovered ? 'rgba(52, 211, 153, 0.2)' : 'rgba(255, 255, 255, 0.1)',
          border: isHovered ? '2px solid #34d399' : '1px solid rgba(255, 255, 255, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.15s, border-color 0.15s',
          boxShadow: isHovered ? '0 0 20px rgba(52, 211, 153, 0.6)' : '0 0 8px rgba(255,255,255,0.1)',
        }}
      />

      {/* GLOBAL READING PROGRESS MATRIX */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-zinc-500 to-blue-500 transform-origin-0 z-50" style={{ scaleX }} />

      {/* STRUCTURAL GRID BACKGROUND & VIGNETTE */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#141416_1px,transparent_1px),linear-gradient(to_bottom,#141416_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-radial-gradient from-transparent via-[#050505]/60 to-[#050505] pointer-events-none z-0" />

      {/* SECTION 00: THE HERO HUB */}
      <main className="flex min-h-screen flex-col items-center justify-center p-6 relative border-b border-zinc-900/60 z-10">
        
        <div className="absolute top-8 left-8 right-8 flex justify-between text-[9px] tracking-[0.2em] text-zinc-500 uppercase">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
            <span>SYS_STATUS // OPERATIONAL</span>
          </div>
          <div className="hidden sm:block text-zinc-600">LN_DEPL // 43.109.82</div>
          <div>CORE_V.26 // PRODUCTION</div>
        </div>

        <div className="text-center space-y-10 max-w-2xl relative">
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-zinc-900 bg-zinc-950/80 rounded text-[10px] tracking-widest text-zinc-400 uppercase font-bold mx-auto backdrop-blur-sm"
          >
            <Terminal size={10} className="text-emerald-500" />
            <span className="text-zinc-600">root@mounish:~#</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-emerald-400"
            >
              init_manifesto.sh
            </motion.span>
          </motion.div>

          <div className="space-y-4">
            <p className="text-[11px] tracking-[0.3em] text-zinc-500 uppercase font-medium">COMPUTER SCIENCE ENGINEER</p>
            <motion.h1 
              initial={{ opacity: 0, letterSpacing: "-0.05em" }}
              animate={{ opacity: 1, letterSpacing: "-0.02em" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-white drop-shadow-2xl"
            >
              VR MOUNISH REDDY
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4 max-w-lg mx-auto"
          >
            <p className="text-xs sm:text-sm text-zinc-400 tracking-tight leading-relaxed font-sans font-light">
              3rd Year CSE Undergraduate specializing in high-integrity software architecture. Balancing structural deterministic database paradigms with cryptographic decentralized system design.
            </p>
            <div className="w-12 h-[1px] bg-zinc-800 mx-auto" />
            <p className="text-[10px] text-zinc-600 tracking-widest uppercase italic">
              "The hand will shake. The heart will not. Compile anyway."
            </p>
          </motion.div>

          <div className="pt-4">
            <button 
              onClick={() => scrollToSection("stats-section")}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group flex items-center gap-3 mx-auto px-5 py-2.5 border border-zinc-800 rounded text-[10px] font-bold tracking-[0.2em] text-zinc-400 hover:text-white hover:border-zinc-400 transition-all duration-500 bg-zinc-950/40 backdrop-blur-md"
            >
              ACCESS TELEMETRY DATA
              <ArrowDown size={10} className="group-hover:translate-y-0.5 transition-transform duration-300 text-zinc-500 group-hover:text-white" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-8 right-8 flex justify-between text-[9px] tracking-[0.15em] text-zinc-600">
          <div>LOC // COIMBATORE, IN</div>
          <div className="hidden sm:block font-sans">NEXT.JS FRAMEWORK v16 // TW_V4</div>
          <div>FRAME_01 // SECURE</div>
        </div>
      </main>

      {/* SECTION 01: TELEMETRY GRID */}
      <section id="stats-section" className="min-h-screen flex flex-col justify-center px-8 py-32 max-w-5xl mx-auto space-y-20 relative z-10">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-900 pb-8 gap-4">
          <div className="space-y-2">
            <p className="text-[10px] tracking-[0.25em] text-emerald-500 uppercase font-bold">01 // QUANTIFIABLE METRICS</p>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-white">SYSTEM TELEMETRY</h2>
          </div>
          <div className="text-[10px] text-zinc-500 tracking-wider font-mono">STATUS: SYNCHRONIZED</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { tag: "METRIC_01", title: "Projects Launched", val: "10+", desc: "Full-stack structures and automated deployment chains.", icon: Code },
            { tag: "METRIC_02", title: "Algorithmic Solutions", val: "250+", desc: "Data structures and core processing checkpoint sequences.", icon: Layers },
            { tag: "METRIC_03", title: "Core Frameworks", val: "04+", desc: "Optimized operational knowledge in C++, Python, TS & SQL.", icon: Cpu },
            { tag: "METRIC_04", title: "Academic Matrix", val: "3rd Year", desc: "Focusing on relational database design and OS logic paths.", icon: Award },
          ].map((item, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="border border-zinc-900 bg-[#09090b]/40 backdrop-blur-sm p-6 rounded relative group hover:border-zinc-700 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  <span className="text-[9px] tracking-widest font-bold">{item.tag}</span>
                  <item.icon size={14} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-300">{item.val}</div>
                  <div className="text-[10px] text-zinc-400 font-bold tracking-wide uppercase">{item.title}</div>
                </div>
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed mt-4 font-sans font-light group-hover:text-zinc-400 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 02: THE PROJECT FORGE */}
      <section className="min-h-screen flex flex-col justify-center px-8 py-32 max-w-5xl mx-auto space-y-20 relative z-10">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-900 pb-8 gap-4">
          <div className="space-y-2">
            <p className="text-[10px] tracking-[0.25em] text-blue-500 uppercase font-bold">02 // DEPLOYMENT LEDGER</p>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-white">THE PROJECT FORGE</h2>
          </div>
          <div className="text-[10px] text-zinc-500 tracking-wider font-mono">TOTAL_REPOS // 02</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group border border-zinc-900 bg-[#09090b]/20 p-8 rounded relative hover:bg-zinc-950/60 hover:border-zinc-700/80 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <div className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.15em] text-zinc-600 font-bold uppercase">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  DECENTRALIZED_NODE
                </div>
                <div className="flex gap-4 text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  <a href="https://github.com/Mounish1808" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37(3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href="#" className="hover:text-white transition-colors"><ExternalLink size={14} /></a>
                </div>
              </div>
              <h3 className="text-lg font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-500">
                Online Voting System via Blockchain
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
                A secure decentralized engine engineered on a distributed network framework. Eliminates conventional central architecture risks via SHA cryptographic immutability paradigms and secure consensus pipelines.
              </p>
            </div>
            <div className="pt-8 flex flex-wrap gap-1.5">
              {["Blockchain", "Cryptography", "Consensus", "Web3"].map((tag) => (
                <span key={tag} className="text-[9px] font-bold tracking-wider bg-zinc-950/80 text-zinc-500 px-2.5 py-1 rounded border border-zinc-900/60 group-hover:border-zinc-800 transition-colors">{tag}</span>
              ))}
            </div>
          </div>

          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group border border-zinc-900 bg-[#09090b]/20 p-8 rounded relative hover:bg-zinc-950/60 hover:border-zinc-700/80 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <div className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.15em] text-zinc-600 font-bold uppercase">
                  <span className="w-1 h-1 rounded-full bg-blue-500" />
                  AUTOMATION_CORE
                </div>
                <div className="flex gap-4 text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  <a href="https://github.com/Mounish1808/Student-Management-System" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href="https://github.com/Mounish1808/Student-Management-System" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <h3 className="text-lg font-black tracking-tight text-white group-hover:text-blue-400 transition-colors duration-500">
                Student Management System
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
                An internal organizational application built in Python to parse and categorize complex academic metrics records. Built using explicit Object-Oriented design loops and deterministic relational file processing routines.
              </p>
            </div>
            <div className="pt-8 flex flex-wrap gap-1.5">
              {["Python", "OOP Logic", "Relational Data", "Sorting"].map((tag) => (
                <span key={tag} className="text-[9px] font-bold tracking-wider bg-zinc-950/80 text-zinc-500 px-2.5 py-1 rounded border border-zinc-900/60 group-hover:border-zinc-800 transition-colors">{tag}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 03: COMMUNICATIONS LINK */}
      <section className="min-h-[70vh] flex flex-col justify-center px-8 py-32 max-w-5xl mx-auto space-y-16 relative z-10">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-900 pb-8 gap-4">
          <div className="space-y-2">
            <p className="text-[10px] tracking-[0.25em] text-zinc-500 uppercase font-bold">03 // INGESTION SEQUENCE</p>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-white">CONNECT PIPELINE</h2>
          </div>
          <div className="text-[10px] text-zinc-600 tracking-wider font-mono">CHANNEL // ENCRYPTED</div>
        </div>

        <div className="bg-[#09090b]/30 border border-zinc-900/80 p-8 sm:p-10 rounded max-w-2xl space-y-8 backdrop-blur-md">
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans font-light">
            Evaluating options for full-stack engineering internships, research labs, or decentralized app collaborations. Initializing a network connection handshake is fully available below.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            <a 
              href="mailto:vrmounishreddy@gmail.com" 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex items-center justify-between px-4 py-3.5 border border-zinc-900 rounded bg-zinc-950/60 hover:border-emerald-500 transition-all duration-300 text-[10px] font-bold tracking-widest text-zinc-400 hover:text-white"
            >
              <div className="flex items-center gap-2.5">
                <Mail size={12} className="text-zinc-600" />
                <span>EMAIL_CORE</span>
              </div>
              <ChevronRight size={10} className="text-zinc-700" />
            </a>

            <a 
              href="https://www.linkedin.com/in/vr-mounish-reddy-5a54bb376/" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex items-center justify-between px-4 py-3.5 border border-zinc-900 rounded bg-zinc-950/60 hover:border-emerald-500 transition-all duration-300 text-[10px] font-bold tracking-widest text-zinc-400 hover:text-white"
            >
              <div className="flex items-center gap-2.5">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="12" width="12" xmlns="http://www.w3.org/2000/svg" className="text-zinc-600"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"></path></svg>
                <span>LINKEDIN</span>
              </div>
              <ChevronRight size={10} className="text-zinc-700" />
            </a>

            <a 
              href="https://github.com/Mounish1808" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex items-center justify-between px-4 py-3.5 border border-zinc-900 rounded bg-zinc-950/60 hover:border-emerald-500 transition-all duration-300 text-[10px] font-bold tracking-widest text-zinc-400 hover:text-white"
            >
              <div className="flex items-center gap-2.5">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="12" width="12" xmlns="http://www.w3.org/2000/svg" className="text-zinc-600"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                <span>GITHUB</span>
              </div>
              <ChevronRight size={10} className="text-zinc-700" />
            </a>

          </div>
        </div>

        <div className="pt-20 text-center text-[9px] text-zinc-700 uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} VR MOUNISH REDDY // SYSTEM_LOG_SECURE
        </div>

      </section>

    </div>
  );
}