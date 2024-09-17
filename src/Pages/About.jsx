import AboutHero from "../Components/AboutHero/AboutHero"
import AboutUsSection from "../Components/AboutUsSection/AboutUsSection"
import CreatingConsole from "../Components/CreatingConsole/CreatingConsole"
import Mission from "../Components/Mission/Mission"
import OurApproach from "../Components/OurApproach/OurApproach"
import Partners from "../Components/Partners/Partners"
import Projects from "../Components/Projects/Projects"
import Team from "../Components/Team/Team"

const About = () => {
  return (
    <div>
      <AboutHero />
      <div className="px-[160px]">
        <AboutUsSection />
        <Mission />
        <CreatingConsole />
        <Team />
        <Projects />
        <OurApproach />
        <Partners />
      </div>
    </div>
  )
}

export default About
