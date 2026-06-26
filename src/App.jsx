import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CirclePlay,
  Code2,
  Github,
  GraduationCap,
  Headphones,
  Linkedin,
  Menu,
  MessageCircle,
  Quote,
  Search,
  Sparkles,
  Star,
  Target,
  Users,
  X
} from "lucide-react";

const asset = (name) => `https://files.codingninjas.in/${name}`;

const aiTools = [
  ["Gemini", asset("google_gemini_logo_2025-1-1-1767943347.svg")],
  ["FastAPI", asset("fastapi_logo-1-1768388021.svg")],
  ["LLM", asset("llm-logo-1-1768388021.svg")],
  ["LangChain", asset("langchain_logo-1-1768388021.svg")],
  ["Node.js", asset("nodejslight-1-1767791588.svg")],
  ["ChatGPT", asset("chat-gpt-2-1768388021.svg")],
  ["CrewAI", asset("crewai-brand-color-1-1768388021.svg")]
];

const courses = [
  {
    banner: asset("image-645-1771335523.webp"),
    topic: "Data Analytics",
    institute: "IITM Pravartak, TIH IIT Madras",
    title: "Professional Certification in Data Analytics with GenAI",
    duration: "6 months",
    enrolled: "20K+ Enrolled",
    tools: "10+ AI Tools",
    label: "IIT Certification"
  },
  {
    banner: asset("space-gray-1771335527.webp"),
    topic: "Data Analytics",
    institute: "E&ICT Academy, IIT Guwahati",
    title: "PG Certification in Data Analytics with GenAI",
    duration: "6 months",
    enrolled: "Admissions open",
    tools: "8+ AI Tools",
    label: "IIT Certification"
  },
  {
    banner: asset("image-642-1771335522.webp"),
    topic: "Generative AI",
    institute: "Coding Ninjas",
    title: "Advanced Certification in GenAI and Multi-Agent Systems",
    duration: "6 months",
    enrolled: "12K+ Enrolled",
    tools: "12+ AI Tools",
    label: "Certification"
  },
  {
    banner: asset("professional-programmer-working-late-dark-office-2-1771335525.webp"),
    topic: "Software Development",
    institute: "Coding Ninjas",
    title: "Software Development with GenAI Job Bootcamp",
    duration: "6 months",
    enrolled: "30K+ Enrolled",
    tools: "12+ AI Tools",
    label: "Job bootcamp"
  }
];

const projects = [
  ["US health care", "Analyze hospital demographics, admissions, costs and outcomes.", "🏥"],
  ["Credit risk analysis", "Predict defaults and improve lending decisions with GenAI.", "📊"],
  ["Meal plan analysis", "Optimize nutrition, costs and consumption using real data.", "🥗"],
  ["Pro Kabaddi analysis", "Assess player performance and match strategy with analytics.", "🏆"],
  ["Retail analysis", "Use SQL analytics to drive sales growth and customer retention.", "🛍️"]
];

const testimonials = [
  ["Vaibhav Dubey", "SMTS at Salesforce", "The GenAI program elevated my understanding from fundamentals to advanced mastery. Coding Ninjas builds lasting confidence, not just technical knowledge."],
  ["Shivani Sharma", "Data Analyst", "The projects felt close to real industry work and the mentors were available whenever I got stuck."],
  ["Simran Kaur", "Software Engineer", "Interview preparation, structured practice and feedback helped me confidently move into a product role."]
];

function Brand() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-[#ef6737] text-white"><Code2 size={21} /></span>
      <span className="text-[17px] font-bold tracking-normal text-white">coding<span className="text-[#f47a45]">ninjas</span></span>
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/95 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-[68px] max-w-[1120px] items-center justify-between px-5">
        <a href="#home" aria-label="Coding Ninjas home">
          <Brand />
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium lg:flex">
          <a href="#courses" className="nav-link inline-flex items-center gap-1">For working professionals <ChevronDown size={15} /></a>
          <a href="#courses" className="nav-link inline-flex items-center gap-1">For College Students <ChevronDown size={15} /></a>
          <a href="#ai-learning" className="nav-link">Domain</a>
        </div>
        <button className="hidden rounded-md border border-white/40 px-5 py-2 text-sm font-semibold lg:block">Login</button>
        <button className="grid h-10 w-10 place-items-center lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="grid gap-4 border-t border-white/10 bg-[#080808] px-5 py-5 text-sm font-semibold lg:hidden">
          <a href="#courses">For working professionals</a>
          <a href="#courses">For College Students</a>
          <a href="#ai-learning">Domain</a>
          <button className="rounded-md border border-white/30 px-4 py-3 text-left">Login</button>
        </div>
      )}
    </header>
  );
}

