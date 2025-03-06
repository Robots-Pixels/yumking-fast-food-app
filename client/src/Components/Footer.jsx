import React from 'react'
import bgFooter from "../assets/bgFooter.jpg"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='bg-cover bg-center w-full relative' style={{backgroundImage: `url(${bgFooter})`}}>
        
        <div className='absolute left-0 top-0 w-full h-full bg-black opacity-90 inset-0'></div>

        <div className='max-w-7xl px-12 mx-auto relative z-10'>
            
            <div className='py-20 text-white footer-top'>

                <div className="text-[#FFC107] logo">
                  <Link to={"/"} className='text-4xl sm:text-5xl md:text-6xl'>YumKings</Link>
                </div>

                <div className='quick-links'>

                  <h2 className='text-2xl footer-title mb-5 inline-block'>Quick Links</h2>

                  <ul className='flex flex-col gap-3 top-left-links'>
                    <Link to={"/about"}>About Us</Link>
                    <Link to={"/booking"}>Book A Table</Link>
                    <Link to={"/contact"}>Contact Us</Link>
                    <Link to={"/gallery "}>Gallery</Link>
                    <Link to={"/signin"}>SignIn</Link>
                  </ul>

                </div>

                <div className='opening-hours max-w-[350px]'>

                  <h2 className='text-2xl footer-title mb-5 inline-block'>Opening Hours</h2>

                  <div className='bg-[#383838] px-8 py-6 flex flex-col gap-4'>

                    <div className='flex justify-between gap-3 border-b-1 border-dashed border-white'>
                      <h2>Week</h2>
                      <h2>09:00 AM - 10:00 PM</h2>
                    </div>

                    <div className='flex justify-between border-b-1 border-dashed border-white'>
                      <h2>Sun</h2>
                      <h2>09:30 AM - 09:30 PM</h2>
                    </div>

                    <div className='flex justify-between border-b-1 border-dashed border-white'>
                      <h2>Mon</h2>
                      <h2>10:00 AM - 10:00 PM</h2>
                    </div>

                    <div className='flex justify-between border-b-1 border-dashed border-white'>
                      <h2>Tue</h2>
                      <h2>09:00 AM - 10:00 PM</h2>
                    </div>

                    <div className='flex justify-between'>
                      <h2>Sat</h2>
                      <h2 className='text-[#FFC107]'>Closed</h2>
                    </div>

                  </div>

                </div>

                <div className='get-in-touch'>

                  <h2 className='text-2xl footer-title mb-5 inline-block'>Get In Touch</h2>

                  <div className='flex flex-col gap-4'>

                    <div className='flex items-start gap-4'>
                      <div className='bg-[#FFC107] text-white p-2 flex items-center justify-center rounded-full'>
                        <FontAwesomeIcon className='text-xl' icon={faLocationArrow} />
                      </div>

                      <div>
                        <h2>Our Address</h2>
                        <h2 className='w-50'>9JM3+W4J, Sème Podji Sème, Podji</h2>
                      </div>

                    </div>

                    <div className='flex items-start gap-4'>
                      <div className='bg-[#FFC107] text-white p-2 flex items-center justify-center rounded-full'>
                        <FontAwesomeIcon className='text-xl' icon={faLocationArrow} />
                      </div>

                      <div>
                        <h2>Our Address</h2>
                        <h2 className='w-50'>9JM3+W4J, Sème Podji Sème, Podji</h2>
                      </div>

                    </div>

                    <div className='flex items-start gap-4'>
                      <div className='bg-[#FFC107] text-white p-2 flex items-center justify-center rounded-full'>
                        <FontAwesomeIcon className='text-xl' icon={faLocationArrow} />
                      </div>

                      <div>
                        <h2>Our Address</h2>
                        <h2 className='w-50'>9JM3+W4J, Sème Podji Sème, Podji</h2>
                      </div>

                    </div>

                  </div>

                </div>

            </div>

            <div className='text-white footer-bottom flex flex-col sm:flex-row items-center gap-5 sm:gap-0 justify-between py-6 border-t-2 border-dashed border-[#383838]'>
              <h2 className='text-center'>&copy; Copyright 2025 <Link to={"/"} className='text-[#FFC107]'>YumKings</Link> All Rights Reserved.</h2>

              <div className='flex gap-3'>
                <Link to={"https://github.com/Robots-Pixels"} >
                  <FaFacebook className='text-3xl text-[#FFC107]'/>
                </Link>

                <Link to={"https://github.com/Robots-Pixels"} >
                  <FaInstagram  className='text-3xl text-[#FFC107]'/>
                </Link>

                <Link to={"https://github.com/Robots-Pixels"} >
                  <FaLinkedin className='text-3xl text-[#FFC107]'/>
                </Link>

                <Link to={"https://github.com/Robots-Pixels"} >
                  <FaTwitter className='text-3xl text-[#FFC107]'/>
                </Link>
              </div>
            </div>

        </div>
    
    </footer>
  )
}
