import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import {
  faPassport,
  faPhone,
  faMessage,
  faGlobe,
  faPeopleGroup,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye, FaEyeSlash, FaCalendar } from "react-icons/fa";
import libphonenumber from "google-libphonenumber";
import Summary from "../Components/Summary";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const phoneUtilInstance = libphonenumber.PhoneNumberUtil.getInstance();

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    countryCode: "Benin",
    telephone: "",
    password: "",
    guest: "",
    day: "",
    time: "",
    message: "",
  });
  const [countryList, setCountryList] = useState([]);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [transform, setTransform] = useState("translateY(0)");
  const [error, setError] = useState(null);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    console.log(formData);
  };

  useEffect(() => {
    const loadCountryCodes = async () => {
      fetch("https://restcountries.com/v3.1/all?fields=name,cca2,flags")
        .then((response) => response.json())
        .then((countries) => {
          const sortedCountries = countries.sort((a, b) =>
            a.name.common.localeCompare(b.name.common)
          );
          setCountryList(sortedCountries);
        });
    };

    loadCountryCodes();
  }, []);

  const showSummary = (e) => {
    e.preventDefault();

    if (!isValidPhoneNumber(formData.countryCode, formData.telephone)){
      setError("Invalid phone number");
      return;
    }

    setTransform("translateY(-400px)");
  };

  const getCca2 = (countryCommon) => {
    const country = countryList.find(country => country.name.common === countryCommon);
    return country.cca2;
  }

  const isValidPhoneNumber = (countryCode, telephone) => {
    try {
      countryCode = getCca2(countryCode);
      const number = phoneUtilInstance.parseAndKeepRawInput(
        telephone,
        countryCode
      );
      setError(null)
      return phoneUtilInstance.isValidNumber(number);
    } catch (error) {
      setError("Invalid phone number");
    }
  };

  const handleSubmit = async () => {

    const res = await fetch("/api/booking/newBooking",
      {
        method: "POST",
        headers:{
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({
          ...formData,
          countryCode: getCca2(formData.countryCode),
          telephone: formData.countryCode === "Benin" ? ( formData.telephone.replace(/\s+/g, "").startsWith("01") ? formData.telephone.replace(/\s+/g, "") : `01${formData.telephone.replace(/\s+/g, "")}`) : formData.telephone.replace(/\s+/g, "")
        })
      }
    )

    const data = await res.json();
    if (data.success === false){
      setError(data.message);
      return;
    }

    setError("");
    navigate("/menu");
  }

  return (
    <div className="relative">

      <Hero
        title={"Book a Table"}
        height={"500px"}
        imageUrl={
          "https://buildeo.co.uk/wp-content/uploads/2021/12/Modern-Fast-food-Restaurant-Interior-Design-and-Renovation.jpg"
        }
      />

      <section className="sm:max-w-7xl h-full mx-auto px-5 sm:px-12 mb-20">
        <div className="flex flex-col gap-5 items-center px-5 sm:px-15 py-5 w-full shadow-xl">
          <h2 className="section-title text-5xl text-[#FFC107]">Reservation</h2>

          <h3 className="text-4xl sm:text-5xl mb-5 text-center">Book Your Table Now</h3>

          <form className="w-full" onSubmit={showSummary}>
            <div className="flex flex-col gap-5 w-full">
              <div className="flex flex-col w-full gap-4">
                <div className="flex flex-col md:flex-row w-full gap-4">
                  <div className="flex items-center gap-5 border-1 border-[#FFC107] px-5 py-3 rounded-4xl w-full">
                    <FontAwesomeIcon
                      className="text-[#FFC107]"
                      icon={faGlobe}
                    />

                    <select
                      onChange={handleChange}
                      id="countryCode"
                      required={true}
                      value={formData.countryCode}
                      className="text-[1rem] sm:text-[1rem] w-[100%] rounded-4xl outline-none text-[#8a8888]"
                    >
                      {countryList.map((country) => (
                        <option key={country.name.common}>
                          {country.name.common}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-5 border-1 border-[#FFC107] px-5 py-3 rounded-4xl w-full">
                    <FontAwesomeIcon
                      className="text-[#FFC107]"
                      icon={faPhone}
                    />

                    <input
                      onChange={handleChange}
                      id="telephone"
                      required={true}
                      value={formData.telephone}
                      className="outline-none w-full"
                      type="text"
                      placeholder="Your phone *"
                    />
                  </div>

                  <div className="flex items-center gap-5 border-1 border-[#FFC107] px-5 py-3 rounded-4xl w-full">
                    <FontAwesomeIcon
                      className="text-[#FFC107]"
                      icon={faPassport}
                    />

                    <input
                      onChange={handleChange}
                      id="password"
                      required={true}
                      value={formData.password}
                      className="outline-none w-full"
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Your Password *"
                    />

                    <button
                      type="button"
                      className="text-xl text-[#8a8888]"
                      onClick={() => {
                        setPasswordVisible(!passwordVisible);
                      }}
                    >
                      {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-4">
                  <div className="flex items-center gap-5 border-1 border-[#FFC107] px-5 py-3 rounded-4xl w-full">
                    <FontAwesomeIcon
                      className="text-[#FFC107]"
                      icon={faPeopleGroup}
                    />

                    <select
                      onChange={handleChange}
                      id="guest"
                      required={true}
                      value={formData.guest}
                      className="text-[1rem] sm:text-[1rem] w-[100%] rounded-4xl outline-none text-[#8a8888]"
                    >
                      <option value="title">Choose guest</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-5 border-1 border-[#FFC107] px-5 py-3 rounded-4xl w-full">
                    <div className="text-[#FFC107]">
                      <FaCalendar />
                    </div>

                    <input
                      onChange={handleChange}
                      id="day"
                      required={true}
                      value={formData.day}
                      className="outline-none w-full text-[#8a8888]"
                      type="date"
                    />
                  </div>

                  <div className="flex items-center gap-5 border-1 border-[#FFC107] px-5 py-3 rounded-4xl w-full">
                    <FontAwesomeIcon
                      className="text-[#FFC107]"
                      icon={faClock}
                    />

                    <select
                      onChange={handleChange}
                      id="time"
                      required={true}
                      value={formData.time}
                      className="text-[1rem] sm:text-[1rem] w-[100%] rounded-4xl outline-none text-[#8a8888]"
                    >
                      <option value="title">Choose time</option>
                      <option value="08:00 AM - 10:00 AM">08:00 AM - 10:00 AM</option>
                      <option value="10:00 AM - 12:00 AM">10:00 AM - 12:00 AM</option>
                      <option value="01:00 PM - 03:00 PM">01:00 PM - 03:00 PM</option>
                      <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM</option>
                      <option value="05:00 AM - 07:00 AM">05:00 AM - 07:00 AM</option>
                      <option value="07:00 AM - 09:00 AM">07:00 AM - 09:00 AM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="relative">
                  <FontAwesomeIcon
                    className="text-[#FFC107] absolute top-4 left-5"
                    icon={faMessage}
                  />

                  <textarea
                    onChange={handleChange}
                    id="message"
                    value={formData.message}
                    placeholder="Any particular request?"
                    className="outline-none flex items-start gap-5 border-1 border-[#FFC107] px-14 py-3 rounded-4xl w-full h-24"
                  ></textarea>
                </div>
              </div>

              {
                error && <h4 className="text-[#c1564c] text-sm"> {error} </h4>
              }

              <button className="bg-[#FFC107] p-3 rounded-4xl flex items-center justify-center hover:bg-[#c1564c] transition-colors">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </section>

            <section 
            className={`fixed z-20 left-0 bottom-[-400px] w-full py-10 bg-black flex items-center justify-center text-white summary-section`}
            style={{
              transition: "transform 1s ease",
              transform: transform,
            }}>
                <div className='flex flex-col items-center gap-1'>
        
                    <h2 className='section-title text-4xl text-[rgb(255,193,7)]'>
                        Order Summary
                    </h2>
        
                    <h3 className='text-3xl mb-3'>
                        Review your order
                    </h3>
        
                    <div className='flex flex-col gap-1 text-center'>
                        <h3> <span className='text-[rgb(255,193,7)]' >Your Phone Number </span> : {`${formData.countryCode} ${formData.telephone}`}</h3>
                        <h3> <span className='text-[rgb(255,193,7)]' >Number of guests </span> : {formData.guest}</h3>
                        <h3> <span className='text-[rgb(255,193,7)]' >Date </span> : {formData.day} for {formData.time}</h3>
        
                        { (formData.message !== "") && <h3 className='mb-2'> <span className='text-[rgb(255,193,7)]' >Particular Request </span> : {formData.message} </h3>}
        
                        <div className="flex flex-col sm:flex-row gap-3">

                          <button onClick={() => {
                            setTransform("translateY(0px)");
                            }} 
                            className="bg-[#c1564c] p-3 rounded-4xl flex items-center justify-center hover:opacity-90 transition-colors w-full">
                              Update Order
                          </button>

                          <button onClick={() => {
                            setTransform("translateY(0px)");
                            handleSubmit();
                            }}
                            className="bg-[#FFC107] p-3 rounded-4xl flex items-center justify-center hover:opacity-90 transition-colors w-full">
                              Confirm Order
                          </button>

                        </div>

                    </div>
        
                </div>
            </section>

    </div>
  );
}
