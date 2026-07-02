import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, GraduationCap } from 'lucide-react';

const Counter = ({ end, duration = 2, label, icon: Icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(easeProgress * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <div className="flex flex-col items-center p-6 text-center">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
        <Icon size={32} />
      </div>
      <h3 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-2">
        {count}{end > 50 ? '+' : ''}
      </h3>
      <p className="text-gray-600 font-medium uppercase tracking-wide text-sm">{label}</p>
    </div>
  );
};

const Highlights = () => {
  return (
    <section className="py-16 bg-white relative z-20 -mt-10 mx-4 md:mx-auto max-w-6xl rounded-2xl premium-shadow border border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter end={40} label="Years Legacy" icon={Award} />
          <Counter end={3} label="Sections (Pri/Sec/Jr)" icon={BookOpen} />
          <Counter end={2} label="Mediums (Hin/Eng)" icon={Users} />
          <Counter end={10000} label="Alumni" icon={GraduationCap} />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
