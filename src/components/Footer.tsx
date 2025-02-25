import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h1 className="text-4xl text-[#FFBC36] font-bold font-batangas">
            Study<span className="text-[#0097B2] font-bold">Cubs</span>
          </h1>
          <div className="flex space-x-4 mt-3">
            <FaInstagram className="text-4xl cursor-pointer hover:text-gray-300" />
            <FaLinkedin className="text-4xl cursor-pointer hover:text-gray-300" />
            <FaFacebook className="text-4xl cursor-pointer hover:text-gray-300" />

            <FaTwitter className="text-4xl cursor-pointer hover:text-gray-300" />
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
              href="mailto:support@studycubs.com"
              className="hover:text-gray-300"
              style={{ fontFamily: "Arial, sans-serif", fontWeight: "100" }}
            >
              support@studycubs.com
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
    </footer>
  );
};

export default Footer;
