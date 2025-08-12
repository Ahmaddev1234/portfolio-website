import About from "@/modules/home/ui/components/About-section/About"
import HeroSection from "@/modules/home/ui/components/Hero-section/Hero-section"
import NavbarSidebar from "@/modules/home/ui/components/Navbar-sidebar"
import Skills from "@/modules/home/ui/components/Skill-section/Skills"
function layout() {
  return (
    <div>
      <NavbarSidebar/>
      <HeroSection/>
      <About/>
      <Skills/>
    </div>
  )
}

export default layout
