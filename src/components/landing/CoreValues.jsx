import React from 'react'
import { assets } from '../../assets/assets'

const CoreValues = () => {
    const values = [
        { icon: assets.IntegrityIcon, label: "Integrity", delay: 100 },
        { icon: assets.ResponsibilityIcon, label: "Responsibility", delay: 150  },
        { icon: assets.ConfidentialityIcon, label: "Confidentiality", delay: 200  },
        { icon: assets.TechnicalExcellenceIcon, label: "Technical Excellence", delay: 250 },
        { icon: assets.IndependenceIcon, label: "Independence", delay: 300 },
        // { icon: assets.StatewardshipIcon, label: "Stewardship", delay: 400 },
    ];

    return (
        <div className="w-full flex items-center justify-center px-6 md:px-10 lg:px-20 mt-10" >
            <div className="text-center w-full py-10 mt-0 md:my-10" data-aos="fade-up">
                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-light w-full leading-tight font-gwen-semibold " >
                    Our Core Values
                </h1>
                <p className="mt-2 font-light text-gray-700 w-full text-sm md:text-base font-gwen-semibold "  data-aos-delay="100">
                    Our approach to every project is guided by the following principles
                </p>

                {/* Responsive Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 mt-12 font-light text-gray-700 text-sm md:text-base" >
                    {values.map((val, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center gap-2 hover:text-black transition-colors p-4"  data-aos="fade-up" data-aos-delay={val.delay}
                        >
                            <img src={val.icon} alt={val.label} className="w-16 md:w-20" />
                            <p className="text-center font-semibold">{val.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CoreValues
