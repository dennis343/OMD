"use client";

import { useCallback, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import Audience from "./components/Audience";
import Method from "./components/Method";
import Offers from "./components/Offers";
import Anywhere from "./components/Anywhere";
import Pro from "./components/Pro";
import Finder from "./components/Finder";
import Proof from "./components/Proof";
import Jenny from "./components/Jenny";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Selector from "./components/Selector";
import StickyHelp from "./components/StickyHelp";

export default function Home() {
  const [selectorOpen, setSelectorOpen] = useState(false);
  const openSelector = useCallback(() => setSelectorOpen(true), []);
  const closeSelector = useCallback(() => setSelectorOpen(false), []);

  return (
    <>
      <Nav onOpenSelector={openSelector} />
      <main id="main">
        <Hero onOpenSelector={openSelector} />
        <Pillars />
        <Audience />
        <Method />
        <Offers onOpenSelector={openSelector} />
        <Anywhere onOpenSelector={openSelector} />
        <Pro />
        <Finder onOpenSelector={openSelector} />
        <Proof />
        <Jenny />
        <FAQ />
        <FinalCTA onOpenSelector={openSelector} />
      </main>
      <Footer />
      <Selector open={selectorOpen} onClose={closeSelector} />
      <StickyHelp onOpenSelector={openSelector} selectorOpen={selectorOpen} />
    </>
  );
}
