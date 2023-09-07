import { Hero } from "@/components/home/Hero";
import { WebhookInputSection } from "@/components/home/WebhookInput";
import { RouteList } from "@/components/home/RouteList";

export default function Home() {
  return (
    <main>
      <Hero />
      <WebhookInputSection />
      <RouteList />
    </main>
  );
}
