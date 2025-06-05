import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className="bg-white text-black font-inter py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="mt-5">
            <h2 className="text-2xl md:text-2xl font-inter mb-6">
              Get in Touch with Studycubs
            </h2>
            <p className="mb-6 md:w-1/2">
              Have questions, feedback, or need assistance? We&apos;re here to listen
              and support you. Reach out to Studycubs, and we&apos;ll ensure your
              learning journey is seamless and rewarding!
            </p>
            <p className="text-lg">
              Please mail us :{" "}
              <a href="mailto:support@Studycubs.com">support@Studycubs.com</a>
            </p>
            <p className="text-[#019DD7] mt-5">Follow us on</p>
            <div className="flex space-x-4 mt-3">
              <a
                href="https://www.facebook.com/Studycubs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  className="text-4xl cursor-pointer hover:text-gray-300"
                  size={15}
                  color="#575756"
                />
              </a>
              <a
                href="https://twitter.com/Studycubs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  className="text-4xl cursor-pointer hover:text-gray-300"
                  size={15}
                  color="#575756"
                />
              </a>
              <a
                href="https://www.instagram.com/Studycubs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="text-4xl cursor-pointer hover:text-gray-300"
                  size={15}
                  color="#575756"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/study-cubs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  className="text-4xl cursor-pointer hover:text-gray-300"
                  size={15}
                  color="#575756"
                />
              </a>
              <a
                href="https://youtube.com/@Studycubs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube
                  className="text-4xl cursor-pointer hover:text-gray-300"
                  size={15}
                  color="#575756"
                />
              </a>
            </div>
          </div>

          <div className="bg-white text-gray-800 md:p-6 py-6 w-full">
            <form className="space-y-4">
              <div>
                <label className="block font-medium">NAME</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-[#EDF0F2] rounded-md  mt-2"
                />
              </div>

              <div>
                <label className="block font-medium">PHONE</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-[#EDF0F2] rounded-md  mt-2"
                />
              </div>

              <div>
                <label className="block font-medium">EMAIL</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-[#EDF0F2] rounded-md  mt-2"
                />
              </div>

              <div>
                <label className="block font-medium">DESCRIBE PROBLEM</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-[#EDF0F2] rounded-md mt-2"
                ></textarea>
              </div>

              <div className="flex items-center">
                <label>Please check this box to proceed</label>
              </div>

              {/* <div className="bg-gray-300 text-center py-4 rounded-md">
                Google reCAPTCHA
              </div> */}

              <button
                type="submit"
                className=" bg-[#019DD7] text-white py-2 px-16 font-bold hover:bg-[#007A91] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
