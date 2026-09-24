"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FollowRequestsList, useFollowRequests } from "@/features/profile";
import { FiUserCheck, FiUsers } from "react-icons/fi";

export default function FriendsPage() {
  const [activeTab, setActiveTab] = useState<"requests" | "friends">("requests");
  const { data: requests = [] } = useFollowRequests();

  return (
    <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-2xl p-6 mb-6 shadow-xs border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <FiUsers className="w-6 h-6 text-blue-600" />
            <span>Connections & Requests</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Manage your incoming follow requests and social connections.
          </p>
        </div>

        <div className="flex bg-gray-100/80 p-1 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("requests")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "requests"
                ? "bg-white text-gray-900 shadow-xs"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <span>Follow Requests</span>
            {requests.length > 0 && (
              <span className="px-1.5 py-0.2 bg-blue-100 text-blue-600 text-[10px] font-bold rounded-full">
                {requests.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("friends")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "friends"
                ? "bg-white text-gray-900 shadow-xs"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <span>Connected</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-xs border border-gray-100">
        {activeTab === "requests" ? (
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
              <h2 className="text-sm font-bold text-gray-900">
                Pending Requests ({requests.length})
              </h2>
              <span className="text-xs text-gray-400">
                People who requested to follow your private profile
              </span>
            </div>
            <FollowRequestsList compact={false} />
          </div>
        ) : (
          <div className="py-12 text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mb-3">
              <FiUserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-gray-800">Your Connected Network</h3>
            <p className="text-xs text-gray-400 mt-1 max-w-sm">
              All your approved followers and the people you follow are visible on your profile page.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
