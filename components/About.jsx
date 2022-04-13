import React from 'react'

const title = process.env.NEXT_PUBLIC_ABOUT_TITLE ?? "";
const description = process.env.NEXT_PUBLIC_ABOUT_DESCRIPTION ?? "";

function About() {
  return (

    <section className='max-w-[1440px] px-5 md:px-20 mx-auto h-full flex flex-col items-center pt-20 md:pt-[140px]'>

      <h3 className='text-center text-[45px] leading-[50px] mb-7'>
        {title}
      </h3>
      
      <p className='max-w-[645px] mx-auto text-center text-xl leading-9 '>
        {description}
      </p>

    </section>

  )
}

export default About