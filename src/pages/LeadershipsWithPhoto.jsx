import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Breadcrumb from '../components/Breadcrumb'

const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Our Leadership' },
]

const partners = [


    // done
    // gagan kinra
    {
        name: "Gagan Kinra",
        image: "/webp/GaganKinra.webp", // Replace with actual image
        phone: "+91 12345 67891",
        description:
            "He is the founding partner of Kinra & Associates and a Chartered Accountant with over 11 years of professional experience in the fields of Income Tax, Goods and Services Tax, Project Financing, Audit, and Business Consultancy. As a DISA-qualified professional, he has specialized expertise in the area of Audit and has obtained certifications in this field from ICAI. His professional experience includes advisory and compliance services in taxation, business setup, and operational processes. He has handled Statutory Audits, Concurrent Audits, Revenue Audits, Stock Audits, Due Diligence, and Internal Audits for banks, government bodies, and private organizations."
    },
    // done
    // bhavik haribhai rupapara
    {
        name: "Bhavik Haribhai Rupapara",
        image: "/webp/PicBhavik.webp",
        phone: "+91 12345 67891",
        description:
            "With over 13 years of professional experience, he specializes in Income Tax, Project Finance, and Debt Restructuring. He is a registered Insolvency Professional with the Insolvency and Bankruptcy Board of India (IBBI) and is enrolled with the National Company Law Tribunal (NCLT). His professional work covers various insolvency processes, including Corporate Insolvency Resolution Process (CIRP), Liquidation, and individual insolvency matters. In addition, he has handled audits such as Concurrent Audits, Stock Audits, Due Diligence, and Statutory Audits for banks and other organizations."
    },



    {
        name: "Abhinav Kumar",
        image: "/webp/PicAbhinav.webp",
        phone: "+91 12345 67891",
        description:
            "Abhinav Kumar brings a wealth of expertise in corporate law, mergers, and acquisitions, helping businesses grow strategically and navigate complex legal frameworks. He has advised clients on a wide range of corporate transactions, including joint ventures, restructuring, and due diligence. Abhinav’s analytical skills and thorough understanding of legal intricacies enable him to provide practical solutions tailored to each client’s unique needs. His dedication to excellence and ethical practice has earned him the trust of clients across various sectors."
    },



    // done
    // Ayush saxena
    {
        name: "Ayush Saxena",
        image: "/webp/PicAyush.webp",
        phone: "+91 12345 67891",
        description:
            "He has professional experience in statutory and internal audits and in the areas of direct and indirect taxation. His work includes financial and compliance assignments, as well as forensic audits and investigative engagements for regulatory bodies such as SEBI and SFIO. He has handled banking-related audits including statutory, concurrent, stock, and revenue audits. In addition to audit and assurance, his work also covers finance management and ROC compliances. His professional exposure combines regulatory understanding with technical application across different areas of practice."
    },
    // done
    // aditya a k
    {
        name: "Aditya A K",
        image: "/webp/PicAditya.webp",
        phone: "+91 12345 67891",
        description:
            "Qualified in 2023, he has professional experience in taxation, statutory audits, internal audits, GST compliance and audits, bank audits, IFC audits, project reports, and financial planning. His work involves assisting organizations in meeting regulatory requirements and managing financial and compliance matters. He has contributed to assignments across diverse sectors, focusing on accurate execution within applicable legal and professional frameworks. His professional exposure combines technical knowledge with practical application to support organizations in addressing financial and regulatory responsibilities."
    },



    {
        name: "Chetan Khurana",
        image: "/webp/PicChetan.webp",
        phone: "+91 12345 67891",
        description:
            "Chetan Khurana is renowned for his proficiency in GST, direct taxes, and representing clients before tax authorities. He has successfully handled numerous tax assessments, appeals, and litigation matters, providing clients with comprehensive tax solutions. Chetan’s in-depth knowledge of tax laws and his ability to interpret complex regulations enable him to deliver effective tax planning strategies. He is dedicated to helping clients minimize tax liabilities while ensuring full compliance with statutory requirements."
    },
    {
        name: "Devansh Ji Vaishya",
        image: "/webp/PicDevansh.webp",
        phone: "+91 12345 67891",
        description:
            "Devansh Ji Vaishya leads the assurance practice at the firm, delivering quality audits and financial reporting solutions to clients across industries. He has extensive experience in statutory audits, internal audits, and special purpose audits. Devansh is committed to upholding the highest standards of audit quality and integrity, ensuring that clients’ financial statements are accurate and reliable. His analytical mindset and attention to detail make him a trusted advisor for clients seeking assurance on their financial reporting."
    }
]

