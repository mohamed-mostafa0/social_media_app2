import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  online?: boolean;
  hasStory?: boolean;
  className?: string;
}

export function Avatar({
  src,
  alt = "User Avatar",
  size = "md",
  online = false,
  hasStory = false,
  className = "",
}: AvatarProps) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-24 h-24",
  };

  const defaultSrc = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=300&h=300&fit=crop&q=80";
  const imageSrc = src || defaultSrc;

  return (
    <div className={`relative inline-block ${sizes[size]} ${className}`}>
      <div
        className={`w-full h-full rounded-full overflow-hidden ${
          hasStory ? "border-2 border-blue-500 p-[2px]" : ""
        }`}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-200">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      {online && (
        <span className="absolute bottom-0 right-0 block w-3 h-3 rounded-full bg-green-500 border-2 border-white" />
      )}
    </div>
  );
}