function CourseFinder() {
  const [experience, setExperience] = useState("Working Professional - Technical Roles");
  return (
    <form className="finder-card" onSubmit={(event) => event.preventDefault()}>
      <h2 className="text-xl font-bold">Let&apos;s find the right course for you</h2>
      <fieldset className="mt-6">
        <legend className="mb-3 text-sm font-semibold text-zinc-300">Experience</legend>
        <div className="space-y-2">
          {[
            "Working Professional - Technical Roles",
            "Working Professional - Non Technical",
            "College Student - Final Year",
            "College Student - 1st to Pre-final Year",
            "Others"
          ].map((item) => (
            <label key={item} className={`finder-option ${experience === item ? "finder-option-active" : ""}`}>
              <input type="radio" name="experience" className="sr-only" checked={experience === item} onChange={() => setExperience(item)} />
              <span className="radio-dot"><span /></span>
              <span>{item}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-semibold text-zinc-300">Select topic of interest</span>
        <span className="finder-input flex items-center justify-between text-zinc-400">Select your options/choices <ChevronDown size={17} /></span>
      </label>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label><span className="mb-2 block text-sm text-zinc-300">Name</span><input className="finder-input" placeholder="Enter name" /></label>
        <label><span className="mb-2 block text-sm text-zinc-300">Phone Number</span><input className="finder-input" placeholder="Enter phone number" /></label>
      </div>
      <label className="mt-3 block"><span className="mb-2 block text-sm text-zinc-300">Email</span><input className="finder-input" placeholder="Enter email" /></label>
      <button className="mt-5 w-full rounded-md bg-[#f66c3b] px-5 py-3.5 font-bold text-white hover:bg-[#ff7d4d]">Find your course</button>
      <p className="mt-3 text-[10px] leading-4 text-zinc-500">I authorise Coding Ninjas to contact me with course updates and offers. I agree to the Privacy Policy and Terms of use.</p>
    </form>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-rings" />
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 pb-20 pt-10 lg:grid-cols-[1.55fr_1fr] lg:items-start">
        <div className="relative z-10 min-w-0 overflow-hidden pt-7 lg:pt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-300/10 px-4 py-2 text-sm font-semibold text-orange-200">
            <img src={asset("thunder-1773622623.webp")} className="h-5 w-5 object-contain" alt="" /> Ready to 10X your career!
          </div>
          <h1 className="hero-title mt-7 max-w-[680px]">Give your career an unfair AI advantage</h1>
          <div className="mt-10 overflow-hidden">
            <div className="tool-track">
              {[...aiTools, ...aiTools].map(([name, logo], index) => (
                <div className="tool-chip" key={`${name}-${index}`}>
                  <img src={logo} alt="" /><span>{name}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8 text-center text-base text-zinc-100 lg:text-left">The right AI tools integrated into your curriculum</p>
          <div className="mt-12 hidden max-w-[680px] grid-cols-3 gap-3 lg:grid">
            {[
              [Bot, "AI-infused curriculum"],
              [Headphones, "24/7 doubt support"],
              [BriefcaseBusiness, "Career assistance"]
            ].map(([Icon, label]) => (
              <div key={label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-zinc-200">
                <Icon className="text-[#ff7a45]" size={20} /> {label}
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 min-w-0">
          <CourseFinder />
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }) {
  return (
    <article className="course-card">
      <img src={course.banner} alt="course banner" className="h-[145px] w-full object-cover" />
      <div className="p-5">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600"><Target size={14} className="text-[#ef6737]" /> {course.topic}</span>
        <p className="mt-4 min-h-10 text-sm font-semibold text-zinc-500">{course.institute}</p>
        <h3 className="mt-2 min-h-[72px] text-lg font-bold leading-6 text-zinc-900">{course.title}</h3>
        <div className="mt-5 grid grid-cols-2 gap-y-3 border-y border-zinc-200 py-4 text-xs font-medium text-zinc-600">
          <span>{course.duration}</span><span>{course.enrolled}</span>
          <span>{course.tools}</span><span>{course.label}</span>
        </div>
        <button className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#e75f2e]">View program <ArrowRight size={16} /></button>
      </div>
    </article>
  );
}

function Courses() {
  const [audience, setAudience] = useState("professionals");
  const [topic, setTopic] = useState("Data Analytics");
  return (
    <section id="courses" className="bg-[#f7f7f5] py-24">
      <div className="mx-auto max-w-[1120px] px-5">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Programs built for the future</p>
            <h2 className="section-title mt-3">Explore all our courses</h2>
          </div>
          <div className="inline-flex w-fit rounded-lg bg-zinc-200 p-1">
            <button onClick={() => setAudience("professionals")} className={`audience-tab ${audience === "professionals" ? "audience-tab-active" : ""}`}>For working professionals</button>
            <button onClick={() => setAudience("students")} className={`audience-tab ${audience === "students" ? "audience-tab-active" : ""}`}>For College Students</button>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {["Popular", "Data Analytics", "Generative AI", "Software Development", "Data Science"].map((item) => (
            <button key={item} onClick={() => setTopic(item)} className={`topic-pill ${topic === item ? "topic-pill-active" : ""}`}>{item}</button>
          ))}
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => <CourseCard course={course} key={course.title} />)}
        </div>
        <div className="mt-8 flex justify-end gap-3">
          <button className="arrow-button" aria-label="Previous courses"><ArrowLeft size={20} /></button>
          <button className="arrow-button arrow-button-dark" aria-label="Next courses"><ArrowRight size={20} /></button>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="overflow-hidden bg-[#101010] py-24 text-white">
      <div className="mx-auto max-w-[1120px] px-5">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="section-kicker text-orange-300">Hands-on experience</p><h2 className="section-title mt-3 text-white">Build with AI like never before</h2></div>
          <p className="max-w-sm text-sm leading-6 text-zinc-400">Work on industry-style projects and build a portfolio that demonstrates practical skills.</p>
        </div>
        <div className="mt-12 flex gap-5 overflow-x-auto pb-5">
          {projects.map(([title, copy, emoji], index) => (
            <article key={title} className={`project-card ${index === 1 ? "project-card-featured" : ""}`}>
              <div className="project-visual"><span>{emoji}</span><div className="project-chart"><i/><i/><i/><i/><i/></div></div>
              <div className="p-5"><p className="text-lg font-bold">{title}</p><p className="mt-2 text-sm leading-6 text-zinc-400">{copy}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AiLearning() {
  return (
    <>
      <section id="ai-learning" className="bg-white py-24">
        <div className="mx-auto grid max-w-[1120px] gap-14 px-5 lg:grid-cols-2 lg:items-center">
          <div className="curriculum-visual">
            <div className="code-window">
              <div className="window-dots"><i/><i/><i/></div>
              <p><span className="text-purple-400">const</span> career = <span className="text-orange-300">await</span> learnWithAI();</p>
              <p className="pl-5 text-zinc-500">// build, practice, improve</p>
              <p><span className="text-sky-400">return</span> career.<span className="text-emerald-300">accelerate</span>();</p>
            </div>
            <div className="ai-orbit"><Bot size={40} /><span className="orbit-dot orbit-one"/><span className="orbit-dot orbit-two"/><span className="orbit-dot orbit-three"/></div>
          </div>
          <div>
            <p className="section-kicker">Curriculum designed by experts</p>
            <h2 className="section-title mt-3">AI infused curriculum curated by experts</h2>
            <p className="mt-5 max-w-lg leading-7 text-zinc-600">Learn the tools that matter and integrate them into the workflow of your chosen domain.</p>
            <div className="mt-8 space-y-4">
              {[
                ["Master key AI tools in your domain", "Learn practical applications, not disconnected demos."],
                ["Expert faculty and live mentorship", "Get guidance from experienced instructors and industry mentors."],
                ["Real projects with modern workflows", "Build solutions that belong in a strong professional portfolio."]
              ].map(([title, copy]) => (
                <div className="flex gap-4 border-b border-zinc-200 pb-5" key={title}><span className="check-box"><Check size={16} /></span><div><h3 className="font-bold text-zinc-900">{title}</h3><p className="mt-1 text-sm leading-6 text-zinc-500">{copy}</p></div></div>
              ))}
            </div>
            <button className="primary-button mt-8">Explore courses <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>
      <section className="bg-[#161616] py-24 text-white">
        <div className="mx-auto max-w-[1120px] px-5">
          <p className="section-kicker text-orange-300">Designed around your progress</p>
          <h2 className="section-title mt-3 text-white">Step into the next generation of learning</h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="learning-card">
              <div><span className="learning-icon"><MessageCircle /></span><h3>Get instant Doubt Support</h3><p>24/7 support with our Teaching Assistants and Ninja AI, whenever you need it.</p></div>
              <div className="chat-demo"><span>How do I optimize this query?</span><span className="chat-response">Let&apos;s break it down step by step...</span></div>
            </article>
            <article className="learning-card">
              <div><span className="learning-icon"><Target /></span><h3>Interview prep like a pro with AI</h3><p>Practice interviews, refine your resume and improve with AI-powered feedback.</p></div>
              <div className="score-demo"><strong>86</strong><span>Interview score</span><div className="score-bars"><i/><i/><i/><i/></div></div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

function CareerImpact() {
  return (
    <section className="bg-[#f5f2ed] py-24">
      <div className="mx-auto max-w-[1120px] px-5">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="section-kicker">9+ years of transforming careers</p>
            <h2 className="section-title mt-3">5000+ students placed in MAANG companies</h2>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[["1.5L+", "Learners"], ["1,100+", "Companies"], ["4,400+", "Colleges"], ["2.2X", "Salary growth"]].map(([value, label]) => (
                <div className="rounded-lg border border-zinc-300 bg-white p-5" key={value}><strong className="text-3xl text-zinc-900">{value}</strong><p className="mt-1 text-sm text-zinc-500">{label}</p></div>
              ))}
            </div>
          </div>
          <div className="founder-card">
            <Quote className="text-[#ef6737]" size={38} />
            <blockquote>The future belongs to those who combine ambition with action. With AI and new technologies creating exciting opportunities, now is the best time to build a career.</blockquote>
            <div className="mt-8 flex items-center gap-4"><div className="avatar">AS</div><div><strong>Ankush Singla</strong><p>Stanford University, IIT Delhi | ex-Facebook, ex-Amazon</p></div></div>
          </div>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[[GraduationCap,"Industry-Recognized Certification"],[Code2,"Real-World Projects"],[Users,"Live Mentorship"],[BriefcaseBusiness,"Career Support"]].map(([Icon, title]) => (
            <div className="impact-feature" key={title}><Icon/><span>{title}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1120px] px-5">
        <p className="section-kicker">Learner outcomes</p>
        <h2 className="section-title mt-3">Our students loved an AI first certification</h2>
        <div className="mt-12 grid overflow-hidden rounded-xl border border-zinc-200 lg:grid-cols-[1.2fr_.8fr]">
          <div className="p-7 md:p-12">
            <div className="flex gap-1 text-[#ef6737]">{[1,2,3,4,5].map(item => <Star key={item} fill="currentColor" size={18} />)}</div>
            <blockquote className="mt-7 text-2xl font-medium leading-10 text-zinc-800">&ldquo;{testimonial[2]}&rdquo;</blockquote>
            <div className="mt-8"><strong className="text-lg">{testimonial[0]}</strong><p className="text-sm text-zinc-500">{testimonial[1]}</p></div>
            <div className="mt-8 flex gap-3">{testimonials.map((item, index) => <button key={item[0]} onClick={() => setActive(index)} className={`h-2 rounded-full ${active === index ? "w-10 bg-[#ef6737]" : "w-2 bg-zinc-300"}`} aria-label={`Show ${item[0]}'s testimonial`} />)}</div>
          </div>
          <div className="testimonial-video">
            <div className="video-person">{testimonial[0].split(" ").map(part => part[0]).join("")}</div>
            <button aria-label="Play testimonial"><CirclePlay size={58} /></button>
            <span>Watch video</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="community-section py-24 text-white">
      <div className="mx-auto max-w-[1120px] px-5">
        <div className="max-w-3xl">
          <p className="section-kicker text-orange-300">Beyond the classroom</p>
          <h2 className="section-title mt-3 text-white">Access CN&apos;s premium student community, the 10X Club</h2>
          <p className="mt-5 max-w-xl leading-7 text-zinc-300">Network with ambitious peers, attend workshops, join hackathons and learn directly from industry leaders.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="community-card"><Users/><h3>Weekly talks with CXOs</h3><p>Interact with top talent and decision-makers from leading companies.</p></div>
          <div className="community-card"><Code2/><h3>Workshops, Hackathons and more</h3><p>Build with peers, test your skills and continuously improve your craft.</p></div>
        </div>
        <p className="mt-14 text-xs font-bold tracking-[.22em] text-orange-300">COMMUNITY EXCLUSIVE</p>
        <div className="mt-5 flex gap-4 overflow-x-auto pb-4">
          {["Dhiraj Naik","Deepak Chandani","Arjun Malhotra","Shalini Goyal","Paul Hunkin"].map((name, index) => (
            <div className="speaker-card" key={name}><div className="speaker-avatar">{name.split(" ").map(n=>n[0]).join("")}</div><strong>{name}</strong><span>{index % 2 ? "Chief Data Officer" : "Head of Analytics"}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustAndNews() {
  return (
    <>
      <section className="bg-[#f7f7f5] py-24">
        <div className="mx-auto max-w-[1120px] px-5">
          <div className="cta-band">
            <div><p className="text-sm font-semibold text-orange-200">Your next chapter starts here</p><h2>Are you ready to transform your career?</h2></div>
            <button>Explore our courses now <ArrowRight size={18} /></button>
          </div>
          <h2 className="section-title mt-24">In The News</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {[
              ["InfoEdge x Coding Ninjas", "Coding Ninjas becomes a subsidiary under the InfoEdge group."],
              ["Upskilling 1L+ students", "An unconventional approach that helps professionals accelerate salary growth."],
              ["Employability in the AI era", "Why continuous upskilling matters more than ever for technology careers."]
            ].map(([title, copy], index) => (
              <article className="news-card" key={title}><span>0{index+1}</span><h3>{title}</h3><p>{copy}</p><a href="#home">Read story <ArrowRight size={15}/></a></article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[1120px] gap-12 px-5 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div><p className="section-kicker">Trusted by learners</p><h2 className="section-title mt-3">1,50,000+ alumni from 1,100+ companies and 4,400+ colleges</h2></div>
          <div className="grid grid-cols-3 gap-3">
            {[["4.9","50+ reviews"],["4.6","2,000+ reviews"],["4.7","10,000+ reviews"]].map(([rating,reviews]) => (
              <div className="rating-card" key={rating}><Star fill="currentColor"/><strong>{rating}</strong><span>{reviews}</span></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-white">
      <div className="mx-auto max-w-[1120px] px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Brand />
            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400">Building job-ready technology careers with structured learning, expert mentorship and AI-powered education.</p>
            <div className="mt-6 space-y-2 text-sm text-zinc-300"><p>1800-123-3598</p><p>contact@codingninjas.com</p><p>Gurugram, Haryana</p></div>
            <div className="mt-6 flex gap-3"><span className="social"><Linkedin size={18}/></span><span className="social"><Github size={18}/></span><span className="social"><MessageCircle size={18}/></span></div>
          </div>
          {[
            ["Coding Ninjas", ["Careers","Privacy policy","Terms & conditions","Pricing & refund","Press release"]],
            ["Products", ["Job Bootcamp","Code 360","Professional Certifications","Student Certifications"]],
            ["Community", ["10X Club","Student Chapters","Hire from us","Review"]]
          ].map(([title, links]) => (
            <div key={title}><h3 className="font-bold">{title}</h3><ul className="mt-5 space-y-3 text-sm text-zinc-400">{links.map(link => <li key={link}><a href="#home">{link}</a></li>)}</ul></div>
          ))}
        </div>
        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-zinc-500">Copyright © Sunrise Mentors Pvt. Ltd. Educational frontend clone.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Courses />
      <Projects />
      <AiLearning />
      <CareerImpact />
      <Testimonials />
      <Community />
      <TrustAndNews />
      <Footer />
    </main>
  );
}
