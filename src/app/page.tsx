import { Hero } from "@/components/home/Hero";
import {
  WebhookInput,
  WebhookInputSection,
} from "@/components/home/WebhookInput";

export default function Home() {
  return (
    <main>
      <Hero />
      <WebhookInputSection />
    </main>
  );
}
