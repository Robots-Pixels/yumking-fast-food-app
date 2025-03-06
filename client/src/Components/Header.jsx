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
    const [scrolled, setScrolled] = useState(false);
    const [currentMenuLink, setCurrentMenuLink] = useState("Home");

    const toggleSideMenu = () => {
        setClicked(prev => !prev);
    }

    useEffect(() => {
      if (clicked){
        document.body.style.overflow = "hidden";
      }
      else{
        document.body.style.overflow = "auto";
      }
    }, [clicked])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setClicked(false);
            }
        };

        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);

    }, []);

    useEffect(() => {
      const handleHeaderSticky = () => {
        if (window.scrollY > 50){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleHeaderSticky);

      return () => window.removeEventListener("scroll", handleHeaderSticky);

    }, [])


  return (
    <>
      <div className= {`fixed ${clicked ? "z-20" : "-z-1"} top-0 left-0 bg-black ${clicked ? "opacity-70" : "opacity-0"} w-full h-[100vh] wraper`}>
      </div>

      <SideMenu clicked = {clicked} setClicked={setClicked}/>

      <header className={`${scrolled ? "bg-white sticky text-black shadow": "absolute text-white"} left-0 top-0 w-full overflow-hidden z-40`}>
        <div className={`justify-between items-center sm:w-7xl mx-auto sm:px-12 py-4 ${scrolled ? "hidden": "flex"} top-header`}>
          <div className="flex gap-5 top-left-links">
            <Link to={"mailto:otmartch23@gmail.com"}>
              {" "}
              <FontAwesomeIcon
                className="text-[#FFC107]"
                icon={faEnvelope}
              />{" "}
              <span>info@example.com</span>
            </Link>
            <Link to={"tel:+229 01 49 82 04 93"}>
              {" "}
              <FontAwesomeIcon
                className="text-[#FFC107]"
                icon={faPhoneVolume}
              />{" "}
              <span>+229 40 82 04 93</span>
            </Link>
            <Link to={"/contact"} className="open-hours">
              {" "}
              <FontAwesomeIcon className="text-[#FFC107]" icon={faClock} />{" "}
              <span>Sun - Fri (08AM - 10PM)</span>
            </Link>
          </div>

          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faSignOut} />
              <Link to={"/signin"} onClick={() => {setCurrentMenuLink("Signin")}} className="login-button">Login</Link>
            </div>
            <div className="flex gap-5">
              <span>Follow Us:</span>
              <ul className="flex gap-4 items-center socials-links">
                <li>
                  <Link to={"https://github.com/Robots-Pixels"} target="_blank" rel="noopener noreferrer">
                    {" "}
                    <FaFacebook />{" "}
                  </Link>
                </li>
                <li>
                  <Link to={"https://github.com/Robots-Pixels"} target="_blank" rel="noopener noreferrer">
                    {" "}
                    <FaTwitter />{" "}
                  </Link>
                </li>
                <li>
                  <Link to={"https://github.com/Robots-Pixels"} target="_blank" rel="noopener noreferrer">
                    {" "}
                    <FaInstagram />{" "}
                  </Link>
                </li>
                <li>
                  <Link to={"https://linkedin.com/in/otmar-tchenga-953988319"} target="_blank" rel="noopener noreferrer">
                    {" "}
                    <FaLinkedin />{" "}
                  </Link>
                </li>
                <li>
                  <Link to={"https://whatsapp.com"} target="_blank" rel="noopener noreferrer">
                    {" "}
                    <FaWhatsapp />{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`flex justify-between items-center sm:w-7xl mx-auto px-4 sm:px-12 py-4 bottom-header`}>
          <div className="text-5xl text-[#FFC107] logo">
            <Link to={"/"}>YumKings</Link>
          </div>

          <div>
            <ul className="flex gap-12 menu-links">
              <li className={currentMenuLink === "Home" ? "text-[#FFC107]" : ""}>
                <Link onClick={() => {setCurrentMenuLink("Home")}} to={"/"}>Home</Link>
              </li>
              <li className={currentMenuLink === "About" ? "text-[#FFC107]" : ""}>
                <Link onClick={() => {setCurrentMenuLink("About")}} to={"/about"}>About</Link>
              </li>
              <li className={currentMenuLink === "Menu" ? "text-[#FFC107]" : ""}>
                <Link onClick={() => {setCurrentMenuLink("Menu")}} to={"/menu"}>Menu</Link>
              </li>
              <li className={currentMenuLink === "Gallery" ? "text-[#FFC107]" : ""}>
                <Link onClick={() => {setCurrentMenuLink("Gallery")}} to={"/gallery"}>Gallery</Link>
              </li>
              <li className={currentMenuLink === "Contact" ? "text-[#FFC107]" : ""}>
                <Link onClick={() => {setCurrentMenuLink("Contact")}} to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-8">
            <button className="text-xl">
              {" "}
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <Link onClick={() => {setCurrentMenuLink("Booking")}} to={"/booking"} className="p-3 group bg-[#FFC107] rounded-3xl flex items-center gap-3 cta-button relative">
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
