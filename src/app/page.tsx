import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { Benefits } from "@/components/benefits/benefits";
import { HowItWorks } from "@/components/how-it-works/how-it-works";
import { Plans } from "@/components/plans/plans";
import { Coverage } from "@/components/coverage/coverage";
import { WhyUs } from "@/components/why-us/why-us";
import { FAQ } from "@/components/faq/faq";
import { CTA } from "@/components/cta/cta";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Plans />
        <Coverage />
        <WhyUs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
