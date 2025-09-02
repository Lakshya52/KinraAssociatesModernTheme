import React from 'react'
import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'

const Contact = () => {

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'Contact Us',  },
]



  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted successfully!");
  };

  // Branch office data
  const branchOffices = [
    {
      name: "Uttar Pradesh",
      contacePerson: "",
      email: "",
      phone: "",
      address: "H. No 32, Phase-III-B, Pant Vihar, ITC Road, Saharanpur, U.P.- 247001",
      mapEmbed: <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.119964024052!2d77.5452343151156!3d29.96411098191116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3e0e0e0e0e0%3A0x0!2sH.%20No%2032%2C%20Phase-III-B%2C%20Pant%20Vihar%2C%20ITC%20Road%2C%20Saharanpur%2C%20U.P.-%20247001!5e0!3m2!1sen!2sin!4v1710000000004!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Registered Office"
      ></iframe>,

    },
    {
      name: "Delhi",
      contacePerson: "CA. CHETAN KHURANA",
      email: "email@gmail.com",
      phone: "+91 12345 67890",
      address: "843, Gautam, GALI Jwala Nagar, Shahdara, Delhi-110032",
      mapEmbed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.6347927110155!2d77.29724577457438!3d28.670651882350278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb70cf59db6d%3A0x1fe19019ab89202f!2s843%2C%20Gautam%20Gali%2C%20Jawala%20Nagar%2C%20Shahdara%2C%20Delhi%2C%20110032!5e0!3m2!1sen!2sin!4v1754998898331!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Delhi Office"></iframe>
    },
    {
      name: "Karnataka",
      contacePerson: "CA. ADITYA A K",
      email: "email@gmail.com",
      phone: "+91 12345 67890",
      address: "76, 2ND Floor, Hanumanthanagara, 50 ft Road, Bengaluru, Karnataka-560019",
      mapEmbed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62216.81902117869!2d77.51484087877355!3d12.936542272877045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f4b7246165%3A0x262e856aea3cb36d!2sSilicon%20Honda%20Hanumanthnagar!5e0!3m2!1sen!2sin!4v1754998967850!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mumbai Office"></iframe>
    },
    {
      name: "Maharashtra",
      contacePerson: "CA. DEVANSH JI VAISHYA",
      email: "email@gmail.com",
      phone: "+91 12345 67890",
      address: "101-102/B7 Gangadham Phase 1, Marketyard Jagdish Niwas, Pune, Maharashtra-411037",
      mapEmbed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.1648580777523!2d73.87197977423627!3d18.476190270530314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea9afbd3def9%3A0x1c8ce8f1fece189f!2sGangaDham%20Phase%201!5e0!3m2!1sen!2sin!4v1754999034638!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Bangalore Office"></iframe>
    },
    {
      name: "Madhya Pradesh",
      contacePerson: "CA. AYUSH SAXENA",
      email: "email@gmail.com",
      phone: "+91 12345 67890",
      address: "H no. 40, Shiv Shakti Nagar, Ahmadpur, Hoshangabad Road, Bhopal, Madhya Pradesh-462026",
      mapEmbed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4036720938057!2d77.45417582437311!3d23.19195500998776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43c365761c17%3A0x6ec6fe6c44c74d47!2sShivshakti%20Nagar%2C%20Ahmedpur%20Kalan%2C%20Bagmugaliya%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1754999073277!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Chennai Office"></iframe>
    }
    ,
    {
      name: "Gujarat",
      contacePerson: "CA. BHAVIK HIRABHAI RUPAPARA",
      email: "email@gmail.com",
      phone: "+91 12345 67890",
      address: "310, Star Chamber, Rajkot, Gujarat-360001",
      mapEmbed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.4531732158825!2d70.79621797434463!3d22.298694742955384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb00269c00e3%3A0x7f86ba477321e7ce!2sStarChember!5e0!3m2!1sen!2sin!4v1754999102400!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Chennai Office"></iframe>
    }
    ,
    {
      name: "Bihar",
      contacePerson: "CA ABHINAV KUMAR",
      email: "email@gmail.com",
      phone: "+91 12345 67890",
      address: "435, Adison Arcade, Fraser Road, Patna, Bihar-800001",
      mapEmbed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.749208696946!2d85.13840612445657!3d25.61324861472521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585b92f5e263%3A0x264c261d6914a9b9!2sAdision%20Arcade!5e0!3m2!1sen!2sin!4v1754999150678!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Chennai Office"></iframe>
    }
  ];

  // Default selected branch is Delhi
  const [selectedBranch, setSelectedBranch] = useState(branchOffices[0]);

  return (
    <>

      <div className='text-center w-full font-gwynerCondensedFont py-10 mt-10 font-bold' >
        <h1 className='text-5xl font-light w-full'><span className='italic font-extralight ' ></span> Let's Connect</h1>

        <p className='flex items-center justify-center w-full font-light' >


          <Breadcrumb items={breadcrumbItems} />
        </p>

      </div>

      <div className="w-screen flex justify-center items-center font-playfair-display">



        {/* Main content box */}
        <div className="w-full sm:w-[90%] flex gap-10 justify-between items-start h-fit sm:bg-gray-100 rounded-xl sm:shadow-xl shadow-[#5a6bdd]/10 border-[1px] border-[#2c2c2c]/50 px-4 sm:px-10 md:px-20 py-8 sm:py-12 my-6 sm:my-10 mb-10 text-base sm:text-lg">

          {/* Contact Form Section */}
          <div className="w-1/2 flex items-start justify-start h-full">
            {/* Form */}

            <form onSubmit={handleContactSubmit} className="w-full h-full">



              <div>
                <label htmlFor="name">Name :</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full mt-1 outline-none border border-[#2c2c2c]/50 rounded p-2"
                />
              </div>

              <div>
                <label htmlFor="email">Email :</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your mail id"
                  className="w-full mt-1 outline-none border border-[#2c2c2c]/50 rounded p-2"
                />
              </div>

              <div>
                <label htmlFor="subject">Subject :</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter subject"
                  className="w-full mt-1 outline-none border border-[#2c2c2c]/50 rounded p-2"
                />
              </div>

              <div>
                <label htmlFor="message">Message :</label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  className="w-full mt-1 outline-none border border-[#2c2c2c]/50 rounded p-2 h-42 resize-none"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full p-2 rounded bg-amber-800 text-white hover:bg-amber-900 hover:rounded-full transition-transform duration-300 mt-4"
              >
                Submit
              </button>

            </form>

          </div>

          {/* Branch Office Selector */}
          <div className="w-1/2 flex flex-col items-start justify-start md:mb-16">
            <label htmlFor="name">Our Offices :</label>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
              {branchOffices.map((branch) => (
                <button
                  key={branch.name}
                  className={`px-3 sm:px-4 py-2 rounded border text-sm sm:text-base cursor-pointer ${selectedBranch.name === branch.name
                    ? "bg-amber-800 text-white"
                    : "bg-white text-[#2c2c2c] border-[#2c2c2c]/50"
                    }`}
                  onClick={() => setSelectedBranch(branch)}
                  type="button"
                >
                  {branch.name}
                </button>
              ))}
            </div>

            {/* Selected Branch Info */}
            <div className="w-full flex flex-col gap-5">
              <div className="w-full mb-2">
                <div>
                  <span className="font-semibold">Address: </span> <br />
                  {selectedBranch.address}
                </div>
              </div>
              <div className="w-full h-[200px] sm:h-[250px] md:h-[240px] rounded overflow-hidden shadow-xl">
                {selectedBranch.mapEmbed}
              </div>
            </div>
          </div>


        </div>

      </div>


    </>
  )
}

export default Contact