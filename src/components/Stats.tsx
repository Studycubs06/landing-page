"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import Star from "../assets/images/star.webp";
import { HOME_STATS as FALLBACK_STATS } from "@/constants/statsData";
import { client } from "@/sanity/lib/client";
import { STATS_QUERY } from "@/sanity/lib/queries";

// Icon mapping
import Stud from "../assets/images/stud.webp";
import Hand from "../assets/images/hand.webp";
import Group from "../assets/images/group.webp";
import Course from "../assets/images/courses.webp";

const ICON_MAP: Record<string, any> = {
  Stud,
  Hand,
  Group,
  Course,
};

interface StatsProps {
  initialStats?: any[];
}

const Stats = ({ initialStats }: StatsProps) => {
  const [stats, setStats] = React.useState<any[]>(
    initialStats && initialStats.length > 0
      ? initialStats.map((s) => ({
          ...s,
          icon: ICON_MAP[s.icon] || Stud,
        }))
      : FALLBACK_STATS
  );
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // adjust how much visible before triggering
  });

  React.useEffect(() => {
    if (initialStats && initialStats.length > 0) {
      const mapped = initialStats.map((s: any) => ({
        label: s.label,
        count: s.count,
        icon: ICON_MAP[s.icon] || Stud,
      }));
      setStats(mapped);
    }
  }, [initialStats]);

  return (
    <div ref={ref} className="relative container mx-auto px-6 py-20 bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:divide-x md:divide-dotted md:divide-black text-center">
        {stats.map((stat, index) => {
          const number = parseInt(stat.count);
          const suffix = stat.count.includes("+") ? "+" : "";

          return (
            <div key={index} className="px-4 flex flex-col items-center gap-3">
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-dotted border-black p-2" />
                <div className="z-10 bg-[#FFBC36] w-12 h-12 flex items-center justify-center rounded-full">
                  <Image src={stat.icon} alt="icon" width={25} height={25} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#17254E]">
                {inView ? (
                  <CountUp end={number} duration={2} suffix={suffix} />
                ) : (
                  "0" + suffix
                )}
              </h3>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          );
        })}
      </div>
      <div className="absolute top-10 right-6">
        <Image src={Star} alt="star" width={40} height={40} />
      </div>
    </div>
  );
};

export default Stats;
