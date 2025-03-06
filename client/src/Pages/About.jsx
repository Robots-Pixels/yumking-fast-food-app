import React from 'react'
import Hero from '../Components/Hero.jsx'
import servicePlate from "../assets/servicePlate.png"
import { Link } from 'react-router-dom'
import BouncingArrow from '../Components/BouncingArrow.jsx'
import { FaStar } from 'react-icons/fa'

export default function About() {
  return ( 
    <div>

      <Hero title={"About Us"} height={"500px"} imageUrl={"https://buildeo.co.uk/wp-content/uploads/2021/12/Modern-Fast-food-Restaurant-Interior-Design-and-Renovation.jpg"}/>

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

        <div className='flex flex-col sm:flex-col md:flex-row-reverse gap-10 items-center justify-between flex-wrap h-full w-full'>

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

    </div>
  )
}
