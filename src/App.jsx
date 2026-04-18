import React, { useState, useEffect } from 'react';
import {
  MonitorPlay,
  PlayCircle,
  Video,
  Scissors,
  Zap,
  Palette,
  Mic2,
  Briefcase,
  CheckCircle2,
  Star,
  Camera,
  Send,
  Lock,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#home' },
    { name: 'Course', href: '#course' },
    { name: 'Results', href: '#results' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl py-2 border-b border-primary/20 shadow-lg' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-10 md:h-12 w-auto object-contain" />
        </div>

        {/* Desktop Links */}
        {/* <ul className="hidden lg:flex flex-row items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors tracking-wide uppercase">
                {link.name}
              </a>
            </li>
          ))}
        </ul> */}

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#register" className="btn btn-gradient !py-2 !px-6 !text-sm">
            Register Now →
          </a>
        </div>

        {/* Hamburger Menu - Visible only on Tablet (md to lg) if you want, or just hide on mobile */}
        {/* The user said "remove the navigation bar except logo on mobile" */}
        <div className="hidden sm:block lg:hidden">
          <button className="text-slate-900 p-2 z-[2001] hover:bg-slate-100 rounded-lg transition-colors" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[2000] flex flex-col justify-center items-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] p-10 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col gap-8 text-center w-full list-none p-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setMenuOpen(false)} className="font-heading text-4xl text-slate-900 uppercase hover:text-primary transition-colors">
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-6">
            <a href="#register" className="btn btn-gradient w-full py-4 text-xl" onClick={() => setMenuOpen(false)}>
              Register Now →
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-[-2] bg-[url('https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
      <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-bg-dark/60 via-bg-dark/95 to-bg-dark"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h1 className="title-xl leading-[0.9] md:leading-none">
          Turn Your Laptop Into A <br />
          <span className="text-gradient">Money Machine</span>
        </h1>
        <p className="text-2xl md:text-3xl font-heading text-slate-800 mb-4 tracking-wide">Learn Video Editing. Start Earning.</p>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium">
          From Zero to Pro Video Editor in 30 Days — No Experience. No Degree. Just Results.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a href="#register" className="btn btn-gradient !px-10">Start Learning Now →</a>
          <button className="btn btn-ghost !px-10"><MonitorPlay size={20} /> Watch Free Preview</button>
        </div>

        <div className="inline-flex flex-wrap justify-center bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl md:rounded-full py-4 px-8 gap-4 md:gap-8 text-xs md:text-sm font-bold text-slate-600 shadow-sm">
          <div className="flex items-center gap-2">👥 1,200+ Students</div>
          <div className="hidden md:block border-l border-slate-200 h-5"></div>
          <div className="flex items-center gap-2">⭐ 4.9 Rating</div>
          <div className="hidden md:block border-l border-slate-200 h-5"></div>
          <div className="flex items-center gap-2">🚀 30-Day Transformation</div>
          <div className="hidden md:block border-l border-slate-200 h-5"></div>
          <div className="flex items-center gap-2">🔓 Lifetime Access</div>
        </div>
      </div>
    </section>
  );
};

