import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { CheckCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

const breadcrumbItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Direct & Indirect Tax Advisory" },
];
const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

const DirectIndirectTaxAdvisoryPage = () => {
  return (
    <div className="w-full px-4 sm:px-[5vw] py-10">
      {/* Breadcrumb */}
      {/* <Breadcrumb items={breadcrumbItems} /> */}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Image */}
        <div className="md:col-span-4">
          <div className="rounded-2xl overflow-hidden shadow-lg h-[320px] md:h-[450px]">
            <img
              src="/servicesPagesImages/DirectAndIndirectTax.webp"
              alt="Direct & Indirect Tax Advisory"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Middle Content */}
        <div className="md:col-span-5 flex flex-col">
          <h1 className="text-3xl md:text-4xl font-gwen-semibold text-gray-800 leading-snug">
            Direct <span className="font-playfair-display">&</span> Indirect Tax Advisory
          </h1>
          <ul className="mt-6 space-y-4 text-gray-700">
            {[
              "Direct and indirect tax planning, filing, and compliance, including international taxation.",
              "Corporate tax structuring, transfer pricing, and cross-border advisory.",
              "GST, TDS, income tax compliance, and representation before tax authorities.",
              "Tax litigation support and strategic tax optimization for businesses.",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <CheckCheck className="h-5 w-5 text-[#2b3780] shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Sidebar */}
        <div className="md:col-span-3 h-full flex flex-col justify-between gap-5 ">
          <div className="bg-violet-50 rounded-2xl shadow-md p-5 h-[80%] min-h-fit">
            <h2 className="text-xl font-gwen-semibold text-gray-800 mb-4">
              Our Other Services
            </h2>
            <ul className="flex flex-col divide-y divide-gray-300">
              {[
                { label: "Accounting & Financial Reporting", to: "/accounting" },
                { label: "Business Advisory", to: "/business_advisory" },
                { label: "Audit and Assurance", to: "/audit_and_assurance" },
                { label: "Regulatory & Compliance Support", to: "/compliance_support" },
                { label: "Specialized Advisory Services", to: "/specialized_services" },
              ].map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={service.to}
                    onClick={handleScrollTop}
                    className="flex justify-between items-center py-3 text-gray-700 hover:text-[#2b3780] transition group"
                  >
                    <span>{service.label}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-transform duration-300 translate-x-0 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Button label="Go back to home" href="/" className="py-3 w-full bg-red-200 h-[10%] p-5 rounded-full" ></Button>
        </div>
      </div>
    </div>
  );
};

export default DirectIndirectTaxAdvisoryPage;
