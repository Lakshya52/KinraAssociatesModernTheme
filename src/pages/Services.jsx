import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
// import Button from '../components/ui/Button'
import { ArrowRight } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'Our Services',},
]


const Services = () => {
  return (
    <>




      <div className='text-center w-full font-gwynerCondensedFont py-10 mt-10 font-bold' >
        <h1 className='text-5xl font-light w-full'><span className='italic font-extralight ' ></span> Our Services</h1>

         <p className='flex items-center justify-center w-full font-light' >
          <Breadcrumb items={breadcrumbItems} />
        </p>
      </div>


      {/* <div className="w-screen flex  justify-center items-center font-playfair-display mb-15" >

        <div className="w-[90%] flex items-center justify-center  flex-col gap-5">
          <div className="flex w-full items-center justify-between gap-5">

            <div className='cursor-pointer h-fit group w-full rounded-xl p-7 min-h-[220px] bg-[#9B7EBD60]/50 flex flex-col justify-between items-center'>
              <img src={assets.AccountingManagement} className="h-15 w-15 mx-auto" />
              <div className='font-poppins-bold text-xl py-2 text-center'>Accounting & Financial Reporting</div>
              <Link className=" flex items-center justify-center gap-2 p-2 group-hover:bg-amber-800 rounded-lg group-hover:text-white" to="/accountingFinancialReporting">
                <span>View More</span> <ArrowRight />
              </Link>
            </div>


            <div className='cursor-pointer h-fit group w-full rounded-xl p-7 min-h-[220px] bg-gray-300/50 flex flex-col justify-between items-center'>
              <img src={assets.FinanceOptimization} className="h-15 w-15 mx-auto" />
              <div className='font-poppins-bold text-xl py-2 text-center'>Business Advisory</div>
              <Link className=" flex items-center justify-center gap-2 p-2 group-hover:bg-amber-800 rounded-lg group-hover:text-white" to="/businessAdvisory">
                <span>View More</span> <ArrowRight />
              </Link>
            </div>
            
            <div className='cursor-pointer h-fit group w-full rounded-xl p-7 min-h-[220px] bg-[#74887350]/50 flex flex-col justify-between items-center'>
              <img src={assets.AuditAndAssurance} className="h-15 w-15 mx-auto" />
              <div className='font-poppins-bold text-xl py-2 text-center'>Audit and Assurance</div>
              <Link className=" flex items-center justify-center gap-2 p-2 group-hover:bg-amber-800 rounded-lg group-hover:text-white" to="/auditAndAssurance">
                <span>View More</span> <ArrowRight />
              </Link>
            </div>
          </div>

          <div className="flex w-full items-center justify-between gap-5">

            <div className='cursor-pointer h-fit group w-full rounded-xl p-7 min-h-[220px] bg-[#A3DC9A80]/50 flex flex-col justify-between items-center'>
              <img src={assets.TaxPlanningConsultancy} className="h-15 w-15 mx-auto" />
              <div className='font-poppins-bold text-xl py-2 text-center'>Direct & Indirect Tax Advisory</div>
              <Link className=" flex items-center justify-center gap-2 p-2 group-hover:bg-amber-800 rounded-lg group-hover:text-white" to="/taxation-planning">
                <span>View More</span> <ArrowRight />
              </Link>
            </div>


            <div className='cursor-pointer h-fit group w-full rounded-xl p-7 min-h-[220px] bg-[#98A1BC90]/50 flex flex-col justify-between items-center'>
              <img src={assets.CorporateCompliance} className="h-15 w-15 mx-auto" />
              <div className='font-poppins-bold text-xl py-2 text-center'>Regulatory & Compliance Support</div>
              <Link className=" flex items-center justify-center gap-2 p-2 group-hover:bg-amber-800 rounded-lg group-hover:text-white" to="/corporate-compliance">
                <span>View More</span> <ArrowRight />
              </Link>
            </div>


            <div className='cursor-pointer h-fit group w-full rounded-xl p-7 min-h-[220px] bg-[#D1A98080]/50 flex flex-col justify-between items-center'>
              <img src={assets.EducationIcon} className="h-15 w-15 mx-auto" />
              <div className='font-poppins-bold text-xl py-2 text-center'>Specialized Advisory Services</div>
              <Link className=" flex items-center justify-center gap-2 p-2 group-hover:bg-amber-800 rounded-lg group-hover:text-white" to="/specialized-services">
                <span>View More</span> <ArrowRight />
              </Link>
            </div>
          </div>

          <div>
            We provide a comprehensive range of professional services designed to meet the financial, regulatory, and business needs of our clients. Our areas of practice include Accounting and Finance, where we assist in maintaining accurate financial records and ensuring effective financial management; Audit and Assurance, which involves independent examination of financial information to promote transparency and compliance; Business Advisory, aimed at supporting organizations in decision-making, structuring, and growth strategies; and Compliance Support, ensuring timely and accurate adherence to statutory and regulatory requirements. We also offer Direct and Indirect Tax Advisory, providing guidance on efficient tax planning and compliance under applicable laws. In addition, our Specialized Services are tailored to address sector-specific and client-specific requirements, with a focus on delivering solutions aligned with professional standards and ethical practices.
          </div>
        </div>

      </div> */}



      <div className="w-screen flex items-center justify-center mb-15">

        <div className='w-[90%] flex items-start justify-between gap-10' >
          {/* left */}
          <div className='w-1/2 text-lg text-justify' >
            We provide a comprehensive range of professional services designed to meet the financial, regulatory, and business needs of our clients. Our areas of practice include Accounting and Finance, where we assist in maintaining accurate financial records and ensuring effective financial management; Audit and Assurance, which involves independent examination of financial information to promote transparency and compliance; Business Advisory, aimed at supporting organizations in decision-making, structuring, and growth strategies; and Compliance Support, ensuring timely and accurate adherence to statutory and regulatory requirements. We also offer Direct and Indirect Tax Advisory, providing guidance on efficient tax planning and compliance under applicable laws. In addition, our Specialized Services are tailored to address sector-specific and client-specific requirements, with a focus on delivering solutions aligned with professional standards and ethical practices.
          </div>

          {/* right */}
          <div className='w-1/2 flex flex-col gap-2' >

            <div className='bg-[#9B7EBD60] rounded-xl pl-10 group '  >
              <Link to="/accounting" className='w-full  flex items-center  gap-5 text-start p-2' >
                <img src={assets.AccountingManagement} className="h-10 w-10"  />
                <div className='font-poppins-bold text-xl py-2 text-center'>Accounting & Financial Reporting</div>
                <ArrowRight className="hidden group-hover:block" />
              </Link>
            </div>
            <div className='bg-gray-300  rounded-xl pl-10 group'    >
              <Link to="/business_advisory" className='w-full  flex items-center  gap-5 text-start p-2' >
                <img src={assets.FinanceOptimization} className="h-10 w-10"  />
                <div className='font-poppins-bold text-xl py-2 text-center'>Business Advisory</div>
                <ArrowRight className="hidden group-hover:block" />
              </Link>
            </div>
            <div className='bg-[#74887350] rounded-xl pl-10 group '  >
              <Link to="/audit_and_assurance" className='w-full  flex items-center  gap-5 text-start p-2' >
                <img src={assets.AuditAndAssurance} className="h-10 w-10"  />
                <div className='font-poppins-bold text-xl py-2 text-center'>Audit and Assurance</div>
                <ArrowRight className="hidden group-hover:block" />
              </Link>
            </div>
            <div className='bg-[#A3DC9A80] rounded-xl pl-10 group '  >
              <Link to="/direct_indirect_tax" className='w-full  flex items-center  gap-5 text-start p-2' >
                <img src={assets.TaxPlanningConsultancy} className="h-10 w-10"  />
                <div className='font-poppins-bold text-xl py-2 text-center'>Direct & Indirect Tax Advisory</div>
                <ArrowRight className="hidden group-hover:block" />
              </Link>
            </div>
            <div className='bg-[#98A1BC90] rounded-xl pl-10 group '  >
              <Link to="/compliance_support" className='w-full  flex items-center  gap-5 text-start p-2' >
                <img src={assets.CorporateCompliance} className="h-10 w-10"  />
                <div className='font-poppins-bold text-xl py-2 text-center'>Regulatory & Compliance Support</div>
                <ArrowRight className="hidden group-hover:block" />
              </Link>
            </div>
            <div className='bg-[#D1A98080] rounded-xl pl-10 group '  >
              <Link to="/specialized_services" className='w-full  flex items-center  gap-5 text-start p-2' >
                <img src={assets.EducationIcon} className="h-10 w-10"  />
                <div className='font-poppins-bold text-xl py-2 text-center'>Specialized Advisory Services</div>
                <ArrowRight className="hidden group-hover:block" />
              </Link>
            </div>








          </div>
        </div>
      </div>





    </>
  )
}

export default Services