import React from "react";
import PictureSection from "./PictureSection";
import DescriptionSection from "./DescriptionSection";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-wrap">
      <PictureSection />
      <DescriptionSection />
    </div>
  );
}
