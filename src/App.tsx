import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Terminal, 
  Globe, 
  Lock, 
  Search, 
  Code, 
  Briefcase, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  MapPin,
  Youtube,
  PlayCircle
} from 'lucide-react';
import { ROADMAP_DATA, JOB_STRATEGY } from './data';

export default function App() {
  const [activeMonth, setActiveMonth] = useState(1);
  const [completedTasks, setCompletedTasks] = useState<string[]>(() => {
    const saved = localStorage.getItem('cyber-roadmap-progress');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleTask = (taskId: string) => {
    const newCompleted = completedTasks.includes(taskId)
      ? completedTasks.filter(id => id !== taskId)
      : [...completedTasks, taskId];
    
    setCompletedTasks(newCompleted);
    localStorage.setItem('cyber-roadmap-progress', JSON.stringify(newCompleted));
  };

  const totalTasks = useMemo(() => 
    ROADMAP_DATA.reduce((acc, month) => acc + month.tasks.length, 0), 
  []);
  
  const progressPercent = Math.round((completedTasks.length / totalTasks) * 100);

  return (
    <div className="min-h-screen font-sans selection:bg-cyber-blue/30">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Navigation / Header */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center cyber-glow">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tight leading-none">
                CyberPath <span className="text-cyber-blue">2026</span>
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                By Tanish
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Your Journey</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    className="h-full bg-cyber-blue" 
                  />
                </div>
                <span className="text-xs font-bold text-cyber-blue font-mono">{progressPercent}%</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-xs font-bold mb-6"
          >
            <TrendingUp className="w-3 h-3" />
            2026 Career Ready Roadmap
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-tight"
          >
            I've mapped out your next <br />
            <span className="text-cyber-blue">150 days</span> in Cyber.
          </motion.h1>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed font-medium">
            Hey there! I'm Tanish. I built this guide because the 2026 market doesn't just want certificate holders—it wants problem solvers. 
            Follow this, and let's get you that first role in Delhi-NCR.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-4 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 px-2">Knowledge Phases</h2>
            {ROADMAP_DATA.map((month) => (
              <button
                key={month.id}
                onClick={() => setActiveMonth(month.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 border group ${
                  activeMonth === month.id
                    ? 'bg-cyber-blue/10 border-cyber-blue text-white shadow-[0_0_20px_-10px_rgba(59,130,246,0.5)]'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-tighter opacity-70">
                    Phase 0{month.id}
                  </span>
                  {activeMonth === month.id && (
                    <motion.div layoutId="active-indicator">
                      <ChevronRight className="w-4 h-4 text-cyber-blue" />
                    </motion.div>
                  )}
                </div>
                <h3 className="font-bold text-sm leading-tight group-hover:translate-x-1 transition-transform">
                  {month.title.split(': ')[1]}
                </h3>
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMonth}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-white mb-2 italic">
                    {ROADMAP_DATA[activeMonth - 1].title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {ROADMAP_DATA[activeMonth - 1].tasks.map((task, idx) => {
                    const taskId = `${activeMonth}-${idx}`;
                    const isCompleted = completedTasks.includes(taskId);
                    
                    return (
                      <div 
                        key={taskId}
                        className={`group relative glass-card transition-all duration-300 ${
                          isCompleted ? 'opacity-80 border-cyber-green/30' : 'hover:border-slate-600'
                        }`}
                      >
                        <div className="p-5 flex flex-col sm:flex-row gap-5 items-start">
                          <div className="flex flex-col items-center">
                            <div className="font-mono text-[10px] font-bold text-slate-500 mb-1">DAYS</div>
                            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-cyber-blue font-mono shadow-inner">
                              {task.days}
                            </div>
                          </div>

                          <div className="flex-1 w-full">
                            <div className="flex justify-between items-start mb-2 group/title">
                              <h4 className={`text-lg font-bold transition-colors ${
                                isCompleted ? 'text-cyber-green' : 'text-slate-200'
                              }`}>
                                {task.topic}
                              </h4>
                              <button 
                                onClick={() => toggleTask(taskId)}
                                className={`p-2 rounded-lg transition-all ${
                                  isCompleted 
                                    ? 'bg-cyber-green/20 text-cyber-green shadow-[0_0_10px_-2px_rgba(16,185,129,0.5)]' 
                                    : 'bg-slate-800 text-slate-500 hover:text-white hover:bg-slate-700'
                                }`}
                              >
                                <CheckCircle2 className="w-5 h-5" />
                              </button>
                            </div>
                            
                            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                              {task.task}
                            </p>

                            <div className="flex items-center gap-3">
                              <a 
                                href={task.videoUrl} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-white transition-all shadow-lg hover:shadow-cyber-blue/10"
                              >
                                <PlayCircle className="w-4 h-4 text-cyber-blue" />
                                Learn in Hindi
                                <ExternalLink className="w-3 h-3 opacity-50" />
                              </a>
                            </div>
                          </div>
                        </div>
                        
                        {isCompleted && (
                          <div className="absolute top-0 right-0 p-1">
                            <div className="w-0 h-0 border-t-[30px] border-l-[30px] border-t-cyber-green/40 border-l-transparent rounded-tr-xl" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Special Section for Job Strategy */}
            {activeMonth === 5 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 border border-cyber-blue/30 relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Briefcase className="w-48 h-48" />
                 </div>
                 
                 <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-cyber-blue" />
                    How to land that job
                 </h2>
                 
                 <div className="space-y-8 relative z-10">
                    {JOB_STRATEGY.platforms.map((plat) => (
                      <div key={plat.name} className="flex gap-5">
                        <div className="p-4 rounded-2xl bg-white/10 border border-white/10 h-fit">
                          {plat.name.includes('Naukri') ? <Search className="w-6 h-6 text-cyber-blue" /> : <Globe className="w-6 h-6 text-cyber-purple" />}
                        </div>
                        <div>
                          <h4 className="font-black text-xl text-white mb-2">{plat.name}</h4>
                          <p className="text-slate-400 font-medium leading-relaxed">{plat.tip}</p>
                        </div>
                      </div>
                    ))}
                 </div>

                 <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-4 items-center">
                    <div className="flex items-center gap-2 text-xs font-black text-slate-400">
                       <MapPin className="w-4 h-4 text-cyber-blue" /> WHERE THE JOBS ARE:
                    </div>
                    {JOB_STRATEGY.locationFocus.map(loc => (
                      <span key={loc} className="px-4 py-1.5 rounded-full bg-cyber-blue/20 text-cyber-blue text-sm font-black border border-cyber-blue/30">
                        {loc}
                      </span>
                    ))}
                 </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto px-4 py-20 mt-20 border-t border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyber-blue flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="font-black text-xl text-white">CyberPath 2026</span>
            </div>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
              An interactive roadmap built by Tanish to help you navigate the 2026 Cybersecurity landscape in India. Stay curious, stay ethical.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <div className="flex gap-4 mb-6">
               <a href="#" className="p-3 rounded-xl bg-slate-900 text-slate-500 hover:text-cyber-blue hover:bg-slate-800 transition-all"><Terminal className="w-5 h-5" /></a>
               <a href="#" className="p-3 rounded-xl bg-slate-900 text-slate-500 hover:text-cyber-blue hover:bg-slate-800 transition-all"><Lock className="w-5 h-5" /></a>
               <a href="#" className="p-3 rounded-xl bg-slate-900 text-slate-500 hover:text-cyber-blue hover:bg-slate-800 transition-all"><Globe className="w-5 h-5" /></a>
            </div>
            <p className="text-slate-700 text-[10px] font-black uppercase tracking-widest">
              Digital Blueprint &bull; Created by Tanish &bull; 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

