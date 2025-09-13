import React from 'react'
import { assets } from '../../assets/assets'

const CoreValues = () => {
    return (
        <>

            {/* wrapper */}
            {/* <div className="w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-10 lg:px-15  my-20 font-gwynerCondensedFont h-auto lg:h-[500px] gap-10" >
                
                <div className="text-center w-full font-gwynerCondensedFont py-10 mt-0 md:mt-10 font-bold">
                    <h1 className="text-3xl md:text-5xl font-light w-full leading-tight">
                        <span className="italic font-extralight">Our</span> Core Values
                    </h1>
                    <p className="mt-2 font-light text-gray-700 w-full text-sm md:text-base">
                        Integrated Professional Services For Businesses and Individuals
                    </p>
                </div>
                <div className="w-full">
                    cards list here
                </div>

            </div> */}

            <div className="w-full flex items-center justigy-center">
                <div className="text-center w-full font-gwynerCondensedFont py-10 mt-0 md:mt-10 ">
                    <h1 className="text-3xl md:text-5xl font-light w-full leading-tight">
                        <span className="italic font-extralight">Our</span> Core Values
                    </h1>
                    <p className="mt-2 font-light text-gray-700 w-full text-sm md:text-base">
                        Our approach to every project is guided by the following principles
                    </p>
                    <div className="flex w-screen px-[10vw] mt-12 items-center justify-between  font-light text-gray-700 text-sm md:text-base">
                        <div className='flex flex-col items-center justify-center gap-2 hover:text-black p-5' >
                            <img src={assets.IntegrityIcon} className="w-20 " />
                            <p>Integrity</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 hover:text-black p-5' >
                            <img src={assets.ResponsibilityIcon} className="w-20 " />
                            <p>Responsibility</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 hover:text-black p-5' >
                            <img src={assets.TechnicalExcellenceIcon} className="w-20 " />
                            <p>Technical
                                Excellence</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 hover:text-black p-5' >
                            <img src={assets.IndependenceIcon} className="w-20 " />
                            <p>Independence</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 hover:text-black p-5' >
                            <img src={assets.StatewardshipIcon} className="w-20 " />
                            <p>Stewardship</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CoreValues