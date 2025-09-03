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
  return (
    <>
      {/* Page Heading */}
      <div className="text-center w-full font-gwynerCondensedFont py-10 mt-10 font-bold">
        <h1 className="text-4xl sm:text-5xl font-light w-full">
          <span className="italic font-extralight"></span> Our Services
        </h1>

        <p className="flex items-center justify-center w-full font-light">
          <Breadcrumb items={breadcrumbItems} />
        </p>
      </div>

      {/* Content Section */}
      <div className="w-screen flex items-center justify-center mb-15">
        <div className="w-[90%] flex flex-col lg:flex-row items-start justify-between gap-10">
          
          {/* Services List (First on mobile) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3 order-1 lg:order-2">
            {[
              {
                link: "/accounting",
                img: assets.AccountingManagement,
                title: "Accounting & Financial Reporting",
                bg: "bg-[#9B7EBD60]",
              },
              {
                link: "/business_advisory",
                img: assets.FinanceOptimization,
                title: "Business Advisory",
                bg: "bg-gray-300",
              },
              {
                link: "/audit_and_assurance",
                img: assets.AuditAndAssurance,
                title: "Audit and Assurance",
                bg: "bg-[#74887350]",
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
                bg: "bg-[#98A1BC90]",
              },
              {
                link: "/specialized_services",
                img: assets.EducationIcon,
                title: "Specialized Advisory Services",
                bg: "bg-[#D1A98080]",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className={`${service.bg} rounded-xl pl-5 sm:pl-10 group transition-all`}
              >
                <Link
                  to={service.link}
                  className="w-full flex items-center gap-4 sm:gap-5 text-start p-3 sm:p-4"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-8 w-8 sm:h-10 sm:w-10"
                  />
                  <div className="font-poppins-bold text-base sm:text-xl py-1 sm:py-2 text-start">
                    {service.title}
                  </div>
                  <ArrowRight className="hidden group-hover:block" />
                </Link>
              </div>
            ))}
          </div>

          {/* Left Text (Second on mobile) */}
          <div className="w-full lg:w-1/2 text-base sm:text-lg text-justify leading-relaxed order-2 lg:order-1">
            We provide a comprehensive range of professional services designed
            to meet the financial, regulatory, and business needs of our
            clients. Our areas of practice include Accounting and Finance, where
            we assist in maintaining accurate financial records and ensuring
            effective financial management; Audit and Assurance, which involves
            independent examination of financial information to promote
            transparency and compliance; Business Advisory, aimed at supporting
            organizations in decision-making, structuring, and growth
            strategies; and Compliance Support, ensuring timely and accurate
            adherence to statutory and regulatory requirements. We also offer
            Direct and Indirect Tax Advisory, providing guidance on efficient
            tax planning and compliance under applicable laws. In addition, our
            Specialized Services are tailored to address sector-specific and
            client-specific requirements, with a focus on delivering solutions
            aligned with professional standards and ethical practices.
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
