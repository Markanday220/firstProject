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
import './index.css';

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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container flex justify-between items-center">
        <div className="brand">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </div>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}><a href={link.href}>{link.name}</a></li>
          ))}
        </ul>
        
        <div className="flex items-center gap-md">
          <a href="#register" className="btn btn-gradient nav-btn" style={{ padding: '10px 24px', fontSize: '1rem' }}>
            Register Now →
          </a>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>{link.name}</a>
            </li>
          ))}
          <li>
            <a href="#register" className="btn btn-gradient" onClick={() => setMenuOpen(false)} style={{ width: '100%' }}>
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
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="container hero-content">

        
        <h1 className="title-xl">
          Turn Your Laptop Into A <br/>
          <span className="text-gradient">Money Machine</span>
        </h1>
        <p className="title-md">Learn Video Editing. Start Earning.</p>
        <p className="text-sub" style={{ maxWidth: '600px', margin: '0 auto' }}>
          From Zero to Pro Video Editor in 30 Days — No Experience. No Degree. Just Results.
        </p>
        
        <div className="hero-btns">
          <a href="#register" className="btn btn-gradient">Start Learning Now →</a>
          <button className="btn btn-ghost"><MonitorPlay size={20} /> Watch Free Preview</button>
        </div>

        <div className="stat-bar">
          <div>1,200+ Students</div>
          <div>⭐ 4.9 Rating</div>
          <div>30-Day Transformation</div>
          <div>Lifetime Access</div>
        </div>
      </div>
    </section>
  );
};

const TrustTicker = () => {
  return (
    <div className="trust-bar">
      <div className="trust-text">AS SEEN BY CREATORS FROM →</div>
      <div className="ticker-container">
        <div className="ticker-wrap">
          <div className="ticker-logo">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            YOUTUBE
          </div>
          <div className="ticker-logo">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#E1306C"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            INSTAGRAM
          </div>
          <div className="ticker-logo"><Briefcase /> UPWORK</div>
          <div className="ticker-logo"><Briefcase /> FIVERR</div>
          <div className="ticker-logo"><Zap /> FREELANCER</div>
          {/* Duplicates for seamless loop */}
          <div className="ticker-logo">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            YOUTUBE
          </div>
          <div className="ticker-logo">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#E1306C"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            INSTAGRAM
          </div>
          <div className="ticker-logo"><Briefcase /> UPWORK</div>
          <div className="ticker-logo"><Briefcase /> FIVERR</div>
          <div className="ticker-logo"><Zap /> FREELANCER</div>
        </div>
      </div>
    </div>
  );
};




const ProblemHook = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2 className="title-lg">Yeh sab feel hota hai? 👇</h2>
          <p className="text-sub">If yes — this course is made for you</p>
        </div>
        
        <div className="grid-3">
          <div className="glass-card problem-card">
            <h3 className="icon-box-lg">😓</h3>
            <p className="text-sub" style={{ color: 'var(--text-main)' }}>"Skill nahi hai, time waste ho raha hai"</p>
          </div>
          <div className="glass-card problem-card">
            <h3 className="icon-box-lg">💸</h3>
            <p className="text-sub" style={{ color: 'var(--text-main)' }}>"Earning chahiye but koi rasta nahi dikh raha"</p>
          </div>
          <div className="glass-card problem-card">
            <h3 className="icon-box-lg">🤯</h3>
            <p className="text-sub" style={{ color: 'var(--text-main)' }}>"YouTube/Reels dekh ke inspire ho, par start nahi kar paa raha"</p>
          </div>
        </div>

        <div className="problem-bottom">
          Hum samajhte hain. Isliye yeh course banaya.
        </div>
      </div>
    </section>
  );
};

