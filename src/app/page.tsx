import { Hero } from "@/components/home/Hero";
import { WebhookInputSection } from "@/components/home/WebhookInput";
import { RouteList } from "@/components/home/RouteList";
import { Submit } from "@/components/home/Submit";

export default function Home() {
  return (
    <main>
      <Hero />
      <WebhookInputSection />
      <RouteList />
      <Submit />
    </main>
  );
}
