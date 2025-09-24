import React from 'react'
import Header from '../components/Header'
import bg from '../assets/bg.png'


const Home = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="h-[90vh] flex flex-col justify-center items-center text-center gap-5 text-black"
      >
        <h1 className='text-3xl'>Welcome to Jarurat Care</h1>
        <p className='text-xl font-light px-10'>Providing support, guidance, hope and personalized care for cancer patients and their families. Here to ensure you never face your journey alone.</p>

        <div className='flex gap-5'>
       <button className='border px-8 py-2 rounded-2xl bg-blue-200'><Link to='/patient'>Go to Patients</Link></button>
        <button className='bold border px-8 py-2 rounded'><Link to='/about'>Learn More</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Home
