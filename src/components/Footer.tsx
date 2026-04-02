import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import HeroBG from "../assets/images/footerBG.webp";
import { IoIosArrowForward } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import { sanityFetch } from "@/sanity/lib/fetch";
import { LEGAL_DOCS_QUERY } from "@/sanity/lib/queries";

const Footer = async () => {
  const legalDocs = await sanityFetch<any[]>({
    query: LEGAL_DOCS_QUERY,
    tags: ["legal"],
  });

  return (
    <>
      <section className="relative w-full h-auto md:min-h-[600px] text-white overflow-hidden pb-12">
        {/* Background Image */}
        <Image
          src={HeroBG}
          alt="StudyCubs Footer Background"
          fill
          className="object-cover object-center z-0"
          priority
        />


        {/* Global SEO Overlay / Content */}
        <div className="relative z-10 w-full">
          {/* Contact Details */}
          <div className="border-b border-white/20 mt-5 pb-5 md:pb-0 md:mt-0 md:px-20 lg:px-48 xlg:px-64">
            <div className="pt-8 pb-8 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="hidden md:block absolute top-0 left-1/3 h-full border-l border-white/20 transform -translate-x-1/2"></div>
              <div className="hidden md:block absolute top-0 left-2/3 h-full border-l border-white/20 transform -translate-x-1/2"></div>

              <div className="flex items-start ml-6 md:ml-0 gap-4 group">
                <div className="border border-white/50 p-3 rounded-full flex items-center justify-center group-hover:bg-[#0097B2] group-hover:border-[#0097B2] transition-all">
                  <FaMapMarkerAlt className="text-white text-md" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-[#2AB7CA] font-bold tracking-widest">Find Us</p>
                  <p className="text-sm font-light">Pune, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 px-6 group">
                <div className="border border-white/50 p-3 rounded-full flex items-center justify-center group-hover:bg-[#0097B2] group-hover:border-[#0097B2] transition-all">
                  <FaPhoneAlt className="text-white text-md" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-[#2AB7CA] font-bold tracking-widest">Phone</p>
                  <p className="text-sm font-light">(+91) 8147434014</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pl-6 group">
                <div className="border border-white/50 p-3 rounded-full flex items-center justify-center group-hover:bg-[#0097B2] group-hover:border-[#0097B2] transition-all">
                  <MdEmail className="text-white text-md" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-[#2AB7CA] font-bold tracking-widest">Email</p>
                  <p className="text-sm font-light">support@studycubs.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company & SEO Content */}
          <div className="mt-12 container mx-auto px-6 md:px-20 lg:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6">
              <Link href="/" passHref>
                <div className="inline-block">
                  <h1 className="text-3xl text-[#0097B2] font-batangas font-bold cursor-pointer hover:scale-105 transition-transform">
                    Study<span className="text-[#FFBC36]">cubs</span>
                  </h1>
                </div>
              </Link>
              <div>
                <p className="text-[13px] leading-relaxed text-gray-200">
                  StudyCubs is India&apos;s leading <strong className="text-white font-bold">Public Speaking Platform</strong> for students. 
                  We specialize in <strong className="text-white font-bold">Public Speaking Classes (Class 3rd to 10th)</strong>, empowering children with 
                  confidence, world-class oratory skills, and practical knowledge through expert live mentoring.
                </p>
              </div>

              <div className="flex space-x-4">
                {[
                  { icon: FaInstagram, href: "https://www.instagram.com/Studycubs/" },
                  { icon: FaFacebook, href: "https://www.facebook.com/Studycubs" },
                  { icon: FaTwitter, href: "https://twitter.com/Studycubs" },
                  { icon: FaYoutube, href: "https://youtube.com/@Studycubs" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-[#0097B2] p-2.5 rounded-full transition-all hover:-translate-y-1"
                  >
                    <social.icon className="text-lg text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-batangas font-bold mb-6 text-[#FFBC36]">Dynamic Learning</h3>
              <ul className="space-y-4">
                {[
                  { label: "Public Speaking", href: "/#courses" },
                  { label: "Financial Planning", href: "/#courses" },
                  { label: "Public Speaking (3-10th)", href: "/#courses" },
                  { label: "Our Blog", href: "/blog" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      href={item.href} 
                      className="text-[14px] text-gray-200 hover:text-[#0097B2] flex items-center gap-2 group transition-colors"
                    >
                      <IoIosArrowForward className="group-hover:translate-x-1 transition-transform" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-batangas font-bold mb-6 text-[#FFBC36]">Legal Policies</h3>
              <ul className="space-y-2">
                {/* 
                  We map dynamic links if they exist, 
                  but we show your 4 mandatory links by default 
                  so you never see an empty list. 
                */}
                {[
                  { title: "Privacy & Policies", slug: "privacy-policy" },
                  { title: "Terms & Conditions", slug: "terms-conditions" },
                  { title: "Cancel & Refund Policy", slug: "refund-policy" },
                  { title: "Community Guidelines", slug: "community-guidelines" }
                ].map((fallback) => {
                  const dynamicDoc = legalDocs?.find(d => d.slug === fallback.slug);
                  return (
                    <li key={fallback.slug}>
                      <Link 
                        href={`/policy/${fallback.slug}`}
                        className="text-[14px] text-gray-200 hover:text-[#0097B2] transition-colors"
                      >
                        {dynamicDoc?.title || fallback.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>


            <div>
              <h3 className="text-xl font-batangas font-bold mb-6 text-[#FFBC36]">Join the Tribe</h3>
              <p className="text-[13px] text-gray-300 mb-4">
                Get updates on **Public Speaking Masterclasses** and student highlights.
              </p>
              <div className="bg-white/10 rounded-lg p-1 flex items-center gap-2 border border-white/20 focus-within:border-[#0097B2] transition-all">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent outline-none text-white text-[14px] px-3 py-2 flex-grow"
                  suppressHydrationWarning
                />
                <button 
                  className="bg-[#0097B2] px-4 py-2 rounded-md text-[12px] font-bold text-white hover:bg-[#00869e] transition-colors"
                  suppressHydrationWarning
                >
                  SUBSCRIBE
                </button>
              </div>
              <p className="text-[10px] mt-4 text-gray-400">
                StudyCubs: India&apos;s Best <strong className="text-gray-300">Public Speaking Classes (Class 3rd to 10th)</strong>.
              </p>

            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center md:px-32 bg-[#111111] text-gray-400 border-t border-white/5">
        <p className="text-[11px] font-inter">
          Copyright © 2025{" "}
          <Link href="/" className="text-[#0097B2] font-semibold hover:underline">
            StudyCubs
          </Link>{" "}
          - All Rights Reserved
        </p>
        <p className="text-[10px] mt-2 md:mt-0 font-light italic">
          Empowering Future Leaders through Public Speaking
        </p>
      </div>
    </>
  );
};

export default Footer;