const TrustTicker = () => {
  const logos = [
    { name: 'YOUTUBE', icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FF0000]"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93$.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
    { name: 'INSTAGRAM', icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#E1306C]"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg> },
    { name: 'UPWORK', icon: <Briefcase size={20} /> },
    { name: 'FIVERR', icon: <Briefcase size={20} /> },
    { name: 'FREELANCER', icon: <Zap size={20} /> },
  ];

  return (
    <div className="py-8 border-y border-slate-200 bg-bg-darker overflow-hidden flex flex-col md:flex-row items-center gap-6">
      <div className="font-heading text-xl text-slate-400 whitespace-nowrap px-6">AS SEEN BY CREATORS FROM →</div>
      <div className="relative flex-grow overflow-hidden flex items-center w-full">
        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-bg-darker to-transparent hidden md:block"></div>
        <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-bg-darker to-transparent hidden md:block"></div>

        <div className="flex gap-20 items-center animate-marquee whitespace-nowrap pl-5">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center gap-3 font-bold text-xl text-slate-400 opacity-40 uppercase grayscale hover:opacity-100 hover:grayscale-0 hover:text-primary transition-all cursor-default">
              {logo.icon}
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ... other components rewritten with explicit flex-row/col and reduced padding ...

const ProblemHook = () => {
  const problems = [
    { emoji: "😓", text: "\"Skill nahi hai, time waste ho raha hai\"" },
    { emoji: "💸", text: "\"Earning chahiye but koi rasta nahi dikh raha\"" },
    { emoji: "🤯", text: "\"YouTube/Reels dekh ke inspire ho, par start nahi kar paa raha\"" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="title-lg">Yeh sab feel hota hai? 👇</h2>
          <p className="text-sub">If yes — this course is made for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="glass-card text-center py-10 px-8 flex flex-col items-center">
              <div className="text-5xl mb-6">{p.emoji}</div>
              <p className="text-lg text-slate-800 font-semibold leading-relaxed uppercase">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-xl md:text-2xl text-primary font-bold text-center uppercase tracking-wider">
          Hum samajhte hain. Isliye yeh course banaya.
        </div>
      </div>
    </section>
  );
};

const SolutionRoadmap = () => {
  const steps = [
    { week: "Week 1 →", desc: "Learn the basics of editing software (Premiere/CapCut)" },
    { week: "Week 2 →", desc: "Build your first highly engaging professional video" },
    { week: "Week 3 →", desc: "Master reels, dynamic transitions, and modern color grading" },
    { week: "Week 4 →", desc: "Get clients. Start earning ₹20K–₹1L/month" },
  ];

  return (
    <section className="py-20 px-6 bg-bg-darker border-t border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Student Editing"
            className="w-full rounded-2xl border border-slate-200 shadow-xl"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="title-lg">Your <span className="text-gradient">Transformation</span> Starts Here</h2>

          <div className="flex flex-col gap-6 my-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="font-heading text-xl text-primary whitespace-nowrap pt-1">{step.week}</div>
                <div className="text-base md:text-lg text-slate-700 font-bold">{step.desc}</div>
              </div>
            ))}
          </div>

          <a href="#course" className="btn btn-ghost mt-4">See Full Roadmap →</a>
        </div>
      </div>
    </section>
  );
};

const CourseModules = () => {
  const modules = [
    { icon: <Video size={24} />, title: "Introduction", desc: "Premiere Pro / CapCut Pro basics & interface." },
    { icon: <Scissors size={24} />, title: "Timeline Mastery", desc: "Cutting, trimming & retention pacing." },
    { icon: <Zap size={24} />, title: "Motion Graphics", desc: "Advanced transitions & keyframing effects." },
    { icon: <Palette size={24} />, title: "Color Grading", desc: "Get that cinematic look easily." },
    { icon: <Mic2 size={24} />, title: "Sound Design", desc: "Audio mixing and SFX integration." },
    { icon: <Briefcase size={24} />, title: "Freelancing", desc: "Hunt clients & earn online dollars." }
  ];

  return (
    <section id="course" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="title-lg text-center mb-12">
          Everything <span className="text-gradient">Inside The Course</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <div key={i} className="glass-card flex gap-5 p-6 md:p-8 items-start">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                {m.icon}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-heading mb-1 uppercase tracking-tight">Module {i + 1}: {m.title}</h3>
                <p className="text-slate-500 text-sm md:text-base font-medium">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#register" className="btn btn-gradient">View Full Curriculum →</a>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { num: 1, title: "Enroll in Course", desc: "Instant access to training." },
    { num: 2, title: "Learn at Your Pace", desc: "Lifetime access anytime, anywhere." },
    { num: 3, title: "Start Getting Paid", desc: "Hunt clients using our strategies." },
  ];

  return (
    <section className="py-20 px-6 bg-bg-darker border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="title-lg text-center mb-14">How It Works</h2>

        <div className="relative flex flex-col md:flex-row justify-between gap-10 md:gap-4 mt-10">
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0"></div>

          {steps.map((step) => (
            <div key={step.num} className="relative z-10 text-center flex-1 px-4">
              <div className="w-16 h-16 bg-white border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-4 font-heading text-2xl text-primary shadow-md">
                {step.num}
              </div>
              <h3 className="text-xl md:text-2xl font-heading mb-1 uppercase tracking-wide">{step.title}</h3>
              <p className="text-slate-500 text-sm font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const items = [
    { type: "Reels Edit", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", wide: false },
    { type: "Cinematic", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", wide: true },
    { type: "YouTube Edit", img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", wide: false },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="title-lg">Videos Our <span className="text-gradient">Students</span> Created</h2>
          <p className="text-sub">You will create videos like this by Week 3</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div key={i} className={`relative group rounded-xl overflow-hidden cursor-pointer border border-slate-200 shadow-sm ${item.wide ? 'lg:col-span-2 aspect-video md:aspect-[9/16] lg:aspect-video' : 'aspect-[9/16]'}`}>
              <img src={item.img} alt={item.type} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <span className="bg-white/90 text-primary px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest mb-2">{item.type}</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 transition-opacity duration-300 border border-white/40 text-white group-hover:opacity-100">
                <PlayCircle size={28} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Arjun K.", city: "Mumbai", text: "Pehle mujhe kuch nahi aata tha. Abhi main ₹35,000/month earn kar raha hoon!", tag: "Earned First ₹10K in 15 days" },
    { name: "Sneha R.", city: "Delhi", text: "The Premiere Pro modules are insane. Got full confidence to pitch international clients now.", tag: "Lands $500/mo retainer" },
    { name: "Ravi M.", city: "Pune", text: "Best 499 rupees spent in my life. The freelancing module alone is worth lakhs.", tag: "Full-Time Video Editor" },
  ];

  return (
    <section id="results" className="py-20 px-6 bg-bg-darker">
      <div className="max-w-7xl mx-auto">
        <h2 className="title-lg text-center mb-12">
          Real Students. <span className="text-gradient">Real Results. 🔥</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="glass-card !p-8">
              <div className="text-[#F59E0B] mb-4 text-base">⭐⭐⭐⭐⭐</div>
              <p className="text-base italic mb-6 text-slate-800 leading-relaxed font-medium">"{r.text}"</p>
              <div className="text-emerald-600 text-[10px] font-extrabold mb-5 uppercase tracking-widest">🏆 {r.tag}</div>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                <img src={`https://i.pravatar.cc/100?img=${i + 40}`} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">{r.name}</div>
                  <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">{r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Results Graph" className="max-w-xl w-full mx-auto rounded-2xl border border-slate-200 shadow-lg" />
          <div className="mt-8">
            <a href="#register" className="btn btn-gradient">Join 1200+ Students →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Instructor = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Mentor"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>
        <div>
          <h2 className="title-lg">Meet Your <span className="text-gradient">Mentor</span></h2>
          <h3 className="text-2xl md:text-3xl font-heading text-secondary mb-6 uppercase tracking-tight">Aman Roy | Pro Video Editor</h3>

          <div className="flex flex-col gap-4 mt-6">
            {[
              { text: "5+ years of elite experience in media industry." },
              { text: "Worked with 50+ global brands and creators." },
              { text: "Earned ₹10L+ purely from freelancing." },
              { text: "Taught 1200+ students successfully." }
            ].map((stat, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="text-base text-slate-600 font-bold leading-tight uppercase tracking-tight">{stat.text}</div>
              </div>
            ))}
          </div>

          <div className="font-heading text-5xl text-primary/10 mt-10 select-none">Aman Roy</div>
        </div>
      </div>
    </section>
  );
};

const Bonuses = () => {
  const bonuses = [
    { title: "Cinematic LUTs Pack", val: "₹2,999" },
    { title: "Proposal Scripts", val: "₹1,999" },
    { title: "Freelancing Tips", val: "₹4,999" },
    { title: "Portfolio Templates", val: "₹2,999" },
  ];

  return (
    <section className="py-20 px-6 bg-bg-darker border-t border-slate-200">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="title-lg mb-12">
          🎁 FREE Bonuses <span className="text-gradient">Worth ₹15,000</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bonuses.map((b, i) => (
            <div key={i} className="glass-card border-t-2 border-primary !p-6 flex flex-col items-center justify-center">
              <h3 className="text-lg font-heading mb-2 leading-tight uppercase tracking-wide">{b.title}</h3>
              <div className="text-xs font-bold">
                <span className="line-through text-slate-400 mr-2">{b.val}</span>
                <span className="text-[#10B981] uppercase tracking-widest">FREE</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-slate-400 mt-10 text-base font-bold uppercase tracking-wider">Included at NO extra cost.</p>
      </div>
    </section>
  );
};

const Registration = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="register" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="title-lg text-center mb-12">
          Start Your Journey.<br /> <span className="text-gradient">Register Today.</span>
        </h2>

        <div className="max-w-lg mx-auto">
          <div className="bg-white border border-primary/30 rounded-2xl p-6 md:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 size={56} className="text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-heading mb-2">Registration Done!</h3>
                <p className="text-slate-500 font-medium">We'll contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" name="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-bg-dark focus:outline-none focus:border-primary transition-all text-sm font-bold" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" name="email" placeholder="john@example.com" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-bg-dark focus:outline-none focus:border-primary transition-all text-sm font-bold" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                  <input type="tel" name="phone" placeholder="+91 9999999999" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-bg-dark focus:outline-none focus:border-primary transition-all text-sm font-bold" />
                </div>

                <button type="submit" className="btn btn-gradient w-full !text-lg !py-4 mt-2">
                  🚀 Register Now →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Urgency = () => {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-lg mx-auto bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-2xl p-8 text-center shadow-sm">
        <h3 className="text-red-600 font-extrabold text-[10px] tracking-[0.2em] mb-3 uppercase">⚠️ LIMITED OFFER!</h3>
        <div className="font-heading text-5xl text-gradient tracking-widest mb-3">11 : 45 : 22</div>
        <div className="text-slate-900 font-bold text-lg mb-6 uppercase tracking-tight">Only 23 Seats Left!</div>
        <a href="#register" className="btn btn-ghost !text-xs !py-3 !px-6 border-red-200 hover:border-red-400">
          Grab Deal Now →
        </a>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Kya mujhe pehle se kuch aana chahiye?", a: "Bilkul nahi. Course completely beginner-friendly hai." },
    { q: "Kaun sa software sikhayenge?", a: "Premiere Pro, CapCut Pro + After Effects basics." },
    { q: "Course kab tak access milega?", a: "Lifetime! Koi expiry nahi." },
    { q: "Refund milega?", a: "Haan, 7-day money back guarantee hai." },
    { q: "Certificate milega?", a: "Yes, verified certificate milega." },
  ];
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="py-20 px-6 bg-bg-darker border-t border-slate-200">
      <div className="max-w-2xl mx-auto">
        <h2 className="title-lg text-center mb-10">Got Questions? <span className="text-gradient">We Got Answers.</span></h2>

        <div className="flex flex-col border-t border-slate-200">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-slate-200 py-5 cursor-pointer group" onClick={() => setActive(active === i ? -1 : i)}>
              <div className="flex justify-between items-center text-lg font-bold text-slate-800 group-hover:text-primary transition-colors tracking-tight uppercase">
                {f.q}
                <ChevronDown size={18} className={`transition-transform duration-300 ${active === i ? 'rotate-180' : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${active === i ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-sm text-slate-500 font-bold">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="relative py-24 px-6 text-center overflow-hidden bg-bg-darker border-t border-slate-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-primary blur-[150px] opacity-10 z-0"></div>
      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-heading mb-4 leading-none">Stop Watching. <br /><span className="text-gradient">Start Earning.</span></h2>
        <p className="text-xl md:text-2xl text-slate-500 mb-10 font-bold uppercase tracking-wide">
          1200+ students already started.
        </p>

        <a href="#register" className="btn btn-gradient !text-2xl !py-6 !px-12">
          Join Now for Free →
        </a>

        <div className="flex flex-wrap justify-center gap-6 mt-10 text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <div className="flex items-center gap-1"><Lock size={12} /> Secure</div>
          <div className="flex items-center gap-1">✅ Instant Access</div>
          <div className="flex items-center gap-1">🔒 Safe Payment</div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="text-center md:text-left">
            <div className="font-heading text-3xl mb-4 text-primary tracking-tighter">IconsBase</div>
            <p className="text-slate-400 text-xs font-bold leading-relaxed max-w-xs mx-auto md:mx-0 uppercase tracking-tighter">
              The #1 creative video mastery academy. Equip yourself with skills.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-heading text-xl mb-4 uppercase">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-slate-500 text-xs font-black uppercase tracking-widest">
              <li><a href="#home" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#course" className="hover:text-primary transition-colors">Learning</a></li>
              <li><a href="#results" className="hover:text-primary transition-colors">Results</a></li>
              <li><a href="#register" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-heading text-xl mb-4 uppercase">Socials</h4>
            <ul className="flex flex-col gap-2 text-slate-500 text-xs font-black uppercase tracking-widest">
              <li><a href="#" className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors">YouTube</a></li>
              <li><a href="#" className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors">Telegram</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-heading text-xl mb-4 uppercase">Contact</h4>
            <div className="text-slate-400 text-[10px] font-black uppercase leading-tight tracking-widest">
              hello@iconsbase.com<br />
              +91 7030400090<br /><br />
              Jaipur, Rajasthan 302021
            </div>
          </div>
        </div>

        <div className="border-t border-slate-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-300 text-[9px] font-black uppercase tracking-[0.2em]">
          <div>© {new Date().getFullYear()} Prapr Academy.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="bg-bg-dark tracking-tight overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustTicker />
      <ProblemHook />
      <SolutionRoadmap />
      <CourseModules />
      <HowItWorks />
      <Portfolio />
      <Testimonials />
      <Instructor />
      <Bonuses />
      <Registration />
      <Urgency />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;
