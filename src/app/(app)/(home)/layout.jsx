import About from "@/modules/home/ui/components/About-section/About"
import ContactUs from "@/modules/home/ui/components/Contact-us/ContactUs"
import Footer from "@/modules/home/ui/components/Footer-section/Footer"
import FrequentQuestions from "@/modules/home/ui/components/FrequentQuestions-section/FrequentQuestions"
import HeroSection from "@/modules/home/ui/components/Hero-section/Hero-section"
import NavbarSidebar from "@/modules/home/ui/components/Navbar-sidebar"
import Portfolio from "@/modules/home/ui/components/Portfolio-section/Portfolio"
import Resume from "@/modules/home/ui/components/Resume-section/Resume"
import Services from "@/modules/home/ui/components/Services-section/Services"
import Skills from "@/modules/home/ui/components/Skill-section/Skills"
import Testimonials from "@/modules/home/ui/components/Testimonials-section/Testimonials"
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
      <Testimonials/>
      <FrequentQuestions/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default layout
