import React from 'react'
import Button from '../ui/Button'

const Intro = () => {
    return (

        <>
            {/* wrapper */}

            <div className='w-full flex items-center justify-center  px-15 mt-[90vh] mb-20 font-gwynerCondensedFont h-[500px]'>

                {/* left */}
                <div className=' w-1/2  h-full pr-10  flex items-start justify-center flex-col ' >
                    <p>--- About Us</p>
                    <h1 className='text-5xl font-light w-full mt-5'><span className='italic font-extralight ' >Empowering</span> Business And Individuals</h1>
                    <p className='mt-7 mb-7' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, ipsum reprehenderit iusto, vero, eligendi doloribus cumque earum ducimus sapiente adipisci doloremque repudiandae! Facilis explicabo molestiae fugiat </p> 
                    <Button label='About Us' href='/about' b_radius='10px' />
                </div>
                {/* right images*/}
                <div className='w-1/2 h-full flex items-center justify-between gap-7 ' >
                    <img src="/Intro1.jpg" className="w-1/2 object-cover overflow-hidden bg-gray-300 h-[90%] mb-20" />
                    <img src="/Intro2.jpg" className="w-1/2 object-cover overflow-hidden bg-gray-300 h-[90%] mt-10" />
                </div>
            </div>
        </>
    )
}

export default Intro