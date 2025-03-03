import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero.jsx";
import { Link } from "react-router-dom";
import { faUser, faEnvelope, faPhone, faPassport, faGlobe, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import libphonenumber from "google-libphonenumber";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const phoneUtilInstance = libphonenumber.PhoneNumberUtil.getInstance();

export default function SignUp() {

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const getCca2 = (countryCommon) => {
    const country = countryList.find(country => country.name.common === countryCommon);
    return country.cca2;
  }

  const isValidPhoneNumber = (countryCode, telephone) => {
    try {
      countryCode = getCca2(countryCode);
      const number = phoneUtilInstance.parseAndKeepRawInput(telephone, countryCode);
      return phoneUtilInstance.isValidNumber(number);
    } catch (error) {
      setError("Invalid phone number");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidPhoneNumber(formData.countryCode, formData.telephone)){
      setError("Invalid phone number");
      return;
    }

    const res = await fetch("/api/auth/signup",
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
    
    navigate("/menu");
  }


  const [formData, setFormData] = useState(
    {
      name: "",
      countryCode: "Benin",
      telephone: "",
      email: "",
      password: ""
    }
  );

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {

    // if (e.target.id === "countryCode"){
    //   const countryCca2 = getCca2(e.target.value);
    //   setFormData({
    //     ...formData, 
    //     [e.target.id]: countryCca2
    //   });
    //   console.log(formData)
    //   return;
    // }

    setFormData({
      ...formData, 
      [e.target.id]: e.target.value
    });

    console.log(formData)
  }

  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const loadCountryCodes = async () => {
      fetch("https://restcountries.com/v3.1/all?fields=name,cca2,flags")
      .then((response) => response.json())
      .then((countries) => { 
        const sortedCountries = countries
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
        setCountryList(sortedCountries);
      })}

    loadCountryCodes();

  }, []);

  return (
    <div>
      <Hero
        title={"Register"}
        height={"500px"}
        imageUrl={
          "https://buildeo.co.uk/wp-content/uploads/2021/12/Modern-Fast-food-Restaurant-Interior-Design-and-Renovation.jpg"
        }
      />

      <section className="sm:max-w-7xl h-full mx-auto px-5 sm:px-12 mb-20">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center gap-4 bg-white p-10 shadow">
            <div className="text-5xl text-[#FFC107] logo">
              <h1>YumKings</h1>
            </div>

            <h3 className="text-[#4e4637] text-sm sm:text-xl">
              Create a free Yumkings account
            </h3>

            <div className="w-full sm:min-w-[32rem]">
              <form 
              onSubmit={handleSubmit}
              className="flex flex-col gap-5">

                <div className="flex flex-col items-center justify-between gap-4">

                  <div className="flex items-center gap-5 border-1 border-[#FFC107] px-5 py-3 rounded-4xl w-full">
                    <FontAwesomeIcon className="text-[#FFC107]" icon={faUser} />
                    <input
                      onChange={handleChange}
                      id="name"
                      value={formData.name}
                      required={true}
                      className="outline-none w-full"
                      type="text"
                      placeholder="Your name *"
                    />
                  </div>

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
                    className="text-[1rem] sm:text-[1rem] w-[100%] rounded-4xl outline-none text-[#8a8888]">
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
                      className="outline-none"
                      type="text"
                      placeholder="Your phone *"
                    />

                  </div>


                  <div className="flex items-center gap-5 border-1 border-[#FFC107] px-5 py-3 rounded-4xl w-full">
                    <FontAwesomeIcon
                      className="text-[#FFC107]"
                      icon={faEnvelope}
                    />
                    <input
                    onChange={handleChange}
                    id="email"
                    value={formData.email}
                      className="outline-none w-full"
                      type="email"
                      placeholder="Your Email"
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

                    <button type="button" className="text-xl text-[#8a8888]"
                    onClick={() => {
                      setPasswordVisible(!passwordVisible);
                    }}>
                      {passwordVisible ? 
                      <FaEye/>
                      : 
                      <FaEyeSlash/>
                      }
                    </button>
                    

                  </div>
                </div>

                <div className="flex gap-2">
                  <input type="checkbox" 
                  required={true}/>
                  <h4>I agree with the <Link className="text-[#FFC107]">Terms of service.</Link></h4>
                </div>


                {
                  error && <h4 className="text-[#c1564c] text-sm"> {error} </h4>
                }

                <button className="bg-[#FFC107] p-3 rounded-4xl flex items-center justify-center hover:bg-[#c1564c] transition-colors">
                  Register
                </button>

                <h4 className="text-center ">Already have an account? <Link to={"/signin"} className="text-[#FFC107]">Login.</Link></h4>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
