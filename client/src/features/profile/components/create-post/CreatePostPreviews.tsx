"use client";

import { FiX } from "react-icons/fi";
import { ImagePreview } from "../../hooks/useCreatePostForm";

interface CreatePostPreviewsProps {
  previews: ImagePreview[];
  onRemove: (index: number) => void;
  disabled?: boolean;
}

export function CreatePostPreviews({
  previews,
  onRemove,
  disabled = false,
}: CreatePostPreviewsProps) {
  if (previews.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
      {previews.map((preview, idx) => (
        <div
          key={idx}
          className="relative group rounded-xl overflow-hidden aspect-video bg-gray-100 border border-gray-200"
        >
          <img
            src={preview.url}
            alt={`Preview ${idx + 1}`}
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={() => onRemove(idx)}
            disabled={disabled}
            className="absolute top-1.5 right-1.5 p-1 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
            title="Remove image"
          >
            <FiX className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}
