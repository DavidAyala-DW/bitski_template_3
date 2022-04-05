import React from 'react'
import CustomProductViewer from './CustomProductViewer';

const topText = process.env.NEXT_PUBLIC_MAIN_TOP_TEXT ?? "";
const headline = process.env.NEXT_PUBLIC_MAIN_HEADLINE ?? "";
const description = process.env.NEXT_PUBLIC_MAIN_DESCRIPTION ?? "";

function Main({featuredProduct}) {
  return (

    <section className='w-full max-w-[1440px] px-5 md:px-20 mx-auto h-full flex flex-col justify-center items-center'>

      <div className='max-w-[608px] mx-auto w-full'>
        <CustomProductViewer product={featuredProduct} />
      </div>

    </section>
  )
}

export default Main