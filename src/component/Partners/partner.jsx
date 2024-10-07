import React from "react";
import MedStarHealth from "../../assets/Partner/MedStarHealth.png";
import MountSinai from "../../assets/Partner/MountSinai.png";
import Tufts from "../../assets/Partner/Tufts.png";
import Montefiore from "../../assets/Partner/Montefiore.png";
import IntermountainHealth from "../../assets/Partner/IntermountainHealth.png";
import Methodist from "../../assets/Partner/Methodist.png";

const PartnerSection = () => {
  return (
    <section className="px-1">
      <div className="bg-[#F9F8F7] flex flex-col lg:flex-row justify-center items-center py-20 px-4 lg:px-16">
        <div className="text-center lg:text-left mb-10 lg:mb-0 lg:w-1/2">
          <p className="text-base text-[#333333] mb-2">
            Zocdoc for health systems
          </p>
          <h2 className="text-2xl font-semibold text-[#333333] mb-6">
            We’re trusted by top health systems
          </h2>
          <button className="bg-[#FFF04B] text-black font-medium py-3 px-6 rounded-md hover:bg-[#FFCC00]">
            Partner with Zocdoc
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16 lg:w-1/2">
          <img
            src={MedStarHealth}
            alt="MedStar Health"
            className=" w-auto"
          />
          <img src={MountSinai} alt="Mount Sinai" className=" w-auto" />
          <img src={Tufts} alt="Tufts Medical Center" className="w-auto" />
          <img src={Montefiore} alt="Montefiore" className=" w-auto" />
          <img
            src={IntermountainHealth}
            alt="Intermountain Health"
            className=" w-auto"
          />
          <div className="flex items-center">
            <img
              src={Methodist}
              alt="Houston Methodist"
              className="w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default PartnerSection;