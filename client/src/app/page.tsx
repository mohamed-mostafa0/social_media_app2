import { FeedLayout } from "@/components/layout/FeedLayout";
import { MainFeed } from "@/components/feed/MainFeed";

export default function Home() {
  return (
    <FeedLayout>
      <MainFeed />
    </FeedLayout>
  );
}
