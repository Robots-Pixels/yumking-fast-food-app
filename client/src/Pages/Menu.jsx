import React, { useState } from 'react'
import Hero from '../Components/Hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPlateWheat,
  faBowlFood,
  faUtensils,
  faBowlRice,
  faCake
} from '@fortawesome/free-solid-svg-icons'
import MenuItem from '../Components/MenuItem.jsx'

export default function Menu() {

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

    <div className='bg-[#ffe0d9]'>
      
      <Hero title={"Menu"} height={"500px"} imageUrl={"https://buildeo.co.uk/wp-content/uploads/2021/12/Modern-Fast-food-Restaurant-Interior-Design-and-Renovation.jpg"}/>

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


    </div>
  
  )
}
