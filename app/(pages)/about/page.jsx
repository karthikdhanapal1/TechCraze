"use client"

import { MoveRight } from 'lucide-react'
import { redirect } from 'next/dist/server/api-utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <>      
    <section 
        style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        className={`bg-[url('/banners/about_us.png')] h-[60%] p-6 mb-10`}>
          <div className={` mx-auto pt-10 pb-6 flex flex-col-reverse xl:flex-row`} >
            <div className="flex items-center justify-center w-full">
                  <div>
                    <p className="z-50 pb-8 text-3xl font-extrabold text-center text-white uppercase md:text-6xl">
                      About Us
                    </p>
                  </div>
            </div>
          </div>

        </section>

      <section className='flex-wrap justify-between py-8 my-10 md:flex px-28 bg-blue-50'>

          <Image
          src="/about/about.png"
          width={500}
          height={500}
          alt="Picture of the author"/>

          <div className='w-1/2 mt-5'>
            <p className='text-2xl font-semibold text-blue-600'>About Techcraze Technologies</p>
            <h1 className='pt-4 text-4xl font-bold'>We Are An Excellent Choice For Learning New Skills.</h1>
            <p className='pt-5 text-base'>Techcraze Technologies is a renowned online learning centre that provides a diverse selection of courses and programmes to students all over the world. With its emphasis on flexibility and assistance, Techcraze Technologies has become a popular choice for those who want to further their education or gain new skills.</p>
            <p className='pt-5 font-semibold'> Students have access to a variety of learning aids that are intended to help them completely comprehend and retain the subject.</p>
            <button className='p-3 text-white bg-blue-700 rounded-md mt-7'>Learn More<MoveRight className='inline-block pl-2'/></button>
          </div>
      </section>
      {/* <section className='flex '>
        <div className='w-1/2'>
          <p>Who is Kairaa?</p>
          <h1>Kairaa Is A Tech Company</h1>
          <p>Kairaa is the best company for serving tech solutions. We'll develop enterprise solutions using web 3.0 technologies. 
            Our solutions will aid in our clients management and business optimization. To assist our clients in achieving their business objectives,
             we can offer the best technological solutions.</p>

          <p>Kairaa is ready to find a solution for your innovative idea's.
             Our team of engineers is experienced in a wide range of technologies and can help you turn your vision into a reality.
              Our solutions are custom-tailored to your industry,
             so we make it easy to implement the right solution for your business.</p>

          <Link href={''}>Know More</Link>
        </div>
        <div className='flex'>
        <Image 
          className='hidden rounded-lg md:flex'
            src="/about/about_6.png"
            width={200}
            height={200}
            alt="Picture of the author"/>
            <Image 
          className='hidden rounded-lg md:flex'
            src="/about/about_5.png"
            width={300}
            height={300}
            alt="Picture of the author"/>

        </div>

      </section> */}

    </>
  )
}

export default About
