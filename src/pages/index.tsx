import BookADemo from "@/components/home/BookADemo";
import BuiltForTrainers from "@/components/home/BuiltForTrainers";
import GameChanger from "@/components/home/GameChanger";
import HeroSection from "@/components/home/HeroSection";
import ProvenExperience from "@/components/home/ProvenExperience";
import RecentProjects from "@/components/home/RecentProjects";
import SkilldSolution from "@/components/home/SkilldSolution";
import StickyNavbar from "@/components/home/StickyNavbar";
import TheProblem from "@/components/home/TheProblem";
import WhatYouGet from "@/components/home/WhatYouGet";

import Footer from "@/components/others/Footer";
import NavBar from "@/components/others/NavBar";
import Head from "next/head";
// Force rebuild
export default function Home() {
  return (
    <>
      <Head>
        <title>Fully Automated Platform For Training Companies | SkillDeck</title>
        <meta name="title" content="Fully Automated Platform For Training Companies | SkillDeck" />
        <meta name="description" content="Automate your marketing, sales, operations and various other functional departments at 5X times lesser cost and Skyrocket your leads and sales. 4X times faster growth & 6X higher conversions." />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skilldeck.net/" />
        <meta property="og:title" content="Fully Automated Platform For Training Companies | SkillDeck" />
        <meta property="og:description" content="Automate your marketing, sales, operations and various other functional departments at 5X times lesser cost and Skyrocket your leads and sales. 4X times faster growth & 6X higher conversions." />
        <meta property="og:image" content="https://skilldeck.net/_next/static/media/img1.e9fe5ca3.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://skilldeck.net/" />
        <meta name="twitter:title" content="Fully Automated Platform For Training Companies | SkillDeck" />
        <meta name="twitter:description" content="Automate your marketing, sales, operations and various other functional departments at 5X times lesser cost and Skyrocket your leads and sales. 4X times faster growth & 6X higher conversions." />
        <meta name="twitter:image" content="https://skilldeck.net/_next/static/media/img1.e9fe5ca3.png" />
      </Head>

      <NavBar />

      <HeroSection />
      <TheProblem />
      <SkilldSolution />
      <WhatYouGet />
      <GameChanger />
      <BuiltForTrainers />
      <ProvenExperience />
      {/* <BannerImage /> */}
      {/* <StickyNavbar /> */}
      <StickyNavbar />

      <RecentProjects />

      <BookADemo />


      <Footer />
    </>
  );
}
