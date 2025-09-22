import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ArrowRight } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import { ExternalLink, Plus } from 'lucide-react'

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
      bg: "[#9B7EBD80]",
    },
    {
      link: "/business_advisory",
      img: assets.FinanceOptimization,
      title: "Business Advisory",
      bg: "gray-100",
    },
    {
      link: "/audit_and_assurance",
      img: assets.AuditAndAssurance,
      title: "Audit and Assurance",
      bg: "[#74887380]",
    },
    {
      link: "/direct_indirect_tax",
      img: assets.TaxPlanningConsultancy,
      title: "Direct & Indirect Tax Advisory",
      bg: "[#A3DC9A80]",
    },
    {
      link: "/compliance_support",
      img: assets.CorporateCompliance,
      title: "Regulatory & Compliance Support",
      bg: "[#98A1BC80]",
    },
    {
      link: "/specialized_services",
      img: assets.EducationIcon,
      title: "Specialized Advisory Services",
      bg: "[#D1A98080]",
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
        <div className="text-center w-full  pt-10 font-bold px-4" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light w-full leading-snug font-gwen-semibold">
            Our Services
          </h1>
          <p className="flex items-center justify-center w-full font-light mt-3">
            <Breadcrumb items={breadcrumbItems} />
          </p>
        </div>

        {/* Services Grid */}
        <div className="w-screen flex items-center justify-center mt-6 pb-15  px-4" data-aos="fade-up" data-aos-delay="500">
          <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link
                to={service.link}
                key={idx}
                onClick={handleScrollTop}
                className={`bg-${service.bg} rounded-2xl shadow-md hover:shadow-lg hover:border-black border border-[#e1e1e1] backdrop-filter backdrop-blur-sm transition-all p-6 flex flex-col items-center justify-center group`}
              >
                
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-15 w-15 "
                />
                <h2 className="text-lg text-center w sm:text-xl py-4 font-medium">
                  {service.title}
                </h2>
                <div className='flex items-center justify-center w-full sm:hidden ' >
                  <span className='flex items-center jusitfy-center gap-2 bg-[#2b3780]/80 rounded p-2 px-4 text-white text-sm' >
                    Open <ExternalLink className="w-5 h-5 " /> 
                  </span>
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
