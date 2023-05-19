import About from './scenes/About'
import Chef from './scenes/Chef'
import Hero from './scenes/Hero'
import IntroVideo from './scenes/IntroVideo'
import Navbar from './scenes/Navbar'
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
    </div>
  )
}

export default App
