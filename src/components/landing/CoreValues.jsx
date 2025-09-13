import React from 'react'
import { assets } from '../../assets/assets'

const CoreValues = () => {
    const values = [
        { icon: assets.IntegrityIcon, label: "Integrity" },
        // { icon: assets.ResponsibilityIcon, label: "Responsibility" },
        { icon: assets.TechnicalExcellenceIcon, label: "Technical Excellence" },
        { icon: assets.IndependenceIcon, label: "Independence" },
        { icon: assets.StatewardshipIcon, label: "Stewardship" },
    ];

    return (
        <div className="w-full flex items-center justify-center px-6 md:px-10 lg:px-20">
            <div className="text-center w-full font-gwynerCondensedFont py-10 mt-0 md:mt-10">
                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-light w-full leading-tight">
                    <span className="italic font-extralight">Our</span> Core Values
                </h1>
                <p className="mt-2 font-light text-gray-700 w-full text-sm md:text-base">
                    Our approach to every project is guided by the following principles
                </p>

                {/* Responsive Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-12 font-light text-gray-700 text-sm md:text-base">
                    {values.map((val, i) => (
                        <div 
                            key={i} 
                            className="flex flex-col items-center justify-center gap-2 hover:text-black transition-colors p-4"
                        >
                            <img src={val.icon} alt={val.label} className="w-16 md:w-20" />
                            <p className="text-center">{val.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CoreValues
