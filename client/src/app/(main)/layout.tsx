import { FeedLayout } from "@/components/layout/FeedLayout";

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FeedLayout>{children}</FeedLayout>;
}
