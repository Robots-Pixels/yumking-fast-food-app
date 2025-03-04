import React from 'react'

export default function Summary({submitted, countryCode, telephone, guest, day, time, message}) {

  return (
    <section 
    className="fixed z-20 left-0 w-full py-10 bg-black flex items-center justify-center text-white transition-transform duration-1000 ease-in-out summary-section"
    style={{
    transform: `translateY(${submitted ? "0%" : "100%"})`,
  }}
>       
        <div className='flex flex-col items-center gap-1'>

            <h2 className='section-title text-4xl text-[rgb(255,193,7)]'>
                Order Summary
            </h2>

            <h3 className='text-3xl mb-3'>
                Review your order
            </h3>

            <div className='flex flex-col gap-1 text-center'>
                <h3> <span className='text-[rgb(255,193,7)]' >Your Phone Number </span> : {`${countryCode} ${telephone}`}</h3>
                <h3> <span className='text-[rgb(255,193,7)]' >Number of guests </span> : {guest}</h3>
                <h3> <span className='text-[rgb(255,193,7)]' >Date </span> : {day} for {time}</h3>

                { (message !== "") && <h3 className='mb-2'> <span className='text-[rgb(255,193,7)]' >Particular Request </span> : {message} </h3>}

                <button className="bg-[#FFC107] p-3 rounded-4xl flex items-center justify-center hover:bg-[#c1564c] transition-colors">
                    Confirm Order
                </button>

            </div>

        </div>
    </section>
  )
}
