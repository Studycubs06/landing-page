import { StaticImageData } from "next/image";

export interface PricingData {
  bgImage: StaticImageData;
  textColor: string;
  title: string;
  boyImage: StaticImageData;
  listItems: string[][];
  buttons: string[];
  buttonLabels: string[];
  bulletColor: string;
  buttonLabelColor: string;
}

export interface BoxItem {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  hasExtraContent?: boolean;
  hasBorder?: boolean;
  classes?: number;
  activity?: number;
  imageBorder?: boolean;
  textAboveImage?: boolean;
  textDesc?: string;
  classesText?: string;
}

export interface JourneyBoxItem {
  image: StaticImageData;
  alt: string;
  text: string;
  bgColorLight: string;
  bgColorDark: string;
}

export interface Student {
  id: number;
  name: string;
  grade: string;
  imgSrc: StaticImageData;
}

export interface StatItem {
  title: string;
  subtitle: string;
  icon: StaticImageData;
}

// Define the type for a single feature item
export interface FeatureItem {
  iconBg: string;
  level: string;
  list: string[];
  btnColor: string;
  arrowColor: string;
  image: StaticImageData;
}

export interface FeaturesProps {
  featureData: FeatureItem[];
}

// Define the props for InternalPage
export interface InternalPageProps {
  Boy: StaticImageData;
  HeroBG: StaticImageData;
  bgColor: string;
  stats: StatItem[];
  featureData: FeatureItem[];
  TestiTitle: string;
}
