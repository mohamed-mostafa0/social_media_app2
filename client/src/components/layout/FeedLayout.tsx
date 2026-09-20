"use client";

import { LeftSidebar } from "./LeftSidebar";
import { RightSidebar } from "./RightSidebar";
import { TopNavbar } from "./TopNavbar";

interface FeedLayoutProps {
  children: React.ReactNode;
}

export function FeedLayout({ children }: FeedLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <TopNavbar />
      
      <div className="max-w-[1600px] w-full mx-auto flex-1 flex">
        <div className="hidden lg:block flex-shrink-0">
          <LeftSidebar />
        </div>

        <div className="flex-1 min-w-0 overflow-y-auto relative">
          {children}
        </div>

        <div className="hidden xl:block flex-shrink-0">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
