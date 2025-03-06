import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero.jsx";
import {
  faPassport,
  faPhone,
  faMessage,
  faGlobe,
  faPeopleGroup,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import libphonenumber from "google-libphonenumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye, FaEyeSlash, FaCalendar, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTemporaryBooking } from "../../redux/booking/bookingSlice.js";
// import food1 from "../assets/food1.svg"
// import food2 from "../assets/food2.svg"
import food3 from "../assets/food3.svg"
// import food4 from "../assets/food4.svg"
import servicePlate from "../assets/servicePlate.png"
import { Link } from "react-router-dom";
import BouncingArrow from "../Components/BouncingArrow.jsx";
import { 
  faPlateWheat,
  faBowlFood,
  faUtensils,
  faBowlRice,
  faCake
} from '@fortawesome/free-solid-svg-icons'
import MenuItem from '../Components/MenuItem.jsx'

export default function Home() {
  const { currentUser, lastPage } = useSelector((state) => state.user);
  const { temporaryBooking } = useSelector((state) => state.booking);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const phoneUtilInstance = libphonenumber.PhoneNumberUtil.getInstance();
  
  useEffect(() => {
    if (temporaryBooking) {
      if (currentUser) {
        setFormData({
          countryCode: "Benin",
          telephone: currentUser.telephone,
          guest: temporaryBooking.guest,
          day: temporaryBooking.day,
          time: temporaryBooking.time,
          message: temporaryBooking.message,
        });
      }
    } else if (currentUser) {
      setFormData({
        ...formData,
        telephone: currentUser.telephone,
      });
    }
  }, []);

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

    if (!isValidPhoneNumber(formData.countryCode, formData.telephone)) {
      setError("Invalid phone number");
      return;
    }

    setTransform("translateY(-400px)");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    console.log(formData);
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
      dispatch(setTemporaryBooking(
        {
          ...formData,
          password:"",
          countryCode: getCca2(formData.countryCode),
          telephone: formData.countryCode === "Benin" ? ( formData.telephone.replace(/\s+/g, "").startsWith("01") ? formData.telephone.replace(/\s+/g, "") : `01${formData.telephone.replace(/\s+/g, "")}`) : formData.telephone.replace(/\s+/g, "")
        }
      ));
  
      if (!currentUser) {
        dispatch(setLastPage("/booking"));
        navigate("/signin");
        return;
      }
  
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
      dispatch(setTemporaryBooking(data.booking));
      navigate("/menu");
    }

  const [activeName, setActiveName] = useState("All");

  const filters = [
    { 
      "name": "All",
      "icone": faUtensils
    },
    {
      "name": "Breakfast",
      "icone": faBowlFood
    },
    {
      "name": "Lunch",
      "icone": faUtensils
    },
    {
      "name": "Dinner",
      "icone": faBowlRice
    },
    {
      "name": "Dessert",
      "icone": faCake
    }
  ];

  return (
    <div className="w-full">
      <Hero
        isHome={true}
        title={"Home"}
        height={"120vh"}
        imageUrl={
          "https://buildeo.co.uk/wp-content/uploads/2021/12/Modern-Fast-food-Restaurant-Interior-Design-and-Renovation.jpg"
        }
      />

      <section className="sm:max-w-7xl h-full mx-auto px-5 sm:px-12 mb-20 text-black">

        <div className="flex flex-col md:flex-row gap-8">
          
          <div className="flex flex-col bg-[#ffe186] py-4 px-5 rounded-t-4xl">

            <div className="flex items-center justify-between">
              <div className="bg-[#FFC107] text-white p-3 w-16 rounded-full">
                  <img className="" src={food3}/>
              </div>
              
              <h2 className="text-5xl text-[#fff]">01</h2>

            </div>

            <div className="flex flex-col gap-2">
                <h2 className="text-2xl">Fresh Tasty Meals</h2>
                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>

          </div>

          <div className="flex flex-col bg-[#ffe186] py-4 px-5 rounded-t-4xl">

<div className="flex items-center justify-between">
  <div className="bg-[#FFC107] text-white p-3 w-16 rounded-full">
      <img className="" src={food3}/>
  </div>
  
  <h2 className="text-5xl text-[#fff]">01</h2>

</div>

<div className="flex flex-col gap-2">
    <h2 className="text-2xl">Fresh Tasty Meals</h2>
    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
</div>

          </div>

          <div className="flex flex-col bg-[#ffe186] py-4 px-5 rounded-t-4xl">

<div className="flex items-center justify-between">
  <div className="bg-[#FFC107] text-white p-3 w-16 rounded-full">
      <img className="" src={food3}/>
  </div>
  
  <h2 className="text-5xl text-[#fff]">01</h2>

</div>

<div className="flex flex-col gap-2">
    <h2 className="text-2xl">Fresh Tasty Meals</h2>
    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
</div>

          </div>

          <div className="flex flex-col bg-[#ffe186] py-4 px-5 rounded-t-4xl">

<div className="flex items-center justify-between">
  <div className="bg-[#FFC107] text-white p-3 w-16 rounded-full">
      <img className="" src={food3}/>
  </div>
  
  <h2 className="text-5xl text-[#fff]">01</h2>

</div>

<div className="flex flex-col gap-2">
    <h2 className="text-2xl">Fresh Tasty Meals</h2>
    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
</div>

          </div>

        </div>

      </section>

      <section className='sm:max-w-7xl h-full mx-auto px-5 sm:px-12 mb-20'>

<div className='flex flex-col sm:flex-col md:flex-row gap-10 items-center justify-between flex-wrap h-full w-full'>

  <div className='section-image flex w-full gap-x-4 md:flex-1 h-[300px] sm:h-[500px] md:min-w-sm relative'>
    <div className='self-start bg-center bg-cover w-full h-[90%] rounded-t-full' style={{backgroundImage: `url(https://buildeo.co.uk/wp-content/uploads/2021/12/Modern-Fast-food-Restaurant-Interior-Design-and-Renovation.jpg)`}}>
    </div>

    <div className='self-end bg-center bg-cover w-full h-[90%] rounded-t-full' style={{backgroundImage: `url(https://buildeo.co.uk/wp-content/uploads/2021/12/Modern-Fast-food-Restaurant-Interior-Design-and-Renovation.jpg)`}}>
    </div>

    <div className='absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] '>
      <div className='text-white bg-white rounded-full p-2'>
        <div className='bg-[#FFC107] p-2 sm:p-3 rounded-full'>
          <div className='flex flex-col items-center text-center border-dashed border-white border-2 rounded-full p-4 sm:p-6'>
            <h3 className='text-2xl sm:text-4xl'>30+</h3>
            <p className='text-xs sm:text-xl'>Years Of <br /> Experience</p>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div className='section-description flex-1 min-h-[500px] flex flex-col justify-between sm:gap-0 gap-4'>
    <h2 className='section-title text-5xl text-[#FFC107]'>
      About Us
    </h2>

    <h3 className='text-5xl'>
      We Are Always <span className='text-[#FFC107]'>Here To Serve You</span> Fresh Food
    </h3>

    <p className='text-[#4e4637]'>
    At our restaurant, freshness is our promise. We are dedicated to serving you carefully prepared meals made from the finest ingredients, ensuring that every bite is as satisfying as the last.
    </p>

    <div className='flex flex-col sm:flex-row gap-5'>

      <div className='flex gap-3 bg-[#ffc10781] items-start p-3 rounded-t-3xl'>
        <div className='bg-white flex items-center justify-center w-[100px] p-2 rounded-full my-3'>
          <img className='' src={servicePlate} alt="" />
        </div>

        <div className='flex flex-col'>
          <h3>Best Quality Food
          </h3>
          <p className='text-[#4e4637]'>At our restaurant, freshness is our promise.</p>
        </div>
      </div>

      <div className='flex gap-3 bg-[#ffc10781] items-start p-3 rounded-t-3xl'>
        <div className='bg-white flex items-center justify-center w-[100px] p-2 rounded-full my-3'>
          <img className='w-full h-full' src={servicePlate} alt="" />
        </div>

        <div className='flex flex-col'>
          <h3>Best Quality Food
          </h3>
          <p className='text-[#4e4637]'>At our restaurant, freshness is our promise.</p>
        </div>
      </div>

      <div>
        
      </div>

    </div>

    <div className='w-[170px]'>
      <Link to={"/menu"} className="p-3 group bg-[#FFC107] rounded-3xl flex items-center gap-3 cta-button relative">
        <span className="absolute inset-0 bg-[#c1564c] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
        <span className="z-10">Discover More</span>
        <BouncingArrow />
      </Link>
    </div>

  </div>

</div>

      </section>

      <section className="bg-[#ffedb7] pt-20">
      <div className='sm:max-w-7xl h-full mx-auto px-5 sm:px-12 pb-20'>

        <section className='menu-top mb-12 flex gap-5 flex-col md:flex-row md:gap-0 items-center justify-between'>

          <div className='menu-headline flex flex-col gap-4'>
              <h2 className='section-title text-5xl text-[#FFC107]'>
                Our Menu
              </h2>

              <h3 className='text-5xl'>
                Let's Check <span className='text-[#FFC107]'>Our Menu</span>
              </h3>
          </div>

          <div className='filters flex flex-col items-center gap-3 md:flex-row'>

            <div>

              {[ filters[0], filters[1], filters[2]].map((filter) => (
                <button onClick={() => {setActiveName(filter.name)}} className={`${activeName === filter.name ? "bg-[#FFC107] text-white" : "bg-white  text-black"}`} key={filter.name}>
                  <FontAwesomeIcon icon={filter.icone} /> 
                  <span>{filter.name}</span> 
                </button>
              ))}

            </div>

            <div>

            {[ filters[3], filters[4]].map((filter, index) => (
                <button onClick={() => {setActiveName(filter.name)}} className={`${activeName === filter.name ? "bg-[#FFC107] text-white" : "bg-white  text-black"}`} key={filter.name}>
                  <FontAwesomeIcon icon={filter.icone} /> 
                  <span>{filter.name}</span> 
                </button>
              ))}

            </div>

          </div>

        </section>

        <section className='menu-items grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5'>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>

          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
        </section>

      </div>
      </section>

      <section className='sm:max-w-7xl h-full mx-auto px-5 sm:px-12 mb-20 pt-20'>

        <div className='flex flex-col sm:flex-col md:flex-row-reverse gap-10 items-center justify-between flex-wrap h-full w-full'>

          <div className='section-image flex w-full gap-x-4 md:flex-1 h-[330px] sm:h-[550px] md:min-w-sm relative'>
            <div className='self-start bg-center bg-cover w-full h-full rounded-4xl' style={{backgroundImage: `url(https://buildeo.co.uk/wp-content/uploads/2021/12/Modern-Fast-food-Restaurant-Interior-Design-and-Renovation.jpg)`}}>
            </div>
          </div>

          <div className='section-description flex-1 min-h-[500px] flex flex-col justify-between sm:gap-4 gap-4'>
            <h2 className='section-title text-5xl text-[#FFC107]'>
              From 1992
            </h2>

            <h3 className='text-5xl'>
              Let's Check <span className='text-[#FFC107]'>Our History</span>
            </h3>

            <p className='text-[#4e4637]'>
              Our fast food restaurant was founded with a simple yet powerful vision: to serve delicious, high-quality meals that are fast, fresh, and full of flavor. What started as a small takeout spot quickly gained popularity, thanks to our commitment to using fresh ingredients and crafting mouthwatering burgers, crispy fries, and juicy fried chicken. We wanted to create a place where people could enjoy great food without compromising on taste, quality, or speed.
            </p>
            <p className="text-[#4e4637]">
            Whether you're grabbing a quick bite on the go or enjoying a meal with friends and family, we’re here to serve up satisfaction—one delicious bite at a time!
            </p>

            <div className='flex flex-col sm:flex-row gap-5'>

              <div className='flex gap-3 bg-[#ffc10781] items-start p-3 rounded-t-3xl'>
                <div className='bg-white flex items-center justify-center w-[100px] p-2 rounded-full my-3'>
                  <img className='' src={servicePlate} alt="" />
                </div>

                <div className='flex flex-col'>
                  <h3>Best Quality Food
                  </h3>
                  <p className='text-[#4e4637]'>At our restaurant, freshness is our promise.</p>
                </div>
              </div>

              <div className='flex gap-3 bg-[#ffc10781] items-start p-3 rounded-t-3xl'>
                <div className='bg-white flex items-center justify-center w-[100px] p-2 rounded-full my-3'>
                  <img className='w-full h-full' src={servicePlate} alt="" />
                </div>

                <div className='flex flex-col'>
                  <h3>Best Quality Food
                  </h3>
                  <p className='text-[#4e4637]'>At our restaurant, freshness is our promise.</p>
                </div>
              </div>

              <div>
                
              </div>

            </div>

            <div className='w-[170px]'>
              <Link to={"/menu"} className="p-3 group bg-[#FFC107] rounded-3xl flex items-center gap-3 cta-button relative">
                <span className="absolute inset-0 bg-[#c1564c] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
                <span className="z-10">Discover More</span>
                <BouncingArrow />
              </Link>
            </div>

          </div>

        </div>

      </section>

      <section className='bg-[#673f00] mb-20 text-white'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:flex-row justify-between sm:max-w-7xl h-full gap-3 mx-auto px-5 sm:px-12 py-7'>
          
          <div className='h-full w-full flex p-3 gap-5 border-solid border-2 border-[#ffffff65] rounded-2xl'>
            <div className='bg-white w-[70px] rounded-2xl p-1'>
              <img src={servicePlate} alt="" />
            </div>

            <div className='flex flex-col justify-between '>
              <h2 className='text-5xl text-[#FFC107]'>50</h2>
              <b>+ Items Of Foods</b>
            </div>

          </div>

          <div className='h-full w-full flex p-3 gap-5 border-solid border-2 border-[#ffffff65] rounded-2xl'>
            <div className='bg-white w-[70px] rounded-2xl p-1'>
              <img src={servicePlate} alt="" />
            </div>

            <div className='flex flex-col justify-between '>
              <h2 className='text-5xl text-[#FFC107]'>50</h2>
              <b>+ Items Of Foods</b>
            </div>

          </div>

          <div className='h-full w-full flex p-3 gap-5 border-solid border-2 border-[#ffffff65] rounded-2xl'>
            <div className='bg-white w-[70px] rounded-2xl p-1'>
              <img src={servicePlate} alt="" />
            </div>

            <div className='flex flex-col justify-between '>
              <h2 className='text-5xl text-[#FFC107]'>50</h2>
              <b>+ Items Of Foods</b>
            </div>

          </div>

          <div className='h-full w-full flex p-3 gap-5 border-solid border-2 border-[#ffffff65] rounded-2xl'>
            <div className='bg-white w-[70px] rounded-2xl p-1'>
              <img src={servicePlate} alt="" />
            </div>

            <div className='flex flex-col justify-between '>
              <h2 className='text-5xl text-[#FFC107]'>50</h2>
              <b>+ Items Of Foods</b>
            </div>

          </div>

        </div>
      </section>
      
      <section className='sm:max-w-7xl h-full mx-auto px-5 sm:px-12 mb-20'>

        <div className='flex flex-col sm:flex-col md:flex-row gap-10 items-center justify-between flex-wrap h-full w-full'>

          <div className='section-image flex w-full gap-x-4 md:flex-1 h-[200px] sm:h-[350px] md:min-w-sm relative'>
            <div className='self-start bg-center bg-cover w-full h-[90%] rounded-t-full' style={{backgroundImage: `url(https://buildeo.co.uk/wp-content/uploads/2021/12/Modern-Fast-food-Restaurant-Interior-Design-and-Renovation.jpg)`}}>
            </div>

            <div className='self-end bg-center bg-cover w-full h-[90%] rounded-t-full' style={{backgroundImage: `url(https://buildeo.co.uk/wp-content/uploads/2021/12/Modern-Fast-food-Restaurant-Interior-Design-and-Renovation.jpg)`}}>
            </div>
          </div>


          <div className='section-description flex-1 min-h-[350px] flex flex-col justify-between sm:gap-0 gap-4'>
            <h2 className='section-title text-5xl text-[#FFC107]'>
              Why Choose Us
            </h2>

            <h3 className='text-5xl'>
              We provide <span className='text-[#FFC107]'>Quality Food</span>
            </h3>

            <p className='text-[#4e4637]'>
            At our restaurant, freshness is our promise. We are dedicated to serving you carefully prepared meals made from the finest ingredients, ensuring that every bite is as satisfying as the last.
            </p>

            <div className='flex flex-col sm:flex-row gap-5'>
{/* 
              <div className='flex gap-3 bg-[#ffc10781] items-start p-3 rounded-t-3xl'>
                <div className='bg-white flex items-center justify-center w-[100px] p-2 rounded-full my-3'>
                  <img className='' src={servicePlate} alt="" />
                </div>

                <div className='flex flex-col'>
                  <h3>Best Quality Food
                  </h3>
                  <p className='text-[#4e4637]'>At our restaurant, freshness is our promise.</p>
                </div>
              </div>

              <div className='flex gap-3 bg-[#ffc10781] items-start p-3 rounded-t-3xl'>
                <div className='bg-white flex items-center justify-center w-[100px] p-2 rounded-full my-3'>
                  <img className='w-full h-full' src={servicePlate} alt="" />
                </div>

                <div className='flex flex-col'>
                  <h3>Best Quality Food
                  </h3>
                  <p className='text-[#4e4637]'>At our restaurant, freshness is our promise.</p>
                </div>
              </div> */}

              <div>
                
              </div>

            </div>

            <div className='w-[170px]'>
              <Link to={"/menu"} className="p-3 group bg-[#FFC107] rounded-3xl flex items-center gap-3 cta-button relative">
                <span className="absolute inset-0 bg-[#c1564c] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
                <span className="z-10">Discover More</span>
                <BouncingArrow />
              </Link>
            </div>

          </div>

        </div>

      </section>

      <section className='testimonials sm:max-w-7xl h-full mx-auto px-5 sm:px-12 mb-20'>

        <h2 className='section-title text-5xl text-[#FFC107] text-center mb-8'>
          Testimonials
        </h2>

        <h3 className='text-5xl text-center mb-15'>
        What Our Awesome <span className='text-[#FFC107]'>Clients <br />  Say</span> About Us 
        </h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

          <div className='flex items-end justify-end border-1 border-solid border-[#ffc1b2]'>
            <div className='flex items-end justify-end bg-[#ffc1b2] w-[95%] h-[95%] pb-8 pr-4'>
              
              <div className='w-[90%] h-full'>
                <div className='flex gap-4'>

                  <div className='flex items-center justify-center profile-image-div  bg-white w-1/4 aspect-square p-2'>
                    <div className='flex items-center justify-center w-[90%] h-[90%] bg-cover bg-center' style={{backgroundImage: `url(https://4kwallpapers.com/images/wallpapers/ichigo-kurosaki-bleach-1920x1200-10510.jpg)`}}>
                    </div>
                  </div>

                  <div className='user-infos'>
                      <h3 className='text-2xl'>David Schish</h3>
                      <h4 className='text-xl text-[#ff6207]'>Customer</h4>
                  </div>
                </div>

                <div className='user-comment mb-5'>
                  <p className='leading-8 text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis eos facere rem quasi accusamus sint placeat ullam iure a!
                  </p>
                </div>

                <div className='flex gap-2 text-xl text-[#550000] mb-4'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>

              </div>

            </div>
          </div>

          <div className='flex items-end justify-end border-1 border-solid border-[#ffc1b2]'>
            <div className='flex items-end justify-end bg-[#ffc1b2] w-[95%] h-[95%] pb-8 pr-4'>
              
              <div className='w-[90%] h-full'>
                <div className='flex gap-4'>
                  
                  <div className='flex items-center justify-center profile-image-div  bg-white w-1/4 aspect-square p-2'>
                    <div className='flex items-center justify-center w-[90%] h-[90%] bg-cover bg-center' style={{backgroundImage: `url(https://w0.peakpx.com/wallpaper/382/148/HD-wallpaper-zenitsu-agatsuma-demomslayer-demon-slayer-kimetsu-no-yaiba-thumbnail.jpg)`}}>
                    </div>
                  </div>

                  <div className='user-infos'>
                      <h3 className='text-2xl'>David Schish</h3>
                      <h4 className='text-xl text-[#ff6207]'>Customer</h4>
                  </div>
                </div>

                <div className='user-comment mb-5'>
                  <p className='leading-8 text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis eos facere rem quasi accusamus sint placeat ullam iure a!
                  </p>
                </div>

                <div className='flex gap-2 text-xl text-[#550000] mb-4'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>

              </div>

            </div>
          </div>

          <div className='flex items-end justify-end border-1 border-solid border-[#ffc1b2]'>
            <div className='flex items-end justify-end bg-[#ffc1b2] w-[95%] h-[95%] pb-8 pr-4'>
              
              <div className='w-[90%] h-full'>
                <div className='flex gap-4'>
                  
                  <div className='flex items-center justify-center profile-image-div  bg-white w-1/4 aspect-square p-2'>
                    <div className='flex items-center justify-center w-[90%] h-[90%] bg-cover bg-center' style={{backgroundImage: `url(https://wallpapers-clan.com/wp-content/uploads/2024/04/aesthetic-sanji-smoking-one-piece-desktop-wallpaper-cover.jpg)`}}>
                    </div>
                  </div>

                  <div className='user-infos'>
                      <h3 className='text-2xl'>David Schish</h3>
                      <h4 className='text-xl text-[#ff6207]'>Customer</h4>
                  </div>
                </div>

                <div className='user-comment mb-5'>
                  <p className='leading-8 text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis eos facere rem quasi accusamus sint placeat ullam iure a!
                  </p>
                </div>

                <div className='flex gap-2 text-xl text-[#550000] mb-4'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>

              </div>

            </div>
          </div>

        </div>

      </section>

      <section className="bg-[#ffedb7]">
        <div className="partners sm:max-w-7xl h-full mx-auto px-5 sm:px-12 mb-20 pt-20 pb-40">
          
          <h2 className='section-title text-5xl text-[#FFC107] text-center mb-8'>
            Our Partners
          </h2>

          <h3 className='text-5xl text-center mb-15'>
            Here Are <span className='text-[#FFC107]'>Our Awesome</span> Partners 
          </h3>

          <div className="flex justify-between items-center gap-20 overflow-hidden">
          
            <div className="w-30">
              <img src={food3} alt="" />
            </div>

            <div className="w-30">
              <img src={food3} alt="" />
            </div>

            <div className="w-30">
              <img src={food3} alt="" />
            </div>

            <div className="w-30">
              <img src={food3} alt="" />
            </div>

            <div className="flex justify-between items-center gap-20 overflow-hidden two-last-partner">

              <div className="w-30">
                <img src={food3} alt="" />
              </div>

              <div className="last-partner">
                <div className="w-30">
                  <img src={food3} alt="" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="-mt-50 mb-20">
              <section className="sm:max-w-7xl h-full mx-auto px-5 sm:px-12">
                <div className="bg-white rounded-t-4xl border-t-4 border-[#FFC107] flex flex-col gap-5 items-center px-5 sm:px-15 py-5 w-full shadow-xl">
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
      </section>

    </div>
  );
}
