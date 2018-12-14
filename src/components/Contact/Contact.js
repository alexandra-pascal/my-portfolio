import React from "react";
import VerticalLine from "./../VerticalLine/VerticalLine";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-wrap">
      <FirstSection />
      <VerticalLine />
      <SecondSection />
    </div>
  )
}
