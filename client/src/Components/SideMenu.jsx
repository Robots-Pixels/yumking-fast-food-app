import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faXmark,
  faPhoneVolume,
  faClock,
  faSignOut
} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import BouncingArrow from './BouncingArrow.jsx';

export default function SideMenu({clicked, setClicked}) {
  return (
      <div className={`fixed px-3 py-5 left-0 top-0 w-[80%] sm:w-[40%] h-full bg-white z-40 ${clicked ? "left-0 " : "left-[-100%]"} sidemenu`}>
        
        <div className='flex items-center justify-between mb-8'>
          <div className="text-5xl text-[#FFC107] logo">
              <Link>YumKings</Link>
          </div>

          <div 
          className='bg-[#FFC107] w-10 h-10 text-white text-2xl rounded-full flex items-center justify-center cursor-pointer hover:bg-[#c1564c] transition-all'
          onClick={() => {setClicked(false)}}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>

        <div className='flex flex-col gap-5'>

              <div className="flex flex-col gap-3 top-left-links border-b-2 border-dashed border-gray-700 pb-5">
                <Link>
                  {" "}
                  <FontAwesomeIcon
                    className="text-[#FFC107]"
                    icon={faEnvelope}
                  />{" "}
                  <span>info@example.com</span>
                </Link>

                <Link>
                  {" "}
                  <FontAwesomeIcon
                    className="text-[#FFC107]"
                    icon={faPhoneVolume}
                  />{" "}
                  <span>+229 40 82 04 93</span>
                </Link>

                <Link >
                  {" "}
                  <FontAwesomeIcon className="text-[#FFC107]" icon={faClock} />{" "}
                  <span>Sun - Fri (08AM - 10PM)</span>
                </Link>
              </div>

              <div className="flex flex-col gap-3 top-left-links border-b-2 border-dashed border-gray-700 pb-4">
                  <ul className="flex flex-col gap-4">
                    <li className="text-[#FFC107]">
                      <Link>Home</Link>
                    </li>
                    <li>
                      <Link>About</Link>
                    </li>
                    <li>
                      <Link>Menu</Link>
                    </li>
                    <li>
                      <Link>Gallery</Link>
                    </li>
                    <li>
                      <Link>Contact</Link>
                    </li>
                    <Link className="p-3 group bg-[#FFC107] rounded-3xl flex items-center gap-3 cta-button relative justify-center">
                        <span className="absolute inset-0 bg-[#c1564c] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
                        <span className="z-10">Book Now</span>
                        <BouncingArrow />
                    </Link>
                  </ul>
              </div>
            
              <div className="flex flex-col gap-6 top-left-links pb-5">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faSignOut} />
                      <Link className="login-button">Login</Link>
                    </div>
                    <div className="flex gap-5">
                      <span>Follow Us:</span>
                      <ul className="flex gap-4 items-center socials-links">
                        <li>
                          <Link>
                            {" "}
                            <FaFacebook />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link>
                            {" "}
                            <FaTwitter />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link>
                            {" "}
                            <FaInstagram />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link>
                            {" "}
                            <FaLinkedin />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link>
                            {" "}
                            <FaWhatsapp />{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
              </div>

        </div>

      </div>
  )
}
