import About from "@/modules/home/ui/components/About-section/About"
import HeroSection from "@/modules/home/ui/components/Hero-section/Hero-section"
import NavbarSidebar from "@/modules/home/ui/components/Navbar-sidebar"
import Portfolio from "@/modules/home/ui/components/Portfolio-section/Portfolio"
import Resume from "@/modules/home/ui/components/Resume-section/Resume"
import Services from "@/modules/home/ui/components/Services-section/Services"
import Skills from "@/modules/home/ui/components/Skill-section/Skills"
function layout() {
  return (
    <div>
      <NavbarSidebar/>
      <HeroSection/>
      <About/>
      <Skills/>
      <Resume/>
      <Services/>
      <Portfolio/>
    </div>
  )
}

export default layout
