import EmailSection from "@/components/EmailSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import AboutSectionWrapper from "@/components/AboutWrapper";
import ProjectSection from "@/components/ProjectSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#272727]   ">
      <NavBar />
      <div className="container mx-auto lg:px-10 px-6 py-[100px] ">
        <HeroSection />
        <AboutSectionWrapper />
        <ProjectSection />
        <EmailSection />
      </div>
      <FooterSection />
    </main>
  );
}
