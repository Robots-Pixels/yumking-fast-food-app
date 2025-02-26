import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faPhoneVolume,
  faClock,
  faSignOut,
  faSearch,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import BouncingArrow from "./BouncingArrow";
import SideMenu from "./SideMenu";

export default function Header() {

    const [clicked, setClicked] = useState(false);
    
    const toggleSideMenu = () => {
        setClicked(prev => !prev);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setClicked(false);
            }
        };

        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);

    }, []);

  return (
    <>
      <div className= {`fixed top-0 left-0 bg-black ${clicked ? "opacity-70" : "opacity-0"} w-full h-[100vh] wraper`}>
      </div>

      <SideMenu clicked = {clicked} setClicked={setClicked}/>

      <header className="sticky left-0 top-0  w-full bg-[#000000de] text-white overflow-hidden">
        <div className="flex justify-between items-center sm:w-7xl mx-auto sm:px-12 py-4 top-header">
          <div className="flex gap-5 top-left-links">
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
            <Link className="open-hours">
              {" "}
              <FontAwesomeIcon className="text-[#FFC107]" icon={faClock} />{" "}
              <span>Sun - Fri (08AM - 10PM)</span>
            </Link>
          </div>

          <div className="flex gap-5">
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

        <div className="flex justify-between items-center sm:w-7xl mx-auto px-4 sm:px-12 py-3 bottom-header">
          <div className="text-5xl text-[#FFC107] logo">
            <Link>YumKings</Link>
          </div>

          <div>
            <ul className="flex gap-12 menu-links">
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
            </ul>
          </div>

          <div className="flex gap-8">
            <button className="text-xl">
              {" "}
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <Link className="p-3 group bg-[#FFC107] rounded-3xl flex items-center gap-3 cta-button relative">
              <span className="absolute inset-0 bg-[#c1564c] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
              <span className="z-10">Book Now</span>
              <BouncingArrow />
            </Link>

            <button 
            onClick={toggleSideMenu}
            className="text-2xl cursor-pointer hamburger-menu z-30">
              <FontAwesomeIcon icon={faBarsStaggered} />
            </button>
          </div>
        </div>

      </header>
    </>
  );
}
