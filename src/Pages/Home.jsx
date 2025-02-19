import React from 'react'

const Home = () => {

    const mapStyle = {
        border: 0,
      }
    
      return (
        <section name='about' className='bg-white flex flex-col md:flex-row ml-7'>
          {/* Left side data */}
          <main className='w-full mt-10 md:w-1/2 py-10 md:py-40 px-4'>
            {/* Title section */}
            <h1 className='text-3xl md:text-4xl font-bold text-center py-4'>Trusted by developers across the world</h1>
            <p className='text-justify text-base md:text-lg text-gray-900 pb-4 ml-10 mr-9'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellat soluta modi reprehenderit vitae dolorum molestias perferendis odit,
              voluptate corrupti suscipit esse.
            </p>
            <br />
    
            {/* Card section */}
            <div className='w-full md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center'>
              <div className='border border-gray-100 hover:scale-95 duration-500 bg-slate-50 shadow-lg drop-shadow-xl rounded-lg mt-2 p-2 space-y-2'>
                <h1 className='text-3xl md:text-4xl text-[#00b41d] font-bold'>100%</h1>
                <p className='text-gray-600'>Completion</p>
              </div>
              <div className='border border-gray-100 hover:scale-95 duration-500 bg-slate-50 shadow-lg drop-shadow-xl rounded-lg mt-2 p-2 space-y-2'>
                <h1 className='text-3xl md:text-4xl text-[#00b41d] font-bold'>24/7</h1>
                <p className='text-gray-600'>Delivery</p>
              </div>
              <div className='border border-gray-100 hover:scale-95 duration-500 bg-slate-50 rounded-lg mt-2 shadow-lg drop-shadow-xl p-2 space-y-2'>
                <h1 className='text-3xl md:text-4xl text-[#00b41d] font-bold'>100K</h1>
                <p className='text-gray-600'>Transaction</p>
              </div>
            </div>
          </main>
    
          {/* Right side Google Map */}
          <div className='w-full md:w-1/2 h-96 mt-8 md:mt-24 mr-0 md:mr-7'>
            {/* Replace with your Google Map embed code */}
            <iframe className=' rounded-xl'
              src="https://www.google.com/maps/embed/v1/place?q=Superior+University+Gold+Campus&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              width="100%"
              height="100%"
              style={mapStyle}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Superior University Gold Campus"
            ></iframe>
          </div>
        </section>
  )
}

export default Home