import React from "react";
import Image from "next/image";

// @assets
import LogoImg from "@/assets/logo2.png";

const Contact = () => {
  return (
    <div className="flex items-center border-t-[8px] border-b-[8px] border-primary tablet:flex-col" id="contact">
      <div className="w-1/2 flex justify-end tablet:w-full px-10 tablet:p-10">
        <div className="w-[680px] tablet:w-full">
          <p className="text-black font-700 text-[60px] mac:text-[45px] tablet:text-[30px]">
            {"Máte zájem o výrobky značky Rehau?"}
          </p>
          <p className="text-black font-300 text-[60px] mac:text-[45px] tablet:text-[30px]">
            {"Vyplňte nezávazně formulář a my se vám ozveme."}
          </p>
        </div>
      </div>
      <div className="w-1/2 bg-primary flex items-center p-20 space-x-10 tablet:w-full tablet:space-x-0 mac:justify-center desktop:p-10">
        <div className="flex flex-col space-y-10 w-full small:space-y-5">
          <div className="flex items-start space-x-10 desktop:flex-col desktop:space-x-0 desktop:space-y-5">
            <div className="flex flex-col w-1/2 desktop:w-full">
              <p className="text-[20px] text-white font-400 tablet:text-[15px]">{"Jméno*"}</p>
              <input
                className="w-full text-[20px] text-black font-400 placeholder:text-main-400 outline-none rounded-sm p-2 tablet:text-[15px]"
                placeholder="Vaše celé jmené*"
              />
            </div>
            <div className="flex flex-col w-1/2 desktop:w-full">
              <p className="text-[20px] text-white font-400 tablet:text-[15px]">{"Telefonní číslo*"}</p>
              <input
                className="w-full text-[20px] text-black font-400 placeholder:text-main-400 outline-none rounded-sm p-2 tablet:text-[15px]"
                placeholder="Telefonní číslo*"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-[20px] text-white font-400 tablet:text-[15px]">{"Telefonní číslo*"}</p>
            <input
              className="text-[20px] text-black font-400 placeholder:text-main-400 outline-none rounded-sm p-2 tablet:text-[15px]"
              placeholder="Telefonní číslo*"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-[20px] text-white font-400 tablet:text-[15px]">{"Telefonní číslo*"}</p>
            <textarea
              className="h-[175px] text-[20px] text-black font-400 placeholder:text-main-400 outline-none rounded-sm p-2 tablet:text-[15px]"
              placeholder="Telefonní číslo*"
            />
          </div>

          <button className="text-white text-[20px] font-800 rounded-[50px] bg-red-100 w-[230px] p-2 tablet:text-[15px]">
            {"Odeslat poptávku"}
          </button>
        </div>
        <div className="[234px] h-[388px] mac:hidden inline-flex items-center justify-center">
          <Image src={LogoImg} alt="logo" width={234} height={388} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
