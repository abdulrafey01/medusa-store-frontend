import React from "react";
import NavBar from "./components/Layout/NavBar";
import LandingSection from "./components/Home/LandingSection";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="min-h-screen bg-red-200">
      <NavBar />
      <LandingSection />
    </div>
  );
};

export default page;
