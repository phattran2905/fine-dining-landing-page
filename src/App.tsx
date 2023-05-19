import About from './scenes/About'
import Awards from './scenes/Awards'
import Chef from './scenes/Chef'
import Hero from './scenes/Hero'
import IntroVideo from './scenes/IntroVideo'
import Navbar from './scenes/Navbar'
import PhotoGallery from './scenes/PhotoGallery'
import TodaySpecial from './scenes/TodaySpecial'

function App() {

  return (
    <div className='app bg-black w-full'>
      <Navbar />
      <Hero />
      <About />
      <TodaySpecial />
      <Chef />
      <IntroVideo />
      <Awards />
      <PhotoGallery />
    </div>
  )
}

export default App
