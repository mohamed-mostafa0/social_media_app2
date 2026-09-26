"use client";

import { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import { useAuthStore } from "@/features/auth/stores/auth.store";
import { CreatePostPayload, useAddPost } from "@/features/posts";

export interface ImagePreview {
  file: File;
  url: string;
}

interface UseCreatePostFormOptions {
  onPost?: (content: string) => void;
}

export function useCreatePostForm({ onPost }: UseCreatePostFormOptions = {}) {
  const user = useAuthStore((state) => state.user);
  const { mutate: addPost, isPending } = useAddPost();

  const [isExpanded, setIsExpanded] = useState(false);
  const [previews, setPreviews] = useState<ImagePreview[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    return () => {
      previews.forEach((p) => URL.revokeObjectURL(p.url));
    };
  }, [previews]);

  const formik = useFormik<CreatePostPayload>({
    initialValues: {
      describtion: "",
      attachments: [],
      ownerId: user?._id,
      allowComments: true,
      tags: [],
    },
    onSubmit: (values, { resetForm }) => {
      const trimmedDescription = values.describtion.trim();

      if (!trimmedDescription && previews.length === 0) {
        return;
      }

      setErrorMessage(null);

      if (previews.length > 0) {
        const formData = new FormData();
        formData.append("describtion", trimmedDescription);
        formData.append("allowComments", String(values.allowComments ?? true));

        if (values.tags && values.tags.length > 0) {
          values.tags.forEach((tag) => formData.append("tags", tag));
        }

        previews.forEach((p) => {
          formData.append("images", p.file);
        });

        addPost(formData, {
          onSuccess: () => {
            resetForm();
            previews.forEach((p) => URL.revokeObjectURL(p.url));
            setPreviews([]);
            setIsExpanded(false);
            setErrorMessage(null);
            onPost?.(trimmedDescription);
          },
          onError: (err: any) => {
            const message =
              err?.response?.data?.message ||
              err?.message ||
              "Failed to create post. Please try again.";
            setErrorMessage(message);
          },
        });
      } else {
        addPost(
          {
            describtion: trimmedDescription,
            allowComments: values.allowComments ?? true,
            tags: values.tags ?? [],
            ownerId: user?._id,
          },
          {
            onSuccess: () => {
              resetForm();
              setIsExpanded(false);
              setErrorMessage(null);
              onPost?.(trimmedDescription);
            },
            onError: (err: any) => {
              const message =
                err?.response?.data?.message ||
                err?.message ||
                "Failed to create post. Please try again.";
              setErrorMessage(message);
            },
          }
        );
      }
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newFiles = Array.from(files);
    const newPreviews = newFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setPreviews((prev) => [...prev, ...newPreviews]);
    setIsExpanded(true);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removePreview = (indexToRemove: number) => {
    setPreviews((prev) => {
      const removed = prev[indexToRemove];
      if (removed) {
        URL.revokeObjectURL(removed.url);
      }
      return prev.filter((_, idx) => idx !== indexToRemove);
    });
  };

  const handleCancel = () => {
    formik.resetForm();
    previews.forEach((p) => URL.revokeObjectURL(p.url));
    setPreviews([]);
    setErrorMessage(null);
    setIsExpanded(false);
  };

  const canSubmit =
    (formik.values.describtion.trim().length > 0 || previews.length > 0) &&
    !isPending;

  const displayName = user?.firstName
    ? `${user.firstName} ${user.lastName || ""}`.trim()
    : "You";

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const expandAndFocus = () => {
    setIsExpanded(true);
    setTimeout(() => textareaRef.current?.focus(), 50);
  };

  return {
    user,
    displayName,
    formik,
    isExpanded,
    setIsExpanded,
    previews,
    errorMessage,
    setErrorMessage,
    isPending,
    canSubmit,
    fileInputRef,
    textareaRef,
    handleFileChange,
    removePreview,
    handleCancel,
    triggerFileInput,
    expandAndFocus,
  };
}