const SolutionRoadmap = () => {
  return (
    <section className="section" style={{ background: 'var(--bg-darker)', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container grid-2 items-center inverse">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Student Editing" 
            className="roadmap-img" 
          />
        </div>
        <div>
          <h2 className="title-lg">Your <span className="text-gradient">Transformation</span> Starts Here</h2>
          
          <div className="timeline">
            <div className="timeline-step">
              <div className="t-week">Week 1 →</div>
              <div className="t-desc">Learn the basics of editing software (Premiere/CapCut)</div>
            </div>
            <div className="timeline-step">
              <div className="t-week">Week 2 →</div>
              <div className="t-desc">Build your first highly engaging professional video</div>
            </div>
            <div className="timeline-step">
              <div className="t-week">Week 3 →</div>
              <div className="t-desc">Master reels, dynamic transitions, and modern color grading</div>
            </div>
            <div className="timeline-step">
              <div className="t-week">Week 4 →</div>
              <div className="t-desc">Get clients. Start earning ₹20K–₹1L/month</div>
            </div>
          </div>

          <a href="#course" className="btn btn-ghost" style={{ marginTop: '20px' }}>See Full Roadmap →</a>
        </div>
      </div>
    </section>
  );
};

const CourseModules = () => {
  const modules = [
    { icon: <Video />, title: "Introduction", desc: "Premiere Pro / CapCut Pro basics & interface." },
    { icon: <Scissors />, title: "Timeline Mastery", desc: "Cutting, trimming & retention pacing." },
    { icon: <Zap />, title: "Motion Graphics", desc: "Advanced transitions & keyframing effects." },
    { icon: <Palette />, title: "Color Grading", desc: "Get that cinematic look easily." },
    { icon: <Mic2 />, title: "Sound Design", desc: "Audio mixing and SFX integration." },
    { icon: <Briefcase />, title: "Freelancing", desc: "Hunt clients & earn online dollars." }
  ];

  return (
    <section id="course" className="section">
      <div className="container">
        <h2 className="title-lg text-center" style={{ marginBottom: '60px' }}>
          Everything <span className="text-gradient">Inside The Course</span>
        </h2>
        
        <div className="grid-6">
          {modules.map((m, i) => (
            <div key={i} className="glass-card module-card">
              <div className="module-icon">{m.icon}</div>
              <div>
                <h3 className="title-md" style={{ marginBottom: '8px' }}>Module {i + 1}: {m.title}</h3>
                <p className="text-sub">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: '60px' }}>
          <a href="#register" className="btn btn-gradient">View Full Curriculum →</a>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section className="section" style={{ background: 'var(--bg-darker)', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container">
        <h2 className="title-lg text-center">How It Works</h2>
        
        <div className="steps-horizontal">
          <div className="steps-line"></div>
          
          <div className="step-node">
            <div className="step-circle">1</div>
            <h3 className="title-md">Enroll in Course</h3>
            <p className="text-sub">Instant access to training.</p>
          </div>
          <div className="step-node">
            <div className="step-circle">2</div>
            <h3 className="title-md">Learn at Your Pace</h3>
            <p className="text-sub">Lifetime access anytime, anywhere.</p>
          </div>
          <div className="step-node">
            <div className="step-circle">3</div>
            <h3 className="title-md">Start Getting Paid</h3>
            <p className="text-sub">Hunt clients using our strategies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2 className="title-lg">Videos Our <span className="text-gradient">Students</span> Created</h2>
          <p className="text-sub">You will create videos like this by Week 3</p>
        </div>
        
        <div className="portfolio-grid">
          <div className="portfolio-card">
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Reels Edit" className="portfolio-img" />
            <div className="portfolio-overlay">
              <span className="p-tag">Reels Edit</span>
            </div>
            <div className="play-center"><PlayCircle size={32} /></div>
          </div>

          <div className="portfolio-card portfolio-wide">
            <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Cinematic" className="portfolio-img" />
            <div className="portfolio-overlay">
              <span className="p-tag">Cinematic</span>
            </div>
            <div className="play-center"><PlayCircle size={32} /></div>
          </div>

          <div className="portfolio-card">
            <img src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="YouTube Edit" className="portfolio-img" />
            <div className="portfolio-overlay">
              <span className="p-tag">YouTube Edit</span>
            </div>
            <div className="play-center"><PlayCircle size={32} /></div>
          </div>
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
    <section id="results" className="section" style={{ background: 'var(--bg-darker)' }}>
      <div className="container">
         <h2 className="title-lg text-center" style={{ marginBottom: '60px' }}>
            Real Students. <span className="text-gradient">Real Results. 🔥</span>
         </h2>
         
         <div className="grid-3">
           {reviews.map((r, i) => (
             <div key={i} className="glass-card">
               <div className="stars">⭐⭐⭐⭐⭐</div>
               <p className="testi-text">"{r.text}"</p>
               <div className="testi-tag">🏆 {r.tag}</div>
               <div className="testi-user">
                 <img src={`https://i.pravatar.cc/100?img=${i+40}`} alt={r.name} className="testi-avatar" />
                 <div>
                   <div className="bold">{r.name}</div>
                   <div style={{ color: '#8F909A', fontSize: '0.8rem' }}>{r.city}</div>
                 </div>
               </div>
             </div>
           ))}
         </div>

         <div className="text-center" style={{ marginTop: '60px' }}>
           <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Results Graph" style={{ maxWidth: '600px', width: '100%', borderRadius: '20px', border: '1px solid var(--glass-border)' }} />
           <br/><br/>
           <a href="#register" className="btn btn-gradient">Join 1200+ Students →</a>
         </div>
      </div>
    </section>
  );
};

const Instructor = () => {
  return (
    <section className="section">
      <div className="container grid-2 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Mentor" 
            style={{ borderRadius: '24px', boxShadow: '0 30px 60px rgba(0,0,0,0.8)' }} 
          />
        </div>
        <div>
          <h2 className="title-lg">Meet Your <span className="text-gradient">Mentor</span></h2>
          <h3 className="title-md" style={{ color: 'var(--secondary)' }}>Aman Roy | Pro Video Editor & Creator</h3>
          
          <div style={{ marginTop: '30px' }}>
            <div className="bio-stat">
              <CheckCircle2 className="bio-stat-icon" />
              <div className="text-sub"><strong>5+ years</strong> of elite editing experience in the media industry.</div>
            </div>
            <div className="bio-stat">
              <CheckCircle2 className="bio-stat-icon" />
              <div className="text-sub">Worked with <strong>50+ global brands</strong> and influencers.</div>
            </div>
            <div className="bio-stat">
              <CheckCircle2 className="bio-stat-icon" />
              <div className="text-sub">Earned <strong>₹10L+</strong> purely from international freelancing.</div>
            </div>
            <div className="bio-stat">
              <CheckCircle2 className="bio-stat-icon" />
              <div className="text-sub">Taught <strong>1200+ students</strong> successfully.</div>
            </div>
          </div>
          
          <div className="signature">Aman Roy</div>
        </div>
      </div>
    </section>
  );
};

const Bonuses = () => {
  return (
    <section className="section" style={{ background: 'var(--bg-darker)', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container">
        <h2 className="title-lg text-center" style={{ marginBottom: '60px' }}>
          🎁 FREE Bonuses <span className="text-gradient">Worth ₹15,000</span>
        </h2>
        
        <div className="grid-4">
          <div className="glass-card bonus-card">
            <h3 className="title-md">Cinematic LUTs & Presets</h3>
            <div className="bonus-val"><span className="strike">₹2,999</span> <span className="bonus-free">FREE</span></div>
          </div>
          <div className="glass-card bonus-card">
            <h3 className="title-md">Client Proposal Scripts</h3>
            <div className="bonus-val"><span className="strike">₹1,999</span> <span className="bonus-free">FREE</span></div>
          </div>
          <div className="glass-card bonus-card">
            <h3 className="title-md">Freelancing Masterclass</h3>
            <div className="bonus-val"><span className="strike">₹4,999</span> <span className="bonus-free">FREE</span></div>
          </div>
          <div className="glass-card bonus-card">
            <h3 className="title-md">Portfolio Templates Pack</h3>
            <div className="bonus-val"><span className="strike">₹2,999</span> <span className="bonus-free">FREE</span></div>
          </div>
        </div>
        
        <p className="text-center text-sub" style={{ marginTop: '40px' }}>All included at NO extra cost with the main bundle.</p>
      </div>
    </section>
  );
};

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="register" className="section">
      <div className="container">
        <h2 className="title-lg text-center" style={{ marginBottom: '60px' }}>
          Start Your Journey.<br/> <span className="text-gradient">Register Today.</span>
        </h2>
        
        <div className="pricing-wrapper">
          <div className="glass-card pricing-card">
            {submitted ? (
              <div className="success-message">
                <CheckCircle2 size={64} color="#10B981" style={{ margin: '0 auto 24px' }} />
                <h3 className="title-md">Registration Successful!</h3>
                <p className="text-sub">We'll contact you shortly with the next steps.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Enter your full name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Mobile Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="Enter your mobile number" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <button type="submit" className="btn btn-gradient" style={{ width: '100%', fontSize: '1.25rem', padding: '20px', marginTop: '20px' }}>
                  🚀 Register Now →
                </button>
                
                <div className="price-features" style={{ marginTop: '30px' }}>
                  <div className="price-li"><CheckCircle2 color="#6C3FFF" size={18} /> Instant Access to Free Modules</div>
                  <div className="price-li"><CheckCircle2 color="#6C3FFF" size={18} /> Join Private Community</div>
                </div>
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
    <section className="container">
      <div className="alert-banner">
        <h3 style={{ color: '#0F172A', marginBottom: '10px' }}>⚠️ OFFER ENDS IN:</h3>
        <div className="timer text-gradient">11 : 45 : 22</div>
        <div style={{ color: '#0F172A', fontWeight: '700', fontSize: '1.2rem', marginTop: '10px' }}>
          Only 23 Seats Left for This Batch!
        </div>
        <a href="#register" className="btn btn-ghost" style={{ marginTop: '24px', borderColor: 'white' }}>
          Grab The Deal Before It's Gone →
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
    { q: "Refund milega?", a: "Haan, 7-day money back guarantee hai. No questions asked." },
    { q: "Certificate milega?", a: "Yes, completion pe verified certificate milega." },
  ];
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="section" style={{ background: 'var(--bg-darker)', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container">
        <h2 className="title-lg text-center" style={{ marginBottom: '60px' }}>Got Questions? <span className="text-gradient">We Got Answers.</span></h2>
        
        <div className="faq-box">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item ${active === i ? 'active' : ''}`} onClick={() => setActive(active === i ? -1 : i)}>
              <div className="faq-q">
                {f.q}
                <ChevronDown style={{ transform: active === i ? 'rotate(180deg)' : 'rotate(0)' }} />
              </div>
              <div className="faq-a">
                {f.a}
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
    <section className="section final-cta text-center">
      <div className="final-glow"></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="title-xl">Stop Watching. <br/><span className="text-gradient">Start Earning.</span></h2>
        <p className="text-sub" style={{ fontSize: '1.5rem', marginBottom: '40px' }}>
          1200+ students already started. What are you waiting for?
        </p>
        
        <a href="#register" className="btn btn-gradient" style={{ fontSize: '1.5rem', padding: '24px 48px' }}>
          Join Now for Free → Last Chance
        </a>
        
        <div className="trust-badges">
          <div><Lock size={16} style={{ display: 'inline', marginTop: '-2px'}}/> Secure</div>
          <div><CheckCircle2 size={16} color="#10B981" style={{ display: 'inline', marginTop: '-2px'}}/> Instant Access</div>
          <div><CheckCircle2 size={16} color="#10B981" style={{ display: 'inline', marginTop: '-2px'}}/> Safe Payment</div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div>
            <div className="brand" style={{ marginBottom: '16px' }}>IconsBase</div>
            <p className="text-sub" style={{ fontSize: '0.9rem' }}>
              The #1 creative video mastery academy. Equip yourself with top-tier technical and business skills.
            </p>
          </div>
          
          <div>
            <div className="f-title">Quick Links</div>
            <ul className="f-links">
              <li><a href="#home">Features</a></li>
              <li><a href="#course">Learning Journey</a></li>
              <li><a href="#results">Testimonials</a></li>
              <li><a href="#register">Pricing</a></li>
              <li><a href="#faq">About US</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div>
            <div className="f-title">Socials</div>
            <ul className="f-links">
              <li><a href="#"><MonitorPlay size={18} style={{ display: 'inline' }}/> YouTube</a></li>
              <li><a href="#"><Camera size={18} style={{ display: 'inline' }}/> Instagram</a></li>
              <li><a href="#"><Send size={18} style={{ display: 'inline' }}/> Telegram</a></li>
            </ul>
          </div>

          <div>
            <div className="f-title">Contact</div>
            <ul className="f-links">
              <li>hello@iconsbase.com</li>
              <li>+91 7030400090 </li>
              <li>IconsBase - The AI Institute
B1/22 - B, First Floor, Gandhi Path Rd, Chitrakoot, Vaishali Nagar, Jaipur, Rajasthan 302021</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Prapr Academy. All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Refund Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div style={{ background: 'var(--bg-dark)' }}>
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
