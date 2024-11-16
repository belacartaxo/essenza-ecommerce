import React from 'react'
import img1 from "../assets/img/woman-autumn.png"

const Home = () => {
  return (
    <div className=''>
      <div className='flex h-screen bg-brownC mt-16 p-padding4'>
        <div>
          <h1 className='text-white text-2xl font-bold'>Autumn Collection: Embrace the Season in Style</h1>
          <p className='text-white'>Step into the cozy allure of autumn with our exclusive collection. From warm hues to timeless layers, discover pieces crafted to make every moment of this season unforgettable. Let the rich colors and textures of fall redefine your wardrobe.</p>
        </div>
        <img src={img1} className='h-[600px]' alt="" />
      </div>
    
    </div>
  )
}

export default Home
