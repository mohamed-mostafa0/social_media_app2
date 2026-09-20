"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Avatar } from "../ui/Avatar";
import { FiPlus } from "react-icons/fi";

const stories = [
  { name: "Gladys", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop" },
  { name: "Kristin", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" },
  { name: "Priscilla", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop" },
  { name: "Connie", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop" },
  { name: "Brandie", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop" },
  { name: "Lily", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop" },
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="mb-10 overflow-hidden" ref={containerRef}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Stories</h2>
        <button className="text-sm font-medium text-blue-600 hover:underline">Watch all</button>
      </div>

      <motion.div 
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group">
          <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center bg-white group-hover:bg-gray-50 transition-colors shadow-sm">
            <FiPlus className="w-6 h-6 text-gray-400" />
          </div>
          <span className="text-xs font-semibold text-gray-900">Add story</span>
        </motion.div>

        {stories.map((story, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants} 
            className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 transition-transform group-hover:scale-105">
              <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-white">
                <img src={story.avatar} alt={story.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="text-xs font-semibold text-gray-700">{story.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
