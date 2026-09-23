"use client";

import { FaInstagram, FaDribbble, FaBehance, FaLinkedinIn } from "react-icons/fa";
import { SocialLink } from "../types/profile.types";

interface ProfileSocialLinksProps {
  socials: SocialLink[];
}

export function ProfileSocialLinks({ socials }: ProfileSocialLinksProps) {
  const getIcon = (platform: SocialLink["platform"]) => {
    switch (platform) {
      case "Instagram":
        return <FaInstagram className="w-4 h-4 text-pink-500" />;
      case "Dribbble":
        return <FaDribbble className="w-4 h-4 text-rose-500" />;
      case "Behance":
        return <FaBehance className="w-4 h-4 text-blue-600" />;
      case "LinkedIn":
        return <FaLinkedinIn className="w-4 h-4 text-blue-700" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100">
      <div className="space-y-3.5">
        {socials.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 text-xs sm:text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors group cursor-pointer"
          >
            <div className="w-5 h-5 flex items-center justify-center transition-transform group-hover:scale-110">
              {getIcon(link.platform)}
            </div>
            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
              {link.platform}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
