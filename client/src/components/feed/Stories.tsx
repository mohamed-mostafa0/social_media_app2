"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiPlus } from "react-icons/fi";

const stories = [
  { name: "Your Story", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop", isUser: true },
  { name: "Justin Rosser", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop" },
  { name: "Davis Dorwart", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" },
  { name: "Randy Saris", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop" },
  { name: "Charlie Press", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop" },
  { name: "Zaire Herwitz", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop" },
  { name: "Talan Philips", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop" },
  { name: "Corey Gouse", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
];

export function Stories() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6 overflow-hidden" ref={containerRef}>
      <motion.div 
        className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-hide"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {stories.map((story, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants} 
            className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group"
          >
            <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] transition-transform group-hover:scale-105 ${
              story.isUser ? "border border-gray-200" : "bg-purple-600"
            }`}>
              <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-white">
                <img src={story.avatar} alt={story.name} className="w-full h-full object-cover" />
              </div>
              
              {story.isUser && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center text-white">
                  <FiPlus className="w-4 h-4" />
                </div>
              )}
            </div>
            <span className="text-[10px] sm:text-xs font-medium text-gray-600 text-center truncate w-16">{story.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
