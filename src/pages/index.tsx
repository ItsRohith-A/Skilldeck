import TechnicalAspects from "@/components/features/TechnicalAspects";
import Benefit from "@/components/home/Benefit";
import Collaborative from "@/components/home/Collaborative";
import DemoVideo from "@/components/home/DemoVideo";
import EdtechSpace from "@/components/home/EdtechSpace";
import Faq from "@/components/home/Faq";
import FullyAutomated from "@/components/home/FullyAutomated";
import NewBanner from "@/components/home/NewBanner";
import OurClients from "@/components/home/OurClients";
import Pricing from "@/components/home/Pricing";
import StickyNavbar from "@/components/home/StickyNavbar";
import Unique from "@/components/home/Unique";
import Footer from "@/components/others/Footer";
import NavBar from "@/components/others/NavBar";
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
      <NewBanner />
      <div className="my-6 lg:my-20">
        <OurClients />
      </div>
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