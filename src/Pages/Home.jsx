import Courses from "../Components/Courses/Courses"
import Faq from "../Components/Faq/Faq"
import Hero from "../Components/Hero/Hero"
// import VideoReviewes from "../Components/VideoReviewes/VideoReviewes"


const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Courses />
      {/* <VideoReviewes /> */}
      <Faq />
    </div>
  )
}

export default Home
