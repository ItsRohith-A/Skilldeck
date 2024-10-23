import FeaturesTable from "@/components/features/FeaturesTable";
import TechnicalAspects from "@/components/features/TechnicalAspects";
import Banner from "@/components/home/Banner";
import BannerImage from "@/components/home/BannerImage";
import Benefit from "@/components/home/Benefit";
import Collaborative from "@/components/home/Collaborative";
import DemoVideo from "@/components/home/DemoVideo";
import EdtechSpace from "@/components/home/EdtechSpace";
import Faq from "@/components/home/Faq";
import Features from "@/components/home/Features";
import Founder from "@/components/home/Founder";
import FullyAutomated from "@/components/home/FullyAutomated";
import NewBanner from "@/components/home/NewBanner";
import OurClients from "@/components/home/OurClients";
import Pricing from "@/components/home/Pricing";
import StickyNavbar from "@/components/home/StickyNavbar";
import Unique from "@/components/home/Unique";
import BottomContent from "@/components/others/BottomContent";
import Footer from "@/components/others/Footer";
import NavBar from "@/components/others/NavBar";
import localFont from "next/font/local";
import Head from "next/head";

// const sans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <>
      <Head>
        <title>Fully Automated Platform For Training Companies | SkillDeck</title>
        <meta name="title" content="Fully Automated Platform For Training Companies | SkillDeck" />
        <meta name="description" content="Automate your marketing, sales, operations and various other functional departments at 5X times lesser cost and Skyrocket your leads and sales. 4X times faster growth & 6X higher conversions." />
      </Head>
      <NavBar />
      <NewBanner />
      <OurClients />
      {/* <BannerImage /> */}
      <StickyNavbar />
      <FullyAutomated />
      <Unique />
      <DemoVideo />
      <Collaborative />
      <EdtechSpace />
      <TechnicalAspects />
      {/* <Founder /> */}
      {/* <Features /> */}
      <Benefit />
      <Pricing />
      {/* <FeaturesTable /> */}
      {/* <BottomContent
        title1="What browsers are supported?"
        desc1="Our website is optimized for the latest versions of Chrome, Firefox, Safari, and Edge. Check our documentation for additional information."
        title2="How can I contact customer support?"
        desc2="Reach out to our dedicated support team via email at support@example.com or call our toll-free number at 1-800-123-4567 during business hours."
      /> */}

      <Faq />
      <Footer />
    </>
  );
}