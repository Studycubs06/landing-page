import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link href="/" passHref>
            <h1 className="text-3xl text-[#0097B2] font-bold font-batangas cursor-pointer">
              Study<span className="text-[#FFBC36] font-bold">cubs</span>
            </h1>
          </Link>
          <div className="flex space-x-4 mt-3">
            <a
              href="https://www.instagram.com/Studycubs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-4xl cursor-pointer hover:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/study-cubs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-4xl cursor-pointer hover:text-gray-300" />
            </a>
            <a
              href="https://www.facebook.com/Studycubs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-4xl cursor-pointer hover:text-gray-300" />
            </a>
            <a
              href="https://twitter.com/Studycubs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-4xl cursor-pointer hover:text-gray-300" />
            </a>
            <a
              href="https://youtube.com/@Studycubs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-4xl cursor-pointer hover:text-gray-300" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Policies</h3>
          <ul className="space-y-2">
            <li
              className="hover:text-gray-300 cursor-pointer"
              style={{ fontFamily: "Arial, sans-serif", fontWeight: "100" }}
            >
              Privacy & Policies
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer"
              style={{ fontFamily: "Arial, sans-serif", fontWeight: "100" }}
            >
              Terms & Conditions
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer"
              style={{ fontFamily: "Arial, sans-serif", fontWeight: "100" }}
            >
              Cancel & Refund Policy
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer"
              style={{ fontFamily: "Arial, sans-serif", fontWeight: "100" }}
            >
              Community Guidelines
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Address</h3>
          <p style={{ fontFamily: "Arial, sans-serif", fontWeight: "100" }}>
            Pune, Maharashtra, India
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p style={{ fontFamily: "Arial, sans-serif", fontWeight: "100" }}>
            Email:{" "}
            <a
              href="mailto:support@Studycubs.com"
              className="hover:text-gray-300"
              style={{ fontFamily: "Arial, sans-serif", fontWeight: "100" }}
            >
              support@Studycubs.com
            </a>
          </p>
          <p style={{ fontFamily: "Arial, sans-serif", fontWeight: "100" }}>
            Phone:{" "}
            <a href="tel:+918147434014" className="hover:text-gray-300">
              +91-8147434014
            </a>
          </p>
        </div>
      </div>
      <div className="mx-auto px-6 md:px-32 mt-8">
        <hr className="bg-white mb-5" />
        <p className="font-inter text-[12px]">
          2025 Copyright <a href="#">Studycubs.</a> All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
