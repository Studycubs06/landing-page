import React from "react";
import Hero from "./public-speaking/Hero";
import ChildrenLearn from "./public-speaking/ChildrenLearn";
import Journey from "./public-speaking/Journey";
import Features from "./public-speaking/Features";
import Testimonials from "./public-speaking/Testimonials";
import { InternalPageProps } from "../../types/data";

const InternalPage: React.FC<InternalPageProps> = ({
  Boy,
  HeroBG,
  bgColor,
  stats,
  featureData,
  TestiTitle,
}) => {
  return (
    <>
      <Hero Boy={Boy} HeroBG={HeroBG} />
      <ChildrenLearn bgColor={bgColor} stats={stats} />
      <Journey />
      <Features featureData={featureData} />
      <Testimonials TestiTitle={TestiTitle} />
    </>
  );
};

export default InternalPage;
