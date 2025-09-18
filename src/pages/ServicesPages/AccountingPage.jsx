import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { CheckCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const breadcrumbItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Financial Reporting" },
];

const AccountingPage = () => {
  return (
    <div className="w-full px-4 sm:px-[5vw] py-10">
      {/* Breadcrumb */}
      {/* <Breadcrumb items={breadcrumbItems} /> */}

      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">


        {/* Left Image */}
        <div className="md:col-span-4">
          <div className="rounded-2xl overflow-hidden shadow-lg h-[320px] md:h-[450px]">
            <img
              src="/servicesPagesImages/Accounting.webp"
              alt="Accounting Service"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Middle Content */}
        <div className="md:col-span-5 flex flex-col">
          <h1 className="text-3xl md:text-4xl font-gwen-semibold text-gray-800 leading-snug">
            Accounting <span className="font-playfair-display">&</span> Financial Reporting
          </h1>
          <ul className="mt-6 space-y-4 text-gray-700">
            {[
              "Maintain statutory-compliant financial records and prepare clear financial statements.",
              "Manage payables, receivables, reconciliations, and general ledger efficiently.",
              "Support tax compliance, budgeting, and financial analysis for informed decision-making.",
              "Leverage cloud-based solutions and automation for real-time insights and process optimization.",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <CheckCheck className="h-5 w-5 text-violet-700 shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Sidebar */}
        <div className="md:col-span-3 h-full">
          <div className="bg-violet-50 rounded-2xl shadow-md p-5 h-full">
            <h2 className="text-xl font-gwen-semibold text-gray-800 mb-4">
              Our Other Services
            </h2>
            <ul className="flex flex-col divide-y divide-gray-300">
              {[
                { label: "Business Advisory", to: "/business_advisory" },
                { label: "Audit and Assurance", to: "/audit_and_assurance" },
                { label: "Direct & Indirect Tax Advisory", to: "/direct_indirect_tax" },
                { label: "Regulatory & Compliance Support", to: "/compliance_support" },
                { label: "Specialized Advisory Services", to: "/specialized_services" },
              ].map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={service.to}
                    className="flex justify-between items-center py-3 text-gray-700 hover:text-violet-800 transition group"
                  >
                    <span>{service.label}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-transform duration-300 translate-x-0 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
};

export default AccountingPage;
