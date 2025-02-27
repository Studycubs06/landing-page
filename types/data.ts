import { StaticImageData } from "next/image";

export interface PricingData {
    bgImage: StaticImageData;
    textColor: string;
    title: string;
    boyImage: StaticImageData;
    listItems: string[][];
    buttons: string[];
    bulletColor: string;
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
