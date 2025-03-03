import React from 'react'
import Hero from '../Components/Hero'
import { faMapLocationDot,faUser, faEnvelope, faPen, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import MapComponent from '../Components/MapComponent'

export default function Contact() {
  return (
    <div>
        <Hero
          title={"Contact Us"}
          height={"500px"}
          imageUrl={
            "https://buildeo.co.uk/wp-content/uploads/2021/12/Modern-Fast-food-Restaurant-Interior-Design-and-Renovation.jpg"
          }
        />

        <div>
          <div className='sm:max-w-7xl h-full mx-auto px-5 sm:px-12 pb-20 contact-wraper'>
            <div className='flex flex-col md:flex-row justify-between items-stretch gap-10 contact-director'>
              <section className='border-l-4 border-l-[#FFC107] flex flex-col px-5 bg-[#fff] shadow contact-left w-full md:min-w-88 md:max-w-92'>
                
                <div className='contact-left-div'>
                  <div className='text-3xl p-2 rounded-full text-[#FFC107]'>
                    <FontAwesomeIcon icon={faMapLocationDot}/>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h2>Office Address</h2>
                    <p className='text-[#4e4637] text-[0.9rem]'>9JM3+W4J, Sème Podji Sème, Podji</p>
                  </div>
                </div>

                <div className='contact-left-div'>
                  <div className='text-3xl p-2 rounded-full text-[#FFC107]'>
                    <FontAwesomeIcon icon={faMapLocationDot}/>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h2>Office Address</h2>
                    <p className='text-[#4e4637] text-[0.9rem]'>9JM3+W4J, Sème Podji Sème, Podji</p>
                  </div>
                </div>

                <div className='contact-left-div'>
                  <div className='text-3xl p-2 rounded-full text-[#FFC107]'>
                    <FontAwesomeIcon icon={faMapLocationDot}/>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h2>Office Address</h2>
                    <p className='text-[#4e4637] text-[0.9rem]'>9JM3+W4J, Sème Podji Sème, Podji</p>
                  </div>
                </div>

                <div className='contact-left-div' id='last-div'>
                  <div className='text-3xl p-2 rounded-full text-[#FFC107]'>
                    <FontAwesomeIcon icon={faMapLocationDot}/>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h2>Office Address</h2>
                    <p className='text-[#4e4637] text-[0.9rem]'>9JM3+W4J, Sème Podji Sème, Podji</p>
                  </div>
                </div>

              </section>

              <section className='shadow p-5 flex flex-col gap-6'>

                <div className='flex flex-col gap-4'>
                  <b className='text-2xl'>Get In Touch</b>
                  <p className='text-[#4e4637]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus necessitatibus neque dolorem magnam, dolorum quisquam quasi placeat debitis voluptas!</p>
                </div>

                <div>
                  <form className='flex flex-col gap-5'>

                    <div className='flex flex-col md:flex-row items-center justify-between gap-4'>

                      <div className='flex items-center gap-5 border-1 border-[#FFC107] px-5 py-3 rounded-4xl w-full'>
                        <FontAwesomeIcon className='text-[#FFC107]' icon={faUser}/>
                        <input className='outline-none w-full' type="text" placeholder='Your name' />
                      </div>

                      <div className='flex items-center gap-5 border-1 border-[#FFC107] px-5 py-3 rounded-4xl w-full'>
                        <FontAwesomeIcon className='text-[#FFC107]' icon={faEnvelope}/>
                        <input className='outline-none w-full' type="email" placeholder='Your Email' />
                      </div>

                    </div>

                    <div className='flex items-center gap-5 border-1 border-[#FFC107] px-5 py-3 rounded-4xl w-full'>
                        <FontAwesomeIcon className='text-[#FFC107]' icon={faPen}/>
                        <input className='outline-none w-full' type="email" placeholder='Your Subject' />
                    </div>

                    <div className='relative'>
                      <FontAwesomeIcon className='text-[#FFC107] absolute top-4 left-5' icon={faMessage}/>

                      <textarea placeholder='Write your message' className='outline-none flex items-start gap-5 border-1 border-[#FFC107] px-14 py-3 rounded-4xl w-full h-24'>
                      </textarea>

                    </div>

                    <button className='bg-[#FFC107] p-3 rounded-4xl flex items-center justify-center hover:bg-[#c1564c] transition-colors'>
                        Send your message
                    </button>

                  </form>
                </div>

              </section>
            </div>

          </div>
          
          <section>
              <MapComponent/>
            </section>

        </div>


    </div>
  )
}
