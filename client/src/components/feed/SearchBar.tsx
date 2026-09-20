"use client";

import { FiSearch, FiPlus, FiMic } from "react-icons/fi";
import { Button } from "../ui/Button";

export function SearchBar() {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <FiSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-11 pr-10 py-3 bg-gray-50 border-transparent rounded-full text-sm placeholder-gray-500 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-colors outline-none shadow-sm"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
          <FiMic className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
        </div>
      </div>
      
      <Button variant="primary" className="rounded-full px-6 shadow-md shadow-blue-500/30">
        <FiPlus className="w-5 h-5 mr-2" />
        Create new post
      </Button>
    </div>
  );
}
