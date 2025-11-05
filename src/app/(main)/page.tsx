import ExpertServices from "@/components/Home/ExpertServices/ExpertServices";
import Hero from "@/components/Home/Hero/Hero";
import MedicalServices from "@/components/Home/MedicalServices/MedicalServices";
import Questions from "@/components/Home/Questions/Questions";
import ReservePoster from "@/components/Home/ReservePoster/ReservePoster";
import React from "react";

const page = () => {
  return (
    <div className="grid">
      <main className="justify-center">
        <Hero />
        <MedicalServices />
        <ExpertServices />
        <Questions />
        <ReservePoster />
      </main>
    </div>
  );
};

export default page;
