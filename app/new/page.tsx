"use client";

import { useCallback, useState } from "react";
import Nav from "../components/Nav";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Method from "./components/Method";
import Offers from "../components/Offers";
import Anywhere from "../components/Anywhere";
import Pro from "../components/Pro";
import Band from "./components/Band";
import Audience from "./components/Audience";
import Jenny from "./components/Jenny";
import Proof from "./components/Proof";
import FAQ from "../components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "../components/Footer";
import Selector from "../components/Selector";
import StickyHelp from "./components/StickyHelp";
import SubNav from "./components/SubNav";
import { FxBoot } from "./components/Fx";

export default function Home() {
  const [selectorOpen, setSelectorOpen] = useState(false);
  const openSelector = useCallback(() => setSelectorOpen(true), []);
  const closeSelector = useCallback(() => setSelectorOpen(false), []);

  return (
    <>
      <FxBoot />
      <Nav onOpenSelector={openSelector} />
      <SubNav />
      <main id="main">
        <Hero onOpenSelector={openSelector} />
        <Story />
        <Method />
        <Offers onOpenSelector={openSelector} />
        <Anywhere onOpenSelector={openSelector} />
        <Pro />
        <Band />
        <Audience onOpenSelector={openSelector} />
        <Jenny />
        <Proof />
        <FAQ />
        <FinalCTA onOpenSelector={openSelector} />
      </main>
      <Footer />
      <Selector open={selectorOpen} onClose={closeSelector} />
      <StickyHelp onOpenSelector={openSelector} selectorOpen={selectorOpen} />
    </>
  );
}
