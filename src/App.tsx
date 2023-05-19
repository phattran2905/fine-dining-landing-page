import About from './scenes/About'
import Hero from './scenes/Hero'
import Navbar from './scenes/Navbar'

function App() {

  return (
    <div className='app bg-black w-full'>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
