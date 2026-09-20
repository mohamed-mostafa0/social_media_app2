"use client";

import { motion } from "framer-motion";
import { Avatar } from "../ui/Avatar";
import { 
  FiHome, 
  FiCompass, 
  FiStar, 
  FiSend, 
  FiBarChart2, 
  FiSettings 
} from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Feed", icon: FiHome, path: "/" },
  { name: "Explore", icon: FiCompass, path: "/explore" },
  { name: "My favorites", icon: FiStar, path: "/favorites" },
  { name: "Direct", icon: FiSend, path: "/direct" },
  { name: "Stats", icon: FiBarChart2, path: "/stats" },
  { name: "Settings", icon: FiSettings, path: "/settings" },
];

const contacts = [
  { name: "Julie Mendez", location: "Memphis, TN, US", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80", online: false },
  { name: "Marian Montgomery", location: "Newark, NJ, US", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80", online: true },
  { name: "Joyce Reid", location: "Fort Worth, TX, US", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&q=80", online: false },
  { name: "Alice Franklin", location: "Springfield, MA, US", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&q=80", online: false },
  { name: "Domingo Flores", location: "Honolulu, HI, US", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80", online: true },
];

export function LeftSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen sticky top-0 flex flex-col pt-8 pb-4 pr-6 border-r border-gray-100 overflow-y-auto">
      <div className="flex flex-col items-center mb-8">
        <Avatar size="xl" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80" className="mb-4 shadow-md" />
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-1">
          Cyndy Lillibridge
          <span className="text-blue-500 text-sm">✓</span>
        </h2>
        <p className="text-sm text-gray-500">Torrance, CA, United States</p>
        
        <div className="flex gap-4 mt-6 text-center">
          <div>
            <p className="text-lg font-bold text-gray-900">368</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Posts</p>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">184.3K</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Followers</p>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">1.04M</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Following</p>
          </div>
        </div>
      </div>

      <nav className="mb-10 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link href={item.path} key={item.name}>
              <motion.div
                whileHover={{ x: 4 }}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${
                  isActive 
                    ? "bg-blue-50 text-blue-600 font-medium" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-400"}`} />
                <span>{item.name}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto">
        <h3 className="text-lg font-bold text-gray-900 mb-4 px-4">Contacts</h3>
        <ul className="space-y-3">
          {contacts.map((contact, i) => (
            <motion.li 
              key={contact.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3">
                <Avatar size="md" src={contact.avatar} online={contact.online} />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{contact.name}</p>
                  <p className="text-xs text-gray-500">{contact.location}</p>
                </div>
              </div>
              <FiCompass className="w-4 h-4 text-gray-300" />
            </motion.li>
          ))}
        </ul>
        <button className="w-full text-center text-sm font-medium text-blue-600 mt-4 hover:underline">
          View All
        </button>
      </div>
    </aside>
  );
}
