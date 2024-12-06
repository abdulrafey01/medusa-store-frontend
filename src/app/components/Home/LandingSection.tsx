import LandingImg from "@/assets/landing-1.jpg";
import Image from "next/image";
import React from "react";

type Props = {};

const LandingSection = (props: Props) => {
  return (
    <div className="h-screen w-full bg-blue-300 relative overflow-clip flex justify-center items-center">
      <div className="absolute top-0 z-10 w-full h-full bg-black opacity-40"></div>
      <Image
        layout="fill"
        src={LandingImg}
        alt="Landing Image"
        className="object-cover object-center lg:object-top scale-x-[-1]"
      />
      <div className="z-20 w-[80%] flex flex-col justify-start items-start gap-4 text-white">
        <p className="text-6xl font-bold">Raining Offers For </p>
        <p className="text-6xl font-bold">Hot Winter!</p>
        <p className="text-xl font-bold">25% Off On All Products</p>
      </div>
    </div>
  );
};

export default LandingSection;
