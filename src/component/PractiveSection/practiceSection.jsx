import React from "react";
import DoctorImage from "../../assets/Doctor";

const services = DoctorImage;

const DoctorSection = () => {
  return (
    <section className="bg-[#FEF0BB] lg:px-20 lg:py-24 md:pt-12 md:px-8 py-7">
      <div className="lg:max-w-[1440px] mx-auto text-center">
        <h2 className="text-2xl font-semibold lg:pb-16 pb-3">
          Let’s get you a doc who gets you
        </h2>
        <div className="md:flex justify-center lg:mt-[78px] lg:-ml-12  md:-ml-3 md:mt-14 md:justify-end max-md:max-w-[500px] max-md:m-auto ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FCFAEE] pt-[45px]  rounded-lg shadow-md flex flex-col items-center lg:ml-12 md:ml-3 max-md:mt-[39px]"
            >
              <div className="w-2/3 mb-4 -mt-20 flex items-center justify-center">
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-800 font-medium mb-4 text-center">
                {service.title}
              </p>
              <div className="lg:pt-[22px] lg:pb-[42px] pt-3 pb-9 ">
                <button className="px-8 py-2 border border-gray-500 rounded-[4px] hover:bg-gray-100">
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;