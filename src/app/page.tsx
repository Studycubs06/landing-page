import BookDemo from "@/components/BookDemo";
import EnrollNow from "@/components/EnrollNow";
import FAQComponent from "@/components/FAQComponent";
import Financial from "@/components/Financial";
import Hero from "@/components/Hero";
import OurCourses from "@/components/OurCourses";
import ParentChoice from "@/components/ParentChoice";
import SuperCub from "@/components/SuperCub";
import ThirdSection from "@/components/ThirdSection";
import WhytoChoose from "@/components/WhytoChose";

export const metadata = {
  title: "StudyCubs | Learn Smarter",
  description:
    "Studycubs offers personalized online learning for grades 3-10 in subjects like public speaking, English, and creative writing.",
  keywords:
    "online learning, personalized classes, public speaking, English grammar, creative writing, study platform, kids education, grade 3 to 10, personal growth, confidence building",
  og: {
    title: "StudyCubs - Learning Made Simple!",
    description:
      "Studycubs offers personalized online classes for students in grades 3 to 10, covering essential academic and life skills. Join our community today!",
  },
  twitter: {
    card: "summary_large_image",
    title: "StudyCubs - Learning Made Simple!",
    description:
      "Studycubs offers personalized online classes for students in grades 3 to 10, covering essential academic and life skills. Join our community today!",
  },
  social: {
    instagram: "https://www.instagram.com/studycubs/",
    twitter: "https://twitter.com/studycubs",
  },
  // Add favicon
  favicon: "/favicon.ico",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <EnrollNow />
      <ThirdSection />
      <Financial />
      <BookDemo />
      <SuperCub />
      <ParentChoice />
      <OurCourses />
      <WhytoChoose />
      <FAQComponent />
    </div>
  );
}

//       "@context": "https://schema.org",
//       "@type": "Organization",
//       "name": "StudyCubs",
//       "url": "https://www.studycubs.com",
//       "logo": "https://www.studycubs.com/logo.png",
//       "sameAs": [
//         "https://www.facebook.com/studycubs",
//         "https://twitter.com/studycubs",
//         "https://www.instagram.com/studycubs"
//       ],
//       "contactPoint": {
//         "@type": "ContactPoint",
//         "telephone": "+91 79 7331 8217",
//         "contactType": "Customer Service",
//         "areaServed": "India",
//         "availableLanguage": "English & Hindi"
//       },
//       "address": {
//         "@type": "PostalAddress",
//         "streetAddress": "Pune, India",
//         "addressLocality": "Pune",
//         "addressRegion": "Maharastra",
//         "postalCode": "411014",
//         "addressCountry": "IN"
//       },
//       "description": "StudyCubs is an online platform offering premium educational resources and study materials to students worldwide.",
//       "slogan": "Unlock your potential with StudyCubs."
//     }</script><style> /* devanagari */
//     @font-face {
//       font-family: 'Poppins';
//       font-style: normal;
//       font-weight: 100;
//       src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/v20/pxiGyp8kv8JHgFVrLPTucXtAKPY.woff2) format('woff2');
//       unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
//     }
//     /* latin-ext */
//     @font-face {
//       font-family: 'Poppins';
//       font-style: normal;
//       font-weight: 100;
//       src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/v20/pxiGyp8kv8JHgFVrLPTufntAKPY.woff2) format('woff2');
//       unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
//     }
//     /* latin */
//     @font-face {
//       font-family: 'Poppins';
//       font-style: normal;
//       font-weight: 100;
//       src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/v20/pxiGyp8kv8JHgFVrLPTucHtA.woff2) format('woff2');
//       unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
//     }
//     /* devanagari */
//     @font-face {
//       font-family: 'Poppins';
//       font-style: normal;
//       font-weight: 500;
//       src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/v20/pxiByp8kv8JHgFVrLGT9Z11lFc-K.woff2) format('woff2');
//       unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
//     }
//     /* latin-ext */
//     @font-face {
//       font-family: 'Poppins';
//       font-style: normal;
//       font-weight: 500;
//       src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2) format('woff2');
//       unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
//     }
//     /* latin */
//     @font-face {
//       font-family: 'Poppins';
//       font-style: normal;
//       font-weight: 500;
//       src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format('woff2');
//       unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
//     }

//     /* poppins light */
//     @font-face {
//         font-family: 'Poppins';
//         font-style: normal;
//         font-weight: 300;
//         src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/Poppins-Light.ttf) format('truetype');
//         unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
//       }

//     /* poppins regular */
//     @font-face {
//         font-family: 'Poppins';
//         font-style: normal;
//         font-weight: 400;
//         src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/Poppins-Regular.ttf) format('truetype');
//         unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
//     }

//     /* poppins thin */
//     @font-face {
//         font-family: 'Poppins';
//         font-style: normal;
//         font-weight: 100;
//         src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/Poppins-Thin.ttf) format('truetype');
//         unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
//     }

//     /* poppins medium */
//     @font-face {
//         font-family: 'Poppins';
//         font-style: normal;
//         font-weight: 500;
//         src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/Poppins-Medium.ttf) format('truetype');
//         unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
//     }

//     /* poppins semi bold */
//     @font-face {
//         font-family: 'Poppins';
//         font-style: normal;
//         font-weight: 600;
//         src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/Poppins-SemiBold.ttf) format('truetype');
//         unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
//     }

//     /* poppins bold */
//     @font-face {
//         font-family: 'Poppins';
//         font-style: normal;
//         font-weight: 700;
//         src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/Poppins-Bold.ttf) format('truetype');
//         unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
//     }

//     </style></head>
