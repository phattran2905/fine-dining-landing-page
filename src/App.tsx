import About from './scenes/About'
import Hero from './scenes/Hero'
import Navbar from './scenes/Navbar'
import TodaySpecial from './scenes/TodaySpecial'

function App() {

  return (
    <div className='app bg-black w-full'>
      <Navbar />
      <Hero />
      <About />
      <TodaySpecial />
    </div>
  )
}

export default App
