import { motion } from "motion/react";
import { Calendar, User, Phone, MapPin, ChevronRight, MessageSquare } from "lucide-react";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-brand-cream pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-warm overflow-hidden border border-brand-earth/10"
        >
          <div className="grid md:grid-cols-5 h-full">
            <div className="md:col-span-2 bg-brand-forest p-10 text-white flex flex-col justify-between">
              <div>
                <h1 className="font-serif text-3xl font-bold mb-6">Schedule Your Free Care Consultation</h1>
                <p className="text-brand-cream/80 mb-8 leading-relaxed">
                  During our 60-minute visit, a Care Coordinator will:
                </p>
                <ul className="space-y-4">
                  {[
                    "Identify home safety risks",
                    "Asses care equipment needs",
                    "Create a custom care plan",
                    "Answer all family questions"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm font-medium">
                      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                        <ChevronRight className="w-3 h-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-8 border-t border-white/20">
                <p className="text-xs uppercase tracking-widest font-bold opacity-60 mb-2">Need Immediate Help?</p>
                <p className="text-xl font-bold">(555) 0123-0456</p>
              </div>
            </div>

            <div className="md:col-span-3 p-10">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-forest focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <input 
                        type="tel" 
                        placeholder="(000) 000-0000" 
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-forest focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Loved One's Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="City or County" 
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-forest focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-2">How can we help?</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-gray-400" />
                    <textarea 
                      rows={4} 
                      placeholder="Tell us a little about your situation..." 
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-forest focus:outline-none"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-brand-earth text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-brand-forest transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" /> Request Consultation Appointment
                </button>
                
                <p className="text-center text-xs text-gray-400">
                  By submitting, you agree to be contacted by a Care Coordinator. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
