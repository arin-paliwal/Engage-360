import Hero from "../components/landing/hero";
import Platform from "../components/landing/platform";
import Needs from "../components/landing/needs";
import Subscription from "../components/landing/subscription";
import FAQs from "../components/landing/faqs";
import React from "react";

const LazyFooter=React.lazy(()=>import('../components/landing/footer'))

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-[8rem]">
      <Hero />
      <Platform />
      <Needs />
      <Subscription />
      <FAQs />
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyFooter />
      </React.Suspense>
    </div>
  );
}
