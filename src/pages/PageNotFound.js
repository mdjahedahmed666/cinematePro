import React from 'react'
import PageNotFoundImg from '../assets/pagenotfound.avif'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404, Oops!</p>
          <div className='max-w-lg'>
            <img src={PageNotFoundImg} alt="404 page not found" />
          </div>
        </div>
        <div className='flex justify-center my-10'>
          <Link to="/">
            <button className='w-64 text-xl bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg px-5 py-3 mr-2 font-medium'>Back to cinematePro</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
