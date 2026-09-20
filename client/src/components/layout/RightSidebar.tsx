"use client";

import { motion } from "framer-motion";
import { Avatar } from "../ui/Avatar";
import { Button } from "../ui/Button";
import { FiUserPlus } from "react-icons/fi";

const requests = [
  { name: "Lauralee Quintero", action: "wants to add you to friends", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80" },
  { name: "Brittni Landema", action: "wants to add you to friends", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80" },
];

const suggestions = [
  { name: "Chantal Shelburne", location: "Memphis, TN, US", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&q=80" },
  { name: "Marci Senter", location: "Newark, NJ, US", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&q=80", online: true },
  { name: "Janetta Rotolo", location: "Fort Worth, TX, US", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80" },
  { name: "Tyra Dhillon", location: "Springfield, MA, US", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&q=80" },
  { name: "Marielle Wigington", location: "Honolulu, HI, US", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&q=80", online: true },
];

export function RightSidebar() {
  return (
    <aside className="w-80 h-screen sticky top-0 flex flex-col pt-8 pb-4 pl-6 border-l border-gray-100 overflow-y-auto">
      
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-bold text-gray-900">Requests</h3>
          <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-0.5 rounded-full">2</span>
        </div>
        <div className="space-y-4">
          {requests.map((req, i) => (
            <motion.div 
              key={req.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-3"
            >
              <Avatar size="md" src={req.avatar} />
              <div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900 mr-1">{req.name}</span>
                  {req.action}
                </p>
                <div className="flex gap-3 mt-2">
                  <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">Accept</button>
                  <button className="text-sm font-semibold text-gray-400 hover:text-gray-600 transition-colors">Decline</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Suggestions for you</h3>
        <ul className="space-y-4">
          {suggestions.map((suggestion, i) => (
            <motion.li 
              key={suggestion.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Avatar size="md" src={suggestion.avatar} online={suggestion.online} />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{suggestion.name}</p>
                  <p className="text-xs text-gray-500">{suggestion.location}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="!p-2 text-blue-600 rounded-full hover:bg-blue-50">
                <FiUserPlus className="w-4 h-4" />
              </Button>
            </motion.li>
          ))}
        </ul>
        <button className="w-full text-center text-sm font-medium text-blue-600 mt-4 hover:underline">
          View All
        </button>
      </div>

      <div className="bg-gray-50 rounded-2xl p-4 mb-6 flex flex-col items-center relative overflow-hidden">
        <div className="flex -space-x-2 mb-3 z-10">
          {[1,2,3,4,5].map((num) => (
            <div key={num} className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 relative overflow-hidden">
              <img src={`https://images.unsplash.com/photo-${1500000000000 + num * 1000}?w=50&h=50&fit=crop`} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600 z-10">
            +
          </div>
        </div>
        <p className="text-xl font-bold text-gray-900 z-10">184.3K <span className="text-sm font-normal text-gray-500">Followers</span></p>
        <p className="text-xs text-gray-500 mt-1 z-10">Active now on your profile</p>
        
        <div className="absolute top-2 right-2 text-gray-200">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
        </div>
      </div>

      <div className="mt-auto pt-4 text-xs text-gray-400 flex flex-wrap gap-x-3 gap-y-2">
        <a href="#" className="hover:text-gray-600 transition-colors">About</a>
        <a href="#" className="hover:text-gray-600 transition-colors">Accessibility</a>
        <a href="#" className="hover:text-gray-600 transition-colors">Help Center</a>
        <a href="#" className="hover:text-gray-600 transition-colors">Privacy and Terms</a>
        <a href="#" className="hover:text-gray-600 transition-colors">Advertising</a>
        <a href="#" className="hover:text-gray-600 transition-colors">Business Services</a>
      </div>
    </aside>
  );
}
