import React from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import { CheckCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Direct & Indirect Tax Advisory' },
]
const DirectIndirectTaxAdvisoryPage = () => {
  return (
    <>


      <div className="w-full p-4 sm:p-[5vw] pb-0 h-fit flex flex-col md:flex-row gap-8 mb-10">
        {/* left image */}
        <div className="w-full md:w-[28.57%] h-[400px]  bg-gray-500 rounded overflow-hidden mb-6 md:mb-0">
          <img
            src="/servicesPagesImages/DirectAndIndirectTax.webp"
            alt="Accounting Service"
            className="w-full h-full object-cover"
            loading='lazy'
          />
        </div>



        {/* right text */}
        <div className='w-full md:w-3/7 md:pl-[2.5vw]'>
          <Breadcrumb items={breadcrumbItems} />
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-gwen-semibold'>Direct And Indirect Tax Advisory</h1>
          <ul className='mt-5'>
            <li className="flex gap-3 sm:gap-5">
              <CheckCheck className='min-h-5 min-w-5 max-h-5 max-w-5 ' />
              <span>Direct and indirect tax planning, filing, and compliance, including international taxation.</span>
            </li>
            <li className="flex gap-3 sm:gap-5">
              <CheckCheck className='min-h-5 min-w-5 max-h-5 max-w-5 ' />
              <span>Corporate tax structuring, transfer pricing, and cross-border advisory.</span>
            </li>
            <li className="flex gap-3 sm:gap-5">
              <CheckCheck className='min-h-5 min-w-5 max-h-5 max-w-5 ' />
              <span>GST, TDS, income tax compliance, and representation before tax authorities.</span>
            </li>
            <li className="flex gap-3 sm:gap-5">
              <CheckCheck className='min-h-5 min-w-5 max-h-5 max-w-5 ' />
              <span>Tax litigation support and strategic tax optimization for businesses.</span>
            </li>
          </ul>
        </div>
        <div className='w-full md:w-2/7 flex items-start justify-center my-8 md:my-0'>
          <div className='w-full md:w-[90%] h-fit'>
            <h1 className='text-xl sm:text-2xl font-gwen-semibold'>Our Other Services</h1>
            <ul className='mt-5 w-full flex flex-col text-left'>
              <Link  to='/accounting' className='flex justify-between items-center group hover:bg-violet-50 cursor-pointer border-t p-3 sm:p-5 w-full'>
                <span>Accounting & Financial Reporting</span>
                <span><ArrowRight className='transition-transform opacity-0 group-hover:opacity-100 duration-300' /></span>
              </Link>
              <Link  to='/business_advisory' className='flex justify-between items-center group hover:bg-violet-50 cursor-pointer border-t p-3 sm:p-5 w-full'>
                <span>Business Advisory</span>
                <span><ArrowRight className='transition-transform opacity-0 group-hover:opacity-100 duration-300' /></span>
              </Link>
              <Link  to='/audit_and_assurance' className='flex justify-between items-center group hover:bg-violet-50 cursor-pointer border-t p-3 sm:p-5 w-full'>
                <span>Audit and Assurance</span>
                <span><ArrowRight className='transition-transform opacity-0 group-hover:opacity-100 duration-300' /></span>
              </Link>
              <Link  to='/compliance_support' className='flex justify-between items-center group hover:bg-violet-50 cursor-pointer border-t p-3 sm:p-5 w-full'>
                <span>Regulatory & Compliance Support</span>
                <span><ArrowRight className='transition-transform opacity-0 group-hover:opacity-100 duration-300' /></span>
              </Link>
              <Link  to='/specialized_services' className='flex justify-between items-center group hover:bg-violet-50 cursor-pointer border-t p-3 sm:p-5 w-full border-b'>
                <span>Specialized Advisory Services</span>
                <span><ArrowRight className='transition-transform opacity-0 group-hover:opacity-100 duration-300' /></span>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default DirectIndirectTaxAdvisoryPage