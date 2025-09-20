import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Breadcrumb from '../components/Breadcrumb'

const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Our Leadership' },
]
const partners = [
    {
        name: "Gagan Kinra",
        image: "/webp/GaganKinra.webp",
        phone: "+91 12345 67891",
        description:
            "He is the founding partner of Kinra & Associates and a Chartered Accountant with over 11 years of experience in Income Tax, Goods and Services Tax, Project Financing, Audit, and Business Consultancy. As a DISA-qualified professional, he has specialized expertise in Audit and holds certifications from ICAI. His work includes advisory and compliance services in taxation, business setup, and operational processes. He has handled Statutory, Concurrent, Revenue, Stock, Due Diligence, and Internal Audits for banks, government bodies, and private organizations, ensuring accurate financial reporting."
    },
    {
        name: "Bhavik Haribhai Rupapara",
        image: "/webp/PicBhavik.webp",
        phone: "+91 12345 67891",
        description:
            "With over 13 years of professional experience, he specializes in Income Tax, Project Finance, and Debt Restructuring. He is a registered Insolvency Professional with the IBBI and enrolled with NCLT. His work covers Corporate Insolvency Resolution Process (CIRP), Liquidation, and individual insolvency matters. In addition, he has handled Concurrent Audits, Stock Audits, Due Diligence, and Statutory Audits for banks and other organizations. His expertise ensures regulatory compliance and accurate financial and operational assessments across various sectors."
    },
    {
        name: "Abhinav Kumar",
        image: "/webp/PicAbhinav.webp",
        phone: "+91 12345 67891",
        description:
            "He has professional experience in corporate law, mergers, and acquisitions. His work includes advising on joint ventures, restructuring, and due diligence for corporate transactions. He assists organizations in complying with legal and regulatory requirements and supports preparation of necessary documentation for corporate matters. His professional services ensure businesses meet statutory obligations while addressing transactional and compliance needs. He focuses on accurate and practical application of corporate law in day-to-day operations, helping organizations manage legal responsibilities in mergers, acquisitions, and restructuring matters."
    },
    {
        name: "Ayush Saxena",
        image: "/webp/PicAyush.webp",
        phone: "+91 12345 67891",
        description:
            "He has professional experience in statutory and internal audits, and in direct and indirect taxation. His work includes financial and compliance assignments, forensic audits, and investigative engagements for regulatory bodies such as SEBI and SFIO. He has handled banking-related audits including statutory, concurrent, stock, and revenue audits. In addition, his work covers finance management and ROC compliances. His exposure combines regulatory understanding with technical application across practice areas, ensuring organizations meet compliance requirements and maintain accurate financial reporting."
    },
    {
        name: "Aditya A K",
        image: "/webp/PicAditya.webp",
        phone: "+91 12345 67891",
        description:
            "Qualified in 2023, he has professional experience in taxation, statutory audits, internal audits, GST compliance, bank audits, IFC audits, project reports, and financial planning. His work involves assisting organizations in meeting regulatory requirements and managing financial and compliance matters. He has contributed to assignments across diverse sectors, focusing on accurate execution within applicable legal and professional frameworks. His professional exposure combines technical knowledge with practical application, supporting organizations in addressing financial, compliance, and reporting responsibilities effectively and accurately."
    },
    {
        name: "Chetan Khurana",
        image: "/webp/PicChetan.webp",
        phone: "+91 12345 67891",
        description:
            "He has professional experience in Goods and Services Tax (GST) and direct taxes. His work includes preparing tax returns, handling tax assessments, appeals, and assisting in compliance with statutory tax requirements. He provides guidance on tax planning and ensures adherence to applicable laws and regulations. His services focus on supporting organizations and individuals in meeting taxation obligations accurately and on time. He helps maintain proper financial documentation and ensures compliance with statutory provisions, enabling clients to manage tax-related matters efficiently and within the legal framework."
    },
    {
        name: "Devansh Ji Vaishya",
        image: "/webp/PicDevansh.webp",
        phone: "+91 12345 67891",
        description:
            "He has professional experience in statutory audits, internal audits, and special purpose audits. His work includes examining financial statements, verifying compliance with accounting standards and regulations, and assisting organizations in maintaining accurate and reliable financial records. He supports proper audit procedures to ensure correctness and regulatory compliance. His services help organizations maintain transparency in reporting, improve internal controls, and achieve reliable financial documentation. His approach emphasizes detailed examination of financial data and adherence to professional standards across various audit and reporting assignments."
    }
];

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
