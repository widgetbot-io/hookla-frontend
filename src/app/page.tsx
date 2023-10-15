import { Hero } from "@/components/Home/Hero";
import { WebhookInputSection } from "@/components/Home/WebhookInput";
import { RouteList } from "@/components/common/RouteList";
import { Submit } from "@/components/Home/Submit";

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
