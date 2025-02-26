import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Menu from './Pages/Menu.jsx'
import Gallery from './Pages/Gallery.jsx'
import Contact from './Pages/Contact.jsx'
import Booking from './Pages/Booking.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/booking' element={<Booking />} />

      </Routes>
    </BrowserRouter>
  )
}
