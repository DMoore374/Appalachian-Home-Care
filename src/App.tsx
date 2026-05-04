import { motion } from "motion/react";
import { 
  Phone, 
  Calendar, 
  CheckCircle2, 
  Heart, 
  ShieldCheck, 
  Users, 
  Clock, 
  ChevronRight,
  Menu,
  X,
  MapPin,
  Star
} from "lucide-react";
import { useState, useEffect } from "react";

const SERVICES = [
  {
    title: "Personal Care",
    description: "Support with daily living, including bathing, dressing, and mobility to ensure safety and comfort.",
    icon: <Heart className="w-6 h-6 text-brand-primary" />,
    link: "/services/personal-care"
  },
  {
    title: "Companion Care",
    description: "Meaningful social interaction, light housekeeping, and meal preparation for a full life at home.",
    icon: <Users className="w-6 h-6 text-brand-primary" />,
    link: "/services/companion-care"
  },
  {
    title: "Respite Care",
    description: "Temporary relief for family caregivers, giving you peace of mind while we care for your loved ones.",
    icon: <Clock className="w-6 h-6 text-brand-primary" />,
    link: "/services/respite-care"
  },
  {
    title: "Specialized Support",
    description: "Expert care for Alzheimer's, Dementia, and post-hospitalization recovery transitions.",
    icon: <ShieldCheck className="w-6 h-6 text-brand-primary" />,
    link: "/services/specialized"
  }
];

