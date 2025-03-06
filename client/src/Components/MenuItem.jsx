import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function MenuItem({imageUrl = "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2023/12/thumb.jpg", price="50.00", name="Roasted Beef", description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut accusantium pariatur odio quo.", mark="5.0", n_comments="1.6k"}) {
  return (
    <Link to={"/booking"} className='p-5 bg-white rounded-4xl menuItem transition-transform'>

        <div className='flex items-center justify-between gap-4'>
            <div className='w-32 h-32 bg-center bg-cover rounded-full' style={{backgroundImage: `url(${imageUrl})`}}>
            </div>

            <b className='text-3xl text-[#FFC107]'>${price}</b>
            
        </div>

        <div className='text-content'>

            <h2 className='text-2xl mb-3'>{name}</h2>

            <p className='text-sm mb-3'>{description}</p>
            
            <div className='flex gap-4'>
                <div className='flex gap-2 text-xl text-[#550000] mb-4'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                <div>{mark} ({n_comments})</div>
            </div>

        </div>

    </Link>
  )
}
