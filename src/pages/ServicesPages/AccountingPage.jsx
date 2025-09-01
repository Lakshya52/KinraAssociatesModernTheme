import React from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import { CheckCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Financial Reporting' },
]


const AccountingPage = () => {
  return (
    <>
      <div className="w-full p-4 sm:p-[5vw] pb-0 h-fit flex flex-col md:flex-row gap-8 mb-10">
        {/* left image */}
        <div className='w-full md:w-2/7 bg-gray-500 rounded mb-6 md:mb-0'>
          <img src="" className="h-full w-full object-cover" />
        </div>
        {/* right text */}
        <div className='w-full md:w-3/7 md:pl-[5vw]'>
          <Breadcrumb items={breadcrumbItems} />
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-poppins-bold'>Accounting & Financial Reporting</h1>
          <ul className='mt-5'>
            <li className="flex gap-3 sm:gap-5">
              <CheckCheck className='h-5 w-5' />
              <span>Maintain statutory-compliant financial records and prepare clear financial statements.</span>
            </li>
            <li className="flex gap-3 sm:gap-5">
              <CheckCheck className='h-5 w-5' />
              <span>Manage payables, receivables, reconciliations, and general ledger efficiently.</span>
            </li>
            <li className="flex gap-3 sm:gap-5">
              <CheckCheck className='h-5 w-5' />
              <span>Support tax compliance, budgeting, and financial analysis for informed decision-making.</span>
            </li>
            <li className="flex gap-3 sm:gap-5">
              <CheckCheck className='h-5 w-5' />
              <span>Leverage cloud-based solutions and automation for real-time insights and process optimization.</span>
            </li>
          </ul>
        </div>
        <div className='w-full md:w-2/7 flex items-start justify-center my-8 md:my-0'>
          <div className='w-full md:w-[90%] h-fit'>
            <h1 className='text-xl sm:text-2xl font-poppins-bold'>Our Other Services</h1>
            <ul className='mt-5 w-full flex flex-col text-left'>
              <li className='flex justify-between items-center group hover:bg-violet-50 cursor-pointer border-t p-3 sm:p-5 w-full'>
                <Link to='/businessAdvisory'>Business Advisory</Link>
                <span><ArrowRight className='transition-transform opacity-0 group-hover:opacity-100 duration-300' /></span>
              </li>
              <li className='flex justify-between items-center group hover:bg-violet-50 cursor-pointer border-t p-3 sm:p-5 w-full'>
                <Link to='/auditAndAssurance'>Audit and Assurance</Link>
                <span><ArrowRight className='transition-transform opacity-0 group-hover:opacity-100 duration-300' /></span>
              </li>
              <li className='flex justify-between items-center group hover:bg-violet-50 cursor-pointer border-t p-3 sm:p-5 w-full'>
                <Link to='/directIndirectTaxAdvisory'>Direct & Indirect Tax Advisory</Link>
                <span><ArrowRight className='transition-transform opacity-0 group-hover:opacity-100 duration-300' /></span>
              </li>
              <li className='flex justify-between items-center group hover:bg-violet-50 cursor-pointer border-t p-3 sm:p-5 w-full'>
                <Link to='/regulatoryComplanceSupport'>Regulatory & Compliance Support</Link>
                <span><ArrowRight className='transition-transform opacity-0 group-hover:opacity-100 duration-300' /></span>
              </li>
              <li className='flex justify-between items-center group hover:bg-violet-50 cursor-pointer border-t p-3 sm:p-5 w-full border-b'>
                <Link to='/specializedServices'>Specialized Advisory Services</Link>
                <span><ArrowRight className='transition-transform opacity-0 group-hover:opacity-100 duration-300' /></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default AccountingPage