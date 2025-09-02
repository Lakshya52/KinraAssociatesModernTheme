import React from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import { CheckCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Regulatory & Compliance Suppor' },
]
const ComplianceSupportPage = () => {
  return (
    <>

      <div className="w-full p-4 sm:p-[5vw] pb-0 h-fit flex flex-col md:flex-row gap-8 mb-10">
        {/* left image */}
        <div className='w-full md:w-2/7 bg-gray-500 rounded mb-6 md:mb-0'>
          <img src="" className="h-full w-full object-cover" />
        </div>
        {/* right text */}
        <div className='w-full md:w-3/7 md:pl-[2.5vw]'>
          <Breadcrumb items={breadcrumbItems} />
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-poppins-bold'>Regulatory & Compliance Support</h1>
          <ul className='mt-5'>
            <li className="flex gap-3 sm:gap-5">
              <CheckCheck className='h-5 w-5' />
              <span>Exclusively on Secretarial Compliances, including company incorporation, statutory maintenance of registers, board/AGM documentation, and corporate governance support. </span>
            </li>
            <li className="flex gap-3 sm:gap-5">
              <CheckCheck className='h-5 w-5' />
              <span>Advisory and filings related to foreign investments as FEMA, cross-border transactions, & RBI regulations.</span>
            </li>
            <li className="flex gap-3 sm:gap-5">
              <CheckCheck className='h-5 w-5' />
              <span>Support for obtaining License & renewing FSSAI, MSME, BIS, ISO, and other sectoral registrations and approvals</span>
            </li>
          </ul>
        </div>
        <div className='w-full md:w-2/7 flex items-start justify-center my-8 md:my-0'>
          <div className='w-full md:w-[90%] h-fit'>
            <h1 className='text-xl sm:text-2xl font-poppins-bold'>Our Other Services</h1>
            <ul className='mt-5 w-full flex flex-col text-left'>
              <li className='flex justify-between items-center group hover:bg-violet-50 cursor-pointer border-t p-3 sm:p-5 w-full'>
                <Link to='/accounting'>Accounting & Financial Reporting</Link>
                <span><ArrowRight className='transition-transform opacity-0 group-hover:opacity-100 duration-300' /></span>
              </li>
              <li className='flex justify-between items-center group hover:bg-violet-50 cursor-pointer border-t p-3 sm:p-5 w-full'>
                <Link to='/business_advisory'>Business Advisory</Link>
                <span><ArrowRight className='transition-transform opacity-0 group-hover:opacity-100 duration-300' /></span>
              </li>
              <li className='flex justify-between items-center group hover:bg-violet-50 cursor-pointer border-t p-3 sm:p-5 w-full'>
                <Link to='/audit_and_assurance'>Audit and Assurance</Link>
                <span><ArrowRight className='transition-transform opacity-0 group-hover:opacity-100 duration-300' /></span>
              </li>
              <li className='flex justify-between items-center group hover:bg-violet-50 cursor-pointer border-t p-3 sm:p-5 w-full'>
                <Link to='/direct_indirect_tax'>Direct & Indirect Tax Advisory</Link>
                <span><ArrowRight className='transition-transform opacity-0 group-hover:opacity-100 duration-300' /></span>
              </li>
              <li className='flex justify-between items-center group hover:bg-violet-50 cursor-pointer border-t p-3 sm:p-5 w-full border-b'>
                <Link to='/specialized_services'>Specialized Advisory Services</Link>
                <span><ArrowRight className='transition-transform opacity-0 group-hover:opacity-100 duration-300' /></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComplianceSupportPage