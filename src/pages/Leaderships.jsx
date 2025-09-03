import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Breadcrumb from '../components/Breadcrumb'

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'Our Leaderships' },
]

const partners = [
  {
    name: "Gagan Kinra",
    image: "https://via.placeholder.com/150", // Replace with actual image
    phone: "+91 12345 67891",
    description:
      "Gagan Kinra is a member of the Institute of Chartered Accountants of India (ICAI) since 2014. Gagan has vast knowledge and a thorough understanding of Indian laws and regulations, as well as the complex corporate taxation system. He has helped many organisations to set up business in India and operating it smoothly. He and his team have assisted many entities in completing paperwork, getting necessary approvals, paying taxes, necessary filings and much more."
  },
  {
    name: "Bhavik Haribhai Rupapara",
    image: "https://via.placeholder.com/150",
    phone: "+91 12345 67891",
    description:
      "Bhavik Haribhai Rupapara specializes in financial consulting and compliance, ensuring that clients consistently meet all regulatory requirements. With a strong background in accounting and finance, Bhavik has helped organizations streamline their financial processes and improve operational efficiency. He is adept at handling complex compliance matters, including GST, income tax, and company law. Bhavik’s proactive approach and deep understanding of the regulatory landscape make him a valuable asset to clients seeking reliable financial guidance and support."
  },
  {
    name: "Abhinav Kumar",
    image: "https://via.placeholder.com/150",
    phone: "+91 12345 67891",
    description:
      "Abhinav Kumar brings a wealth of expertise in corporate law, mergers, and acquisitions, helping businesses grow strategically and navigate complex legal frameworks. He has advised clients on a wide range of corporate transactions, including joint ventures, restructuring, and due diligence. Abhinav’s analytical skills and thorough understanding of legal intricacies enable him to provide practical solutions tailored to each client’s unique needs. His dedication to excellence and ethical practice has earned him the trust of clients across various sectors."
  },
  {
    name: "Aditya A K",
    image: "https://via.placeholder.com/150",
    phone: "+91 12345 67891",
    description:
      "Aditya A K focuses on risk management and internal controls, playing a crucial role in safeguarding client interests at every step of their business journey. He has designed and implemented robust internal control systems for organizations of all sizes, helping them mitigate risks and achieve compliance with industry standards. Aditya’s expertise extends to forensic audits, fraud detection, and process optimization. His commitment to integrity and transparency ensures that clients receive reliable advice and effective risk management solutions."
  },
  {
    name: "Chetan Khurana",
    image: "https://via.placeholder.com/150",
    phone: "+91 12345 67891",
    description:
      "Chetan Khurana is renowned for his proficiency in GST, direct taxes, and representing clients before tax authorities. He has successfully handled numerous tax assessments, appeals, and litigation matters, providing clients with comprehensive tax solutions. Chetan’s in-depth knowledge of tax laws and his ability to interpret complex regulations enable him to deliver effective tax planning strategies. He is dedicated to helping clients minimize tax liabilities while ensuring full compliance with statutory requirements."
  },
  {
    name: "Devansh Ji Vaishya",
    image: "https://via.placeholder.com/150",
    phone: "+91 12345 67891",
    description:
      "Devansh Ji Vaishya leads the assurance practice at the firm, delivering quality audits and financial reporting solutions to clients across industries. He has extensive experience in statutory audits, internal audits, and special purpose audits. Devansh is committed to upholding the highest standards of audit quality and integrity, ensuring that clients’ financial statements are accurate and reliable. His analytical mindset and attention to detail make him a trusted advisor for clients seeking assurance on their financial reporting."
  },
  {
    name: "Ayush Saxena",
    image: "https://via.placeholder.com/150",
    phone: "+91 12345 67891",
    description:
      "Ayush Saxena provides expert advisory on international taxation and cross-border transactions for global clients. He has assisted multinational corporations in structuring their operations to optimize tax efficiency and comply with international tax regulations. Ayush’s expertise includes transfer pricing, double taxation avoidance agreements, and expatriate taxation. His global perspective and thorough understanding of international tax laws enable him to deliver tailored solutions that address the unique challenges faced by clients operating in multiple jurisdictions."
  }
]

const Leaderships = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx) // allow toggle open/close
  }

  return (
    <>
      {/* Page Title */}
      <div className="text-center w-full font-gwynerCondensedFont py-10 mt-10 font-bold px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-snug">
          Meet Our Partners
        </h1>
        <div className="flex items-center justify-center w-full font-light mt-3">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Content Box */}
      <div className="w-full flex justify-center items-center font-playfair-display px-4">
        <div className="w-full sm:w-[90%] flex flex-col justify-between items-center h-fit sm:bg-gray-100 rounded-xl sm:shadow-xl shadow-[#5a6bdd]/10 border border-[#2c2c2c]/50 px-4 sm:px-10 md:px-20 py-6 sm:py-10 my-6 sm:my-10 text-base sm:text-lg">
          {/* Accordion */}
          <section className="w-full">
            {partners.map((partner, idx) => (
              <div
                key={partner.name}
                className={`accordion py-4 sm:py-6 w-full px-2 sm:px-6 md:px-10 cursor-pointer border-b border-gray-300 transition-all duration-500 ${
                  openIndex === idx ? "bg-amber-800/90 text-white rounded-lg" : ""
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
                  <h5 className="text-lg sm:text-xl md:text-2xl font-medium">
                    {partner.name}
                  </h5>
                  <svg
                    className={`transition-transform duration-500 ${
                      openIndex === idx ? "rotate-180" : ""
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
                  className={`accordion-content w-full overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                    openIndex === idx
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
                      className="w-28 h-32 sm:w-36 sm:h-40 md:w-44 md:h-48 rounded-xl object-cover border-2 border-white shadow-md"
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
    </>
  )
}

export default Leaderships
