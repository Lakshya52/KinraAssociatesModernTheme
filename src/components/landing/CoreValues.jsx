import React from 'react'
import { assets } from '../../assets/assets'

const CoreValues = () => {
    const values = [
        { icon: assets.IntegrityIcon, label: "Integrity", delay: 100 },
        { icon: assets.ResponsibilityIcon, label: "Responsibility", delay: 150  },
        { icon: assets.ConfidentialityIcon, label: "Confidentiality", delay: 200  },
        { icon: assets.IndependenceIcon, label: "Independence", delay: 250 },
        { icon: assets.TechnicalExcellenceIcon, label: "Professional Competency", delay: 300 },
        // { icon: assets.StatewardshipIcon, label: "Stewardship", delay: 400 },
    ];

    return (
        <>
            <style>{`
                /* Use a CSS variable for the wrapper gap so we can compute exact flex-basis values
                   that match the Tailwind gap utilities (gap-4 = 1rem, md:gap-8 = 2rem).
                   This ensures two-per-row on the smallest screens and five-per-row at >=1365px. */
                .core-values-wrapper { --cv-gap: 1rem; }

                .core-values-wrapper .core-value-item {
                    box-sizing: border-box;
                    min-width: 0;
                    /* two items per row: subtract one gap */
                    flex: 0 0 calc((100% - var(--cv-gap)) / 2);
                }

                @media (min-width: 640px) { /* sm: three items per row; there are 2 gaps between them */
                    .core-values-wrapper .core-value-item {
                        flex: 0 0 calc((100% - (var(--cv-gap) * 2)) / 3);
                    }
                }

                @media (min-width: 768px) { /* md: Tailwind switches gap to 2rem (gap-8) */
                    .core-values-wrapper { --cv-gap: 2rem; }
                }

                @media (min-width: 1365px) { /* large screens: five items in one row; 4 gaps between them */
                    .core-values-wrapper .core-value-item {
                        flex: 0 0 calc((100% - (var(--cv-gap) * 4)) / 5);
                    }
                }
            `}</style>

        <div className="w-full flex items-center justify-center px-6 md:px-10 lg:px-20 mt-10" >
            <div className="text-center w-full py-10 mt-0 md:my-10" data-aos="fade-up">
                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-light w-full leading-tight font-gwen-semibold " >
                    Our Core Values
                </h1>
                <p className="mt-2 font-light text-gray-700 w-full text-sm md:text-base font-gwen-semibold "  data-aos-delay="100">
                    Our approach to every project is guided by the following principles
                </p>

                {/* Responsive Flex layout: 2 per row on smallest screens, 3 on small, 5 on large.
                    Using flex-wrap + justify-center ensures that if a row has fewer items (e.g. last row),
                    the items are centered horizontally. Handles missing icons gracefully. */}
                <div className="core-values-wrapper flex flex-wrap justify-center gap-4 md:gap-8 mt-12 font-light text-gray-700 text-sm md:text-base">
                    {values.map((val, i) => (
                        <div
                            key={i}
                            className="core-value-item flex flex-col items-center justify-center gap-2 hover:text-black transition-colors p-4"
                            data-aos="fade-up"
                            data-aos-delay={val.delay}
                        >
                            {val.icon ? (
                                <img src={val.icon} alt={val.label} className="w-16 h-auto md:w-20 max-w-full" />
                            ) : (
                                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gray-100 rounded-full" aria-hidden="true" />
                            )}
                            <p className="text-center font-semibold">{val.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default CoreValues