const TRUST_LOGOS = [
  "Licensed by DOH",
  "BBB Accredited A+",
  "Vets First Partner",
  "Appalachian Chamber"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-charcoal overflow-x-hidden">
      {/* Top Utility Bar */}
      <div className="w-full bg-brand-primary text-white py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs tracking-widest font-medium uppercase">
        <span>AVAILABLE 24/7 FOR URGENT CARE NEEDS: (828) 555-0123</span>
        <div className="hidden md:flex space-x-6">
          <span className="opacity-80">Serving Asheville, Boone, & Hendersonville</span>
          <span className="opacity-80 font-bold">Licensed & Insured Home Care Provider</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`w-full px-4 md:px-8 py-6 flex justify-between items-center z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm sticky top-0 border-b border-brand-primary/10' : 'bg-white/50 border-b border-brand-primary/5'}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white rounded-tr-lg rounded-bl-lg rotate-45"></div>
          </div>
          <span className="text-xl font-serif font-bold tracking-tight text-brand-accent">
            Appalachian <span className="font-normal italic">Home Care</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest">
          <a href="#services" className="hover:text-brand-primary transition-colors">Services</a>
          <a href="#about" className="hover:text-brand-primary transition-colors">About Us</a>
          <a href="#careers" className="hover:text-brand-primary transition-colors">Careers</a>
          <button className="bg-brand-primary text-white px-8 py-3.5 rounded-full hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20">
            Schedule Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-brand-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b p-8 flex flex-col gap-6 md:hidden shadow-2xl z-50"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">Services</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">About Us</a>
            <a href="#careers" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">Careers</a>
            <button className="w-full bg-brand-primary text-white py-4 rounded-full font-bold text-lg">
              Start Your Care Plan
            </button>
          </motion.div>
        )}
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-4 md:px-8 py-12 md:py-20 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Content (3/5) */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-brand-primary font-serif italic text-xl mb-6 block">
                  Providing Peace of Mind at Home
                </span>
                <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-brand-accent mb-8">
                  Compassionate Care <br/>
                  <span className="italic">for the ones who <br className="hidden md:block"/>raised you.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-10 leading-relaxed">
                  Transitioning to home care is a big step. We provide the professional, reliable support your family needs to stay safe, healthy, and independent in the mountains we call home.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 mb-14">
                  <button className="bg-brand-primary text-white px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]">
                    Start Care Today
                  </button>
                  <button className="border-2 border-brand-primary text-brand-primary px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-primary/5 transition-all">
                    View Our Services
                  </button>
                </div>

                {/* Trust Signals */}
                <div className="flex flex-wrap gap-10 md:gap-14 border-t border-brand-primary/10 pt-10">
                  <div className="group">
                    <div className="text-3xl font-serif font-bold text-brand-accent">15+ Years</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mt-1">Local Community Service</div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold text-brand-accent">100%</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mt-1">Background Checked</div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold text-brand-accent">RN-Led</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mt-1">Clinical Oversight</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar Form (2/5) */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-10 rounded-[40px] shadow-organic border border-brand-primary/10 relative overflow-hidden h-fit"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cream rounded-bl-[100px] -mr-8 -mt-8 -z-10" />
                <h3 className="text-2xl font-serif font-bold mb-3 text-brand-accent">Get Help Quickly</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                  Tell us a little about your needs and a local Care Coordinator will reach out within 2 hours.
                </p>
                
                <form className="space-y-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-brand-primary px-0.5">Who needs care?</label>
                    <input 
                      type="text" 
                      placeholder="e.g., My Mother" 
                      className="w-full border-b border-gray-200 py-2.5 focus:outline-none focus:border-brand-primary text-sm bg-transparent transition-colors placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-brand-primary px-0.5">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="(555) 000-0000" 
                      className="w-full border-b border-gray-200 py-2.5 focus:outline-none focus:border-brand-primary text-sm bg-transparent transition-colors placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-brand-primary px-0.5">Type of Support</label>
                    <select className="w-full border-b border-gray-200 py-2.5 focus:outline-none focus:border-brand-primary text-sm bg-transparent transition-colors appearance-none cursor-pointer">
                      <option>Personal Care</option>
                      <option>Dementia/Alzheimer's</option>
                      <option>Respite care</option>
                      <option>Companion Care</option>
                    </select>
                  </div>
                  <button className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg mt-4 hover:bg-brand-secondary transition-all shadow-xl shadow-brand-primary/10">
                    Request a Free Care Plan
                  </button>
                </form>
                
                <div className="mt-10 pt-10 border-t border-dashed border-gray-100 flex items-center gap-5">
                  <div className="w-14 h-14 bg-brand-cream rounded-full flex items-center justify-center text-2xl text-brand-primary shrink-0">♥</div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-accent">Local Promise</p>
                    <p className="text-[11px] leading-relaxed text-gray-500 mt-0.5">
                      We are your neighbors. We treat your family with the same respect we give our own.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bottom Feature Bar */}
        <div className="w-full bg-white/40 px-4 md:px-8 py-10 border-y border-brand-primary/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-10 lg:gap-14">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></div>
                <span className="text-sm font-bold tracking-tight">Personal Care</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                <span className="text-sm font-bold tracking-tight">Companion Care</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                <span className="text-sm font-bold tracking-tight">Dementia Specialists</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                <span className="text-sm font-bold tracking-tight">Post-Hospitalization</span>
              </div>
            </div>
            <div className="text-[10px] font-black tracking-widest text-brand-primary underline underline-offset-8 cursor-pointer hover:text-brand-accent transition-colors">
              EXPLORE ALL CARE SERVICES →
            </div>
          </div>
        </div>

        {/* Problem Section (Redesigned) */}
        <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl relative">
                <img 
                   src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800" 
                   alt="Mountain landscape" 
                   className="w-full h-full object-cover grayscale opacity-80"
                   referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay" />
                <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur p-8 rounded-3xl shadow-xl">
                  <Star className="w-8 h-8 text-brand-primary mb-4 fill-brand-primary" />
                  <p className="italic font-serif text-xl text-brand-accent">"They took the time to understand my dad's routine. It wasn't just 'care'—it was friendship."</p>
                  <p className="mt-4 font-bold text-sm tracking-widest uppercase">— The Henderson Family</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10 leading-[1.2] text-brand-accent">
                Supporting the entire family, one neighbor at a time.
              </h2>
              <p className="text-lg text-gray-500 mb-12 leading-relaxed">
                Watching a parent struggle with daily tasks is hard. Feeling like you're failing to balance your life and their care is even harder. Whether you need help with bathing, laundry, or just someone to provide companionship, we're here to bridge the gap between their needs and your peace of mind.
              </p>
              <div className="space-y-8">
                {[
                  { title: "Avoid Burnout", text: "Restore your role as the son or daughter, not just the caregiver." },
                  { title: "Ensure Safety", text: "Professional eyes in the home to prevent falls and mishaps." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full border-2 border-brand-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid (Styled for Theme) */}
        <section id="services" className="py-24 bg-brand-accent text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div className="max-w-2xl">
                <span className="text-brand-primary uppercase tracking-[0.3em] font-bold text-[10px] mb-4 block">What We Do</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">Professional Services with a Personal Touch</h2>
              </div>
              <button className="border border-white/20 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-accent transition-all">
                Full Service Guide
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 p-10 rounded-[32px] border border-white/10 flex flex-col h-full hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-primary/10">
                    {/* Simplified Icons for High Contrast */}
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/60 text-sm mb-10 flex-grow leading-relaxed font-medium">{service.description}</p>
                  <div className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                    Discover More <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works (Waitlist Style) */}
        <section id="how-it-works" className="py-24 bg-brand-cream relative">
           <div className="max-w-7xl mx-auto px-4 md:px-8 bg-white border border-brand-primary/5 rounded-[60px] p-12 md:p-20 shadow-organic">
              <div className="text-center mb-20">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-brand-accent">Starting Care is Simple</h2>
                <p className="text-gray-400 max-w-xl mx-auto font-medium">We focus on removing the stress of the process so you can focus on being family.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-16 relative">
                {/* Connector Line */}
                <div className="hidden md:block absolute top-[60px] left-[20%] right-[20%] h-px border-t border-dashed border-brand-primary/30 z-0" />
                
                {[
                  { title: "Conversation", desc: "Speak with a local coordinator about your family's unique situation and goals." },
                  { title: "Consultation", desc: "A free in-home visit to assess safety, mobility, and personalized care needs." },
                  { title: "Peace of Mind", desc: "Matching with a compatible caregiver and beginning a structured care plan." }
                ].map((step, idx) => (
                  <div key={idx} className="text-center relative z-10 flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full bg-white border-2 border-brand-primary/10 flex items-center justify-center text-4xl font-serif italic text-brand-primary mb-8 shadow-inner">
                      {idx + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-brand-accent">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{step.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-brand-primary text-white pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
               <div className="w-12 h-12 border-2 border-white rounded-tr-xl rounded-bl-xl rotate-45 flex items-center justify-center">
                 <Heart className="w-6 h-6 -rotate-45" />
               </div>
               <span className="text-2xl font-serif font-bold tracking-tight">Appalachian <span className="font-normal italic opacity-80">Home Care</span></span>
            </div>
            <p className="text-white/60 text-lg max-w-md mb-10 leading-relaxed font-light">
               Since 2018, we've had the honor of helping families age gracefully in the mountains. We are your neighbors, your friends, and your partners in care.
            </p>
            <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase">
              <MapPin className="w-4 h-4 text-white" /> Serving Buncombe, Watauga, & Henderson Counties
            </div>
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold mb-8 italic">Company</h4>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Our Care Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join Our Care Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Referral Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Resources</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold mb-8 italic">Get in Touch</h4>
            <ul className="space-y-6 text-white/60 text-sm font-medium">
              <li>
                <div className="text-[10px] uppercase tracking-widest font-black text-white/40 mb-1">Direct Line</div>
                <div className="text-xl font-bold text-white">(828) 555-0123</div>
              </li>
              <li>
                <div className="text-[10px] uppercase tracking-widest font-black text-white/40 mb-1">Office Location</div>
                <div>123 Mountain View Ave, Suite 400<br/>Asheville, NC 28801</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 gap-6">
          <p>© 2026 Appalachian Home Care LLC. Neighbors Helping Neighbors.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Compliance</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (Mobile) */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <button className="bg-brand-primary text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center animate-bounce">
          <Phone className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

