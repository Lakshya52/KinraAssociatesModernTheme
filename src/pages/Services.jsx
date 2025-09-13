import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ArrowRight } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'Our Services' },
]

const Services = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const services = [
    {
      link: "/accounting",
      img: assets.AccountingManagement,
      title: "Accounting & Financial Reporting",
      bg: "bg-[#9B7EBD80]",
    },
    {
      link: "/business_advisory",
      img: assets.FinanceOptimization,
      title: "Business Advisory",
      bg: "bg-gray-100",
    },
    {
      link: "/audit_and_assurance",
      img: assets.AuditAndAssurance,
      title: "Audit and Assurance",
      bg: "bg-[#74887380]",
    },
    {
      link: "/direct_indirect_tax",
      img: assets.TaxPlanningConsultancy,
      title: "Direct & Indirect Tax Advisory",
      bg: "bg-[#A3DC9A80]",
    },
    {
      link: "/compliance_support",
      img: assets.CorporateCompliance,
      title: "Regulatory & Compliance Support",
      bg: "bg-[#98A1BC80]",
    },
    {
      link: "/specialized_services",
      img: assets.EducationIcon,
      title: "Specialized Advisory Services",
      bg: "bg-[#D1A98080]",
    },
  ]

  return (
    <>


      <div className="min-h-screen w-full relative">
        {/* Diagonal Stripes Background */}
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
          }}
        />
        {/* Your Content/Components */}
        {/* Page Heading */}
        <div className="text-center w-full font-gwynerCondensedFont pt-10 font-bold px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light w-full leading-snug">
            Our Services
          </h1>
          <p className="flex items-center justify-center w-full font-light mt-3">
            <Breadcrumb items={breadcrumbItems} />
          </p>
        </div>

        {/* Services Grid */}
        <div className="w-screen flex items-center justify-center mt-6 pb-15  px-4">
          <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link
                to={service.link}
                key={idx}
                onClick={handleScrollTop}
                className={`${service.bg} rounded-2xl shadow-md hover:shadow-lg hover:border-black border border-gray-100 transition-all p-6 flex flex-col items-center justify-center group`}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-15 w-15 mt-7"
                />
                <h2 className="font-poppins-bold text-lg text-center w sm:text-xl mt-5">
                  {service.title}
                </h2>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center mt-2">
                  {/* View More */} <ArrowRight className="" />  
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>







    </>
  )
}

export default Services
