import React, { useState } from 'react'
import { X } from 'lucide-react';
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

const Leaderships = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const cardRefs = React.useRef([]);

    const handleToggle = (idx) => {
        if (openIndex !== idx) {
            setOpenIndex(idx);
            setTimeout(() => {
                if (cardRefs.current[idx]) {
                    cardRefs.current[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 200);
        } else {
            setOpenIndex(null);
        }
    }

    return (
        <>
            <div className="min-h-screen w-full  relative">
                {/* Diagonal Stripes Background */}
                <div
                    className="absolute inset-0 z-[-1]"
                    style={{
                        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
                    }} />
                {/* Your Content/Components */}


                {/* Page Title */}
                <div className="text-center w-full   pt-10 font-bold px-4" data-aos="fade-up">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-light w-full leading-snug font-gwen-semibold">
                        Meet Our Partners
                    </h1>
                    <div className="flex items-center justify-center w-full font-light mt-3">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                </div>


                {/* Content Box - Partners Grid */}
                <div className="w-full flex justify-center items-center px-4" data-aos="fade-up" data-aos-delay="500">
                    <div className="w-full sm:w-[90%] flex flex-col justify-between items-center h-fit sm:bg-gray-100 rounded-xl sm:shadow-xl shadow-[#5a6bdd]/10 border border-[#2c2c2c]/50 px-4 sm:px-10 md:px-20 py-6 sm:py-10 my-6 mb-15 text-base sm:text-lg">
                        <section className="w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                                {partners.map((partner, idx) => (
                                    <div
                                        key={partner.name}
                                        ref={el => cardRefs.current[idx] = el}
                                        className={`flex flex-col items-center justify-center cursor-pointer rounded-xl border border-gray-200 p-4 transition-all duration-500 relative overflow-hidden
                                            ${openIndex === idx ? 'bg-[#2b3780]/90 text-white col-span-2 scale-[1.03] shadow-2xl z-10' : 'bg-white hover:bg-[#2b3780]/90 hover:text-white shadow-md hover:shadow-xl'}
                                            ${openIndex === idx ? 'min-h-[340px]' : 'min-h-[220px]'}
                                        `}
                                        style={{ boxShadow: openIndex === idx ? '0 8px 32px 0 rgba(44,55,128,0.25)' : undefined }}
                                        onClick={() => handleToggle(idx)}
                                    >
                                        {/* Only show image and name if not expanded */}
                                        {openIndex !== idx && (
                                            <>
                                                <img
                                                    src={partner.image}
                                                    alt={`${partner.name} profile`}
                                                    className="w-32 h-32 rounded-full object-cover border-2 border-[#2b3780] shadow-lg mb-3 transition-all duration-500"
                                                />
                                                <h5 className="text-lg sm:text-xl font-gwen-semibold text-center">
                                                    {partner.name}
                                                </h5>
                                            </>
                                        )}
                                        {/* Show details if openIndex === idx */}
                                        {openIndex === idx && (
                                            <div className="w-full flex flex-col items-center animate-fadeIn">
                                                <button
                                                    className="absolute top-3 right-3 text-white bg-[#1a2250] hover:bg-[#10153a] rounded-full p-1 shadow-md z-20 flex items-center justify-center"
                                                    style={{ width: 32, height: 32 }}
                                                    onClick={e => { e.stopPropagation(); setOpenIndex(null); }}
                                                    aria-label="Close profile"
                                                >
                                                    <X size={20} />
                                                </button>
                                                <img
                                                    src={partner.image}
                                                    alt={`${partner.name} profile`}
                                                    className="w-40 h-48 rounded-xl object-cover border-2 border-white shadow-md mb-3 transition-all duration-500"
                                                />
                                                <h5 className="text-xl font-gwen-semibold mb-2 text-center">{partner.name}</h5>
                                                <p className="text-sm sm:text-base md:text-lg leading-6 text-justify mt-2">
                                                    {partner.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>


            </div>



        </>
    )
}

export default Leaderships
