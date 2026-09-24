"use client";

import { motion } from "framer-motion";
import { Avatar } from "../ui/Avatar";
import { FiEdit, FiSearch, FiMoreVertical, FiCalendar, FiGift } from "react-icons/fi";
import { useState } from "react";
import { FollowRequestsList, useFollowRequests } from "@/features/profile";

const messages = [
  { name: "Roger Korsgaard", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop", online: true },
  { name: "Terry Torff", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop", online: true },
  { name: "Angel Bergson", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop", online: true },
  { name: "Emerson Gouse", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop", online: true },
  { name: "Corey Baptista", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop", online: true },
  { name: "Zain Culhane", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop", online: true },
  { name: "Randy Lipshutz", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop", online: true },
  { name: "Craig Botosh", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", online: true },
];

const events = [
  { title: "10 Events Invites", icon: FiCalendar },
  { title: "Design System Collaboration", subtitle: "Thu - Harpoon Mall, YK", icon: FiCalendar },
  { title: "Web Dev 2.0 Meetup", subtitle: "Yoshkar-Ola, Russia", icon: FiCalendar },
  { title: "Prada's Invitation Birthday", subtitle: "Sat - Grand Hotel", icon: FiGift },
];

export function RightSidebar() {
  const [activeTab, setActiveTab] = useState("Primary");
  const { data: requests = [] } = useFollowRequests();

  return (
    <aside className="w-80 h-[calc(100vh-65px)] sticky top-[65px] flex flex-col pt-6 pb-4 pl-6 overflow-y-auto scrollbar-hide">
      
      <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm border border-gray-100 flex-1 flex flex-col min-h-0">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-900">
            {activeTab === "Requests" ? "Follow Requests" : "Messages"}
          </h3>
          <button className="text-gray-400 hover:text-gray-900 transition-colors">
            <FiEdit className="w-4 h-4" />
          </button>
        </div>

        {activeTab !== "Requests" && (
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-9 pr-3 py-2 bg-gray-50 border-transparent rounded-xl text-xs placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-colors outline-none"
              placeholder="Search"
            />
          </div>
        )}

        <div className="flex gap-4 border-b border-gray-100 mb-4 text-xs font-semibold">
          <button 
            onClick={() => setActiveTab("Primary")}
            className={`pb-2 transition-colors relative ${activeTab === "Primary" ? "text-gray-900" : "text-gray-400 hover:text-gray-600"}`}
          >
            Primary
            {activeTab === "Primary" && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />}
          </button>
          <button 
            onClick={() => setActiveTab("General")}
            className={`pb-2 transition-colors relative ${activeTab === "General" ? "text-gray-900" : "text-gray-400 hover:text-gray-600"}`}
          >
            General
            {activeTab === "General" && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />}
          </button>
          <button 
            onClick={() => setActiveTab("Requests")}
            className={`pb-2 transition-colors relative flex items-center gap-1.5 cursor-pointer ${
              activeTab === "Requests" ? "text-blue-600 font-bold" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <span>Requests</span>
            {requests.length > 0 && (
              <span className="px-1.5 py-0.5 bg-blue-100 text-blue-600 text-[10px] font-bold rounded-full">
                {requests.length}
              </span>
            )}
            {activeTab === "Requests" && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide space-y-4">
          {activeTab === "Requests" ? (
            <FollowRequestsList compact />
          ) : (
            messages.map((msg, i) => (
              <motion.div 
                key={msg.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <Avatar size="sm" src={msg.avatar} online={msg.online} />
                <p className="text-xs font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                  {msg.name}
                </p>
              </motion.div>
            ))
          )}
        </div>
        
        {activeTab !== "Requests" && (
          <button className="text-xs font-semibold text-gray-500 mt-4 text-left hover:text-gray-800 transition-colors pt-2 border-t border-gray-50">
            View All
          </button>
        )}
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex-shrink-0">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-900">Events</h3>
          <button className="text-gray-400 hover:text-gray-900 transition-colors">
            <FiMoreVertical className="w-4 h-4" />
          </button>
        </div>

        <ul className="space-y-4">
          {events.map((event, i) => (
            <li key={i} className="flex gap-3 cursor-pointer group">
              <event.icon className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0 group-hover:text-blue-500 transition-colors" />
              <div>
                <p className="text-xs font-semibold text-gray-900">{event.title}</p>
                {event.subtitle && <p className="text-[10px] text-gray-500 mt-0.5">{event.subtitle}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>

    </aside>
  );
}
