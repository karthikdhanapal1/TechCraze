import Image from 'next/image'
import React from 'react'

function AboutSection() {
  return (
    <section className='px-5 md:flex justify-between md:my-10 md:px-28 py-5'>
          <Image
          src="/about/about.png"
          width={500}
          height={500}
          alt="Picture of the author"/>

          <div className='md:w-1/2 mt-5 text-center pt-3'>
            <p className='md:text-2xl font-semibold text-blue-600'>About TechCraze Technologies</p>
            <h1 className='text-3xl md:text-4xl font-bold'>We Are An Excellent Choice For Learning New Skills.</h1>
            <p className='pt-5 text-base'>TechCraze Technologies is a renowned online learning institution that provides a diverse range of courses and programs to students all over the world. TechCraze Technologies' emphasis on flexibility and support has made it a popular alternative for people wishing to further their education or learn new skills.</p>
            <p className='pt-5 font-semibold'> Students have access to a variety of learning aids that are intended to help them completely comprehend and retain the subject.</p>
          </div>
      </section>
  )
}

export default AboutSection

