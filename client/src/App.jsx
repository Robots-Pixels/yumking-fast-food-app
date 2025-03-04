import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Menu from './Pages/Menu.jsx'
import Gallery from './Pages/Gallery.jsx'
import Contact from './Pages/Contact.jsx'
import Booking from './Pages/Booking.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import SignIn from './Pages/SignIn.jsx'
import SignUp from './Pages/SignUp.jsx'

export default function App() {
  return (
    <BrowserRouter>
    
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}
