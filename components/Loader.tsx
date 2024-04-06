
import Image from 'next/image'
import React from 'react'


const Loader = () => {
  return (
    <section className='flex-center h-screen w-full'>
        <Image
            src={"/icons/loading-circle.svg"}
            alt='loading'
            width={50}
            height={50}
        />
    </section>
  )
}

export default Loader