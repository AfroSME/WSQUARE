import Image from "next/image";
import React, { FC } from "react";

interface approachCardProps {
  number: number;
  title: string;
  image: string;
  description: string;
}

const ApproachCard: FC<approachCardProps> = ({
  title,
  image,
  description,
  number,
}) => {
  return (
    <div className={`w-full flex items-center gap-20 ${number % 2 ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"}`}>
      <div className="w-full md:w-[31%] ">
        <Image src={image} alt="image" className="w-full" />
      </div>
      <div className="w-full md:w-[63%]">
        <h3 className="text-4xl text-black font-medium lh120 mb-10 flex gap-4 items-center">
          <span className="text-primary">0{number}</span> {title}
        </h3>
        <p className="text-lg font-normal text-black lh120 ls1pz text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ApproachCard;