const LeadershipsWithPhoto = () => {
    const [openIndex, setOpenIndex] = useState(0)

    const handleToggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx) // allow toggle open/close
    }

    return (
        <>
            <div className="min-h-screen w-full  relative">
                {/* Diagonal Stripes Background */}
                <div
                    className="absolute inset-0 z-[-1]"
                    style={{
                        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
                    }}
                />
                {/* Your Content/Components */}
                {/* Page Title */}
                <div className="text-center w-full pt-10 font-bold px-4" data-aos="fade-up">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-light w-full leading-snug font-gwen-semibold">
                        Meet Our Partners
                    </h1>
                    <div className="flex items-center justify-center w-full font-light mt-3">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                </div>

                {/* Content Box */}
                <div className="w-full flex justify-center items-center  px-4" data-aos="fade-up" data-aos-delay="500">
                    <div className="w-full sm:w-[90%] flex flex-col justify-between items-center h-fit sm:bg-gray-100 rounded-xl sm:shadow-xl shadow-[#5a6bdd]/10 border border-[#2c2c2c]/50 px-4 sm:px-10 md:px-20 py-6 sm:py-10 my-6 mb-15 text-base sm:text-lg">
                        {/* Accordion */}
                        <section className="w-full">
                            {partners.map((partner, idx) => (
                                <div
                                    key={partner.name}
                                    className={` ${openIndex === idx ? " px-4 py-4" : "sm:hover:bg-blue-900/50 cursor-pointer"}  rounded accordion py-2 sm:py-4 w-full  sm:px-6 md:px-10  border-b border-gray-300  transition-all duration-300 ${openIndex === idx ? "bg-[#2b3780]/90 text-white rounded-lg" : ""
                                        }`}
                                    id={`partner-heading-${idx}`}
                                >
                                    {/* Accordion Toggle */}
                                    <button
                                        className="accordion-toggle flex items-center justify-between w-full text-left"
                                        aria-controls={`partner-collapse-${idx}`}
                                        aria-expanded={openIndex === idx}
                                        onClick={() => handleToggle(idx)}
                                    >
                                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 md:gap-10 cursor-pointer w-full sm:w-auto py-2 sm:py-0 transition-colors duration-200 rounded-md">
                                            <img 
                                                src={partner.image} 
                                                className={`h-auto w-20 sm:w-16 md:w-20 border-[#2c2c2c]/50 border  rounded-lg shadow-sm ${openIndex === idx ? "hidden" : "block"} transition-all duration-200`} 
                                                style={{boxShadow: '0 2px 8px 0 rgba(44,55,128,0.08)'}}
                                            />
                                            {/* Divider for mobile */}
                                            {/* <div className="block sm:hidden w-full h-0.5 bg-blue-900/20  rounded-full" /> */}
                                            <h5 className="text-lg sm:text-xl md:text-2xl font-medium font-gwen-semibold text-center sm:text-left w-full sm:w-auto tracking-wide">
                                                {partner.name}
                                            </h5>
                                        </div>
                                        <svg
                                            className={`${openIndex === idx ? "block" : "hidden"} sm:block transition-transform duration-500 ${openIndex === idx ? "rotate-180" : ""
                                                }`}
                                            width={22}
                                            height={22}
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>

                                    {/* Accordion Content */}
                                    <div
                                        className={`accordion-content w-full transition-opacity duration-500 ease-in-out ${openIndex === idx
                                            ? "opacity-100 mt-4 visible"
                                            : "opacity-0 invisible h-0 p-0 m-0"
                                            }`}
                                        aria-labelledby={`partner-heading-${idx}`}
                                        style={openIndex === idx ? {maxHeight: 'none', overflow: 'visible'} : {maxHeight: 0, overflow: 'hidden'}}
                                    >
                                        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start border-t pt-5">
                                            {/* Partner Image */}
                                            <img
                                                src={partner.image}
                                                alt={`${partner.name} profile`}
                                                className="sm:w-48 w-[60%] sm:h-48 h-[60%] rounded-xl object-cover border-1 border-white shadow-md"
                                            />
                                            {/* Partner Description */}
                                            <p className="text-sm sm:text-base md:text-lg leading-6 text-justify break-words whitespace-pre-line">
                                                {partner.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </div>



        </>
    )
}

export default LeadershipsWithPhoto
