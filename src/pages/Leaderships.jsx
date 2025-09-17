import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Breadcrumb from '../components/Breadcrumb'

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'Our Leadership' },
]

const partners = [


  {
    // done
    name: "Gagan Kinra",
    image: "/webp/GaganKinra.webp", // Replace with actual image
    phone: "+91 12345 67891",
    description:
      "Being founding partner of Kinra & Associates he is a Trusted Chartered Accountant and brings over 11 years of rich professional experience in the fields of Income Tax, Goods & Service Tax, Project Financing, Audit, and Business Consultancy. As a DISA-qualified professional, he has specialized expertise in the field of Audit and also obtained various certifications related to the same by ICAI. He possesses in-depth knowledge of the laws, regulations, and the complex taxation system. He has guided numerous organizations in navigating complex taxation systems, setting up businesses, and streamlining operations. His audit exposure spans a wide spectrum including Statutory Audits, Concurrent Audits, Revenue Audits, Stock Audits, Due Diligence, and Internal Audits for multiple banks, government and private entities."
  },
  {
    // done
    name: "Bhavik Haribhai Rupapara",
    image: "",
    phone: "+91 12345 67891",
    description:
      "With over 13 years of experience, he is a seasoned professional specializing in Income Tax, Project Finance, and Debt Restructuring. He is a registered Insolvency Professional with the Insolvency and Bankruptcy Board of India (IBBI) and the National Company Law Tribunal (NCLT). Being an Insolvency Professional, he possesses extensive experience in various insolvency processes, including Corporate Insolvency Resolution Process (CIRP), Liquidation, and the Insolvency of Individuals. His expertise also extends to a wide range of audits, including Concurrent Audit, Stock Audit, Due Diligence, and Statutory Audits for multiple banks."
  },
  {
    name: "Abhinav Kumar",
    image: "",
    phone: "+91 12345 67891",
    description:
      "Abhinav Kumar brings a wealth of expertise in corporate law, mergers, and acquisitions, helping businesses grow strategically and navigate complex legal frameworks. He has advised clients on a wide range of corporate transactions, including joint ventures, restructuring, and due diligence. Abhinav’s analytical skills and thorough understanding of legal intricacies enable him to provide practical solutions tailored to each client’s unique needs. His dedication to excellence and ethical practice has earned him the trust of clients across various sectors."
  },
  {
    // done
    name: "Ayush Saxena",
    image: "",
    phone: "+91 12345 67891",
    description:
      "With extensive experience in statutory and internal audits and expertise in both direct and indirect taxation, he has successfully managed diverse financial and compliance assignments. His portfolio includes specialized forensic audits and investigative engagements with SEBI and SFIO, reflecting competence in handling high-stakes matters. He is also proficient in banking audits—covering statutory, concurrent, stock, and revenue audits—where his analytical skills ensure regulatory compliance. Beyond audit and assurance, he is well-versed in finance management and ROC compliances. This diverse exposure provides a strong blend of regulatory insight, technical expertise, and practical execution to deliver value-driven solutions"
  },
  {
    // done
    name: "Aditya A K",
    image: "",
    phone: "+91 12345 67891",
    description:
      "Being qualified in 2023, he works closely with clients across diverse professional areas, including taxation, statutory audits, internal audits, GST compliance and audits, bank audits, IFC audits, project reports, and financial planning. He is actively involved in understanding the unique requirements of each client and ensures accurate, timely, and effective execution of assignments. His approach emphasizes delivering practical solutions that align with regulatory frameworks while supporting clients in achieving their business objectives. By combining technical expertise with a client-centric focus, he offers dependable support, enabling businesses to address challenges effectively and build a strong foundation for sustainable growth."
  },
  {
    name: "Chetan Khurana",
    image: "",
    phone: "+91 12345 67891",
    description:
      "Chetan Khurana is renowned for his proficiency in GST, direct taxes, and representing clients before tax authorities. He has successfully handled numerous tax assessments, appeals, and litigation matters, providing clients with comprehensive tax solutions. Chetan’s in-depth knowledge of tax laws and his ability to interpret complex regulations enable him to deliver effective tax planning strategies. He is dedicated to helping clients minimize tax liabilities while ensuring full compliance with statutory requirements."
  },
  {
    name: "Devansh Ji Vaishya",
    image: "",
    phone: "+91 12345 67891",
    description:
      "Devansh Ji Vaishya leads the assurance practice at the firm, delivering quality audits and financial reporting solutions to clients across industries. He has extensive experience in statutory audits, internal audits, and special purpose audits. Devansh is committed to upholding the highest standards of audit quality and integrity, ensuring that clients’ financial statements are accurate and reliable. His analytical mindset and attention to detail make him a trusted advisor for clients seeking assurance on their financial reporting."
  }
]

const Leaderships = () => {
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
        <div className="text-center w-full   pt-10 font-bold px-4" data-aos="fade-up">
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
                  className={`accordion py-4 sm:py-6 w-full px-2 sm:px-6 md:px-10 cursor-pointer border-b border-gray-300 transition-all duration-500 ${openIndex === idx ? "bg-[#2b3780]/90 text-white rounded-lg" : ""
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
                    <h5 className="text-lg sm:text-xl md:text-2xl font-medium font-gwen-semibold">
                      {partner.name}
                    </h5>
                    <svg
                      className={`transition-transform duration-500 ${openIndex === idx ? "rotate-180" : ""
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
                    id={`partner-collapse-${idx}`}
                    className={`accordion-content w-full overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${openIndex === idx
                      ? "max-h-screen opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                      }`}
                    aria-labelledby={`partner-heading-${idx}`}
                  >
                    <div className="flex flex-col sm:flex-row gap-6 items-center border-t pt-5">
                      {/* Partner Image */}
                      <img
                        src={partner.image}
                        alt={`${partner.name} profile`}
                        className="w-28 h-32 sm:w-36 sm:h-40 md:w-44 md:h-48 rounded-xl object-cover border-1 border-white shadow-md"
                      />
                      {/* Partner Description */}
                      <p className="text-sm sm:text-base md:text-lg leading-6 text-justify">
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

export default Leaderships
