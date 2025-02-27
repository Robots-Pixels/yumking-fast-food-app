import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDoubleRight } from 'react-icons/fa'


export default function Hero(params) {

  const {title, height, imageUrl} = params;

  return (
        <section className='mb-20'> 
    
          <div className={`hero w-full relative`} style={{height: `${height}`, backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            
            <div className="absolute left-0 top-0 inset-0 bg-black opacity-60"></div>
    
            <div className='absolute w-full h-full text-white flex items-center justify-center flex-col gap-2'>
              <h2 className='text-5xl'> {title}</h2>
    
              <div className='text-xl flex items-center gap-2'>
                  <Link to={"/"} className='hover:text-[#FFC107] transition duration-300'>
                    Home 
                  </Link>
    
                  <span className=''><FaAngleDoubleRight/></span>
    
                  <p>{title}</p>
              </div>
    
    
            </div>
    
          </div>
    
        </section>
  )
}
