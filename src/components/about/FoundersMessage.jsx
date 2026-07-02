import React from 'react';
import { motion } from 'framer-motion';

const FoundersMessage = () => {
  return (
    <section className="py-16 bg-[#FDFBF7] font-sans">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left Column: Founder Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 lg:col-start-1"
          >
            <div className="bg-[#781B1C] text-white rounded-2xl p-6 flex flex-col items-center relative shadow-2xl h-full mt-4 lg:mt-0">
              {/* Decorative Corner Ornaments */}
              <div className="absolute top-2 left-2 text-[#D4AF37] opacity-50">✦</div>
              <div className="absolute top-2 right-2 text-[#D4AF37] opacity-50">✦</div>
              <div className="absolute bottom-2 left-2 text-[#D4AF37] opacity-50">✦</div>
              <div className="absolute bottom-2 right-2 text-[#D4AF37] opacity-50">✦</div>

              <div className="relative w-48 h-48 mt-4 mb-8">
                {/* Outer White Border */}
                <div className="absolute inset-0 rounded-full border-4 border-white"></div>
                {/* Inner Gold Border */}
                <div className="absolute inset-[4px] rounded-full border-2 border-[#D4AF37]"></div>
                <img 
                  src="/founder.png" 
                  alt="R.S. Shrivastav" 
                  className="w-full h-full object-cover rounded-full p-[6px]"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'; }}
                />
                
                {/* Gold Ribbon Overlay */}
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-[110%] z-10">
                  <div className="bg-[#D4AF37] text-[#5A1011] font-bold text-xs py-2 px-4 text-center relative shadow-md uppercase tracking-wider font-sans whitespace-nowrap">
                    FOUNDER SINCE 1981
                    {/* Ribbon ends */}
                    <div className="absolute top-0 -left-2 border-t-[16px] border-t-[#D4AF37] border-l-[10px] border-l-transparent border-b-[16px] border-b-[#D4AF37] h-full"></div>
                    <div className="absolute top-0 -right-2 border-t-[16px] border-t-[#D4AF37] border-r-[10px] border-r-transparent border-b-[16px] border-b-[#D4AF37] h-full"></div>
                  </div>
                </div>
              </div>
              
              <h3 className="font-serif text-3xl font-bold mt-4 mb-1 text-center">R.S. Shrivastav</h3>
              <p className="text-[#D4AF37] font-serif text-xl italic mb-6">Founder</p>
              
              {/* Bottom Decorative Element */}
              <div className="w-16 h-[2px] bg-[#D4AF37] mb-1 relative">
                <div className="absolute left-1/2 -top-[3px] transform -translate-x-1/2 w-2 h-2 rounded-full border border-[#D4AF37] bg-[#781B1C]"></div>
              </div>
              <div className="w-12 h-[1px] bg-[#D4AF37] mb-4"></div>
            </div>
          </motion.div>

          {/* Middle Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
              <div className="text-[#D4AF37]">❖</div>
              <h4 className="text-[#D4AF37] font-bold tracking-[0.2em] text-sm uppercase">Founder</h4>
              <div className="text-[#D4AF37]">❖</div>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A237E] mb-2 leading-tight">
              A Vision That Built
            </h2>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#781B1C] mb-8 leading-tight">
              A Legacy of Excellence
            </h2>

            {/* Quote Block */}
            <div className="flex gap-4 mb-8">
              <span className="text-[#D4AF37] text-6xl font-serif leading-none h-8 block">“</span>
              <p className="text-xl md:text-2xl text-gray-800 font-medium italic mt-2 leading-snug">
                Education is the foundation upon which dreams are built and futures are shaped.
              </p>
              <span className="text-[#D4AF37] text-6xl font-serif leading-none h-8 block self-end mt-4">”</span>
            </div>

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed text-justify">
              <p>
                We established Shivam Vidya Mandir High School & Jr. College with the sole objective of providing the best possible education, leaving no stone unturned in nurturing every child's potential.
              </p>
              <p>
                One of the greatest gifts parents can give their children is a quality education. The true purpose of education is not merely to impart academic knowledge but also to instill values such as wisdom, compassion, courage, integrity, and responsibility.
              </p>
              <p>
                Everything we do is focused on the holistic development of our students. We believe that education extends beyond the classroom to include sports, arts and crafts, music, dance, and other co-curricular activities that help shape confident and well-rounded individuals.
              </p>
              <p>
                Our school encourages students to discover their unique strengths, embrace new challenges, and adapt to an ever-changing world. We are committed to providing the guidance, support, and opportunities they need to develop critical thinking, sound decision-making, and strong social skills.
              </p>
              <p>
                I wish Shivam Vidya Mandir High School & Jr. College continued growth and success as it reaches new milestones and greater heights in the years to come.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8">
              <h4 className="text-3xl font-serif italic text-[#781B1C] mb-1" style={{ fontFamily: "'Dancing Script', cursive" }}>
                R.S. Shrivastav
              </h4>
              <p className="text-gray-800 font-bold uppercase tracking-wider text-sm">Founder</p>
            </div>
          </motion.div>

          {/* Right Column: Co-Founder Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#FAF8F5] rounded-xl p-6 flex flex-col items-center border border-[#E8DCC4] shadow-[0_4px_20px_rgba(0,0,0,0.05)] h-full">
              
              <div className="relative w-40 h-40 mt-4 mb-6">
                <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37]"></div>
                <img 
                  src="/Founder2.png" 
                  alt="Mrs. Sheela Shrivastav" 
                  className="w-full h-full object-cover rounded-full p-2"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'; }}
                />
              </div>
              
              <h3 className="font-serif text-xl font-bold text-[#781B1C] mb-1 text-center">Mrs Sheela Shrivastav</h3>
              <p className="text-[#781B1C] font-medium text-sm mb-6 text-center">Co-Founder & Director</p>
              
              {/* Decorative Line */}
              <div className="w-full flex justify-center items-center gap-2 mb-6">
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                <div className="w-2 h-2 rounded-full border border-[#D4AF37]"></div>
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              </div>

              {/* Quote */}
              <div className="text-center relative px-2">
                <span className="text-[#D4AF37] text-4xl font-serif absolute -top-4 -left-2 opacity-50">“</span>
                <p className="text-sm text-gray-700 italic leading-relaxed relative z-10 px-2 font-medium">
                  Behind every successful institution is a strong belief in values, dedication, and the power of education.
                </p>
                <span className="text-[#D4AF37] text-4xl font-serif absolute -bottom-6 -right-2 opacity-50">”</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#FAF8F5] border border-[#E8DCC4] rounded-xl p-6 md:p-8 shadow-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E8DCC4]">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center px-2 pt-4 sm:pt-0">
              <div className="w-12 h-12 mb-3 bg-[#781B1C] rounded-full flex items-center justify-center text-white border-2 border-[#D4AF37]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">Established</p>
              <h4 className="text-2xl font-bold text-[#781B1C] mb-2 font-serif">1981</h4>
              <p className="text-xs text-gray-600">Over 40+ Years of Excellence</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center px-2 pt-4 sm:pt-0">
              <div className="w-12 h-12 mb-3 text-[#781B1C]">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">Legacy Of</p>
              <h4 className="text-2xl font-bold text-[#781B1C] mb-2 font-serif">40+</h4>
              <p className="text-xs text-gray-600">Years of Trust, Commitment & Service</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center px-2 pt-4 sm:pt-0">
              <div className="w-12 h-12 mb-3 text-[#1A237E]">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z"/></svg>
              </div>
              <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">Thousands Of</p>
              <h4 className="text-2xl font-bold text-[#781B1C] mb-2 font-serif">STUDENTS</h4>
              <p className="text-xs text-gray-600">Nurtured with Knowledge, Values & Discipline</p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center px-2 pt-4 sm:pt-0">
              <div className="w-12 h-12 mb-3 text-[#D4AF37]">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 0 0 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>
              </div>
              <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">Commitment To</p>
              <h4 className="text-2xl font-bold text-[#781B1C] mb-2 font-serif uppercase">Excellence</h4>
              <p className="text-xs text-gray-600">In Academics, Sports, Co-curricular & Ethics</p>
            </div>

            {/* Stat 5 */}
            <div className="flex flex-col items-center text-center px-2 pt-4 sm:pt-0">
              <div className="w-12 h-12 mb-3 text-[#781B1C]">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </div>
              <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">Strong Support Of</p>
              <h4 className="text-2xl font-bold text-[#781B1C] mb-2 font-serif uppercase">Parents</h4>
              <p className="text-xs text-gray-600">A Partnership That Builds the Future</p>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FoundersMessage;

