import { useHotDoc } from "./lib/useHotDoc";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { About } from "./components/About";
import { Philosophy } from "./components/Philosophy";
import { Services } from "./components/Services";
import { WhatToExpect } from "./components/WhatToExpect";
import { SectionDivider } from "./components/SectionDivider";
import { Fees } from "./components/Fees";
import { Booking } from "./components/Booking";
import { Practice } from "./components/Practice";
import { Footer } from "./components/Footer";
import { MobileBookBar } from "./components/MobileBookBar";

export default function App() {
  useHotDoc();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Philosophy />
        <Services />
        <WhatToExpect />
        <SectionDivider />
        <Fees />
        <Booking />
        <Practice />
      </main>
      <Footer />
      <MobileBookBar />
    </>
  );
}
