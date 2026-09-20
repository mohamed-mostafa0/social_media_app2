"use client";

import { LeftSidebar } from "./LeftSidebar";
import { RightSidebar } from "./RightSidebar";

interface FeedLayoutProps {
  children: React.ReactNode;
}

export function FeedLayout({ children }: FeedLayoutProps) {
  return (
    <div className="max-w-[1600px] mx-auto min-h-screen bg-white flex">
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
  );
}
