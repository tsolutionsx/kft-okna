import React from "react";
import { KindCardProps } from "@/types";

const KindCard: React.FC<KindCardProps> = ({ title, description, kindlabel, sublabel, show = true }) => {
  return (
    <div className="relative w-[640px] bg-white border-l-8 border-primary py-5 px-10 mac:w-[550px] small:w-full small:py-10">
      <div className="flex flex-col space-y-5 text-black w-[550px] mac:w-[450px] small:w-full">
        <p className="text-[35px] font-700 mac:text-[30px] small:text-[25px]">{title}</p>
        <p className="text-[25px] font-400 mac:text-[20px] small:text-[15px]">{description}</p>
        <p className="text-[20px] font-900 mac:text-[15px] small:text-[10px]">{sublabel}</p>
      </div>
      {show && (
        <div className="absolute text-white bg-primary hover:bg-red-100 transition duration-300 cursor-pointer text-[20px] font-600 bottom-0 right-0 px-4 py-1 rounded-tl-full mac:text-[15px] small:text-[10px]">
          {kindlabel}
        </div>
      )}
    </div>
  );
};

export default KindCard;
