import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Head from "next/head";

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
  favicon: "/favicon.ico",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "StudyCubs",
              url: "https://yourwebsite.com",
              description:
                "Empowering students with essential skills in public speaking, coding, and financial planning through personalized learning.",
              publisher: {
                "@type": "Organization",
                name: "StudyCubs",
                logo: "https://yourwebsite.com/logo.png",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "StudyCubs",
              url: "https://yourwebsite.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                addressCountry: "India",
              },
              sameAs: [
                "https://www.facebook.com/studycubs",
                "https://www.instagram.com/studycubs",
                "https://www.linkedin.com/company/studycubs",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://yourwebsite.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Courses",
                  item: "https://yourwebsite.com/courses",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Contact",
                  item: "https://yourwebsite.com/contact",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Courses at StudyCubs",
              itemListElement: [
                {
                  "@type": "Course",
                  name: "Public Speaking",
                  description:
                    "Develop confidence in speaking, reading, and writing.",
                  provider: {
                    "@type": "EducationalOrganization",
                    name: "StudyCubs",
                  },
                },
                {
                  "@type": "Course",
                  name: "Financial Planning",
                  description:
                    "Master finance and make smart investment choices.",
                  provider: {
                    "@type": "EducationalOrganization",
                    name: "StudyCubs",
                  },
                },
                {
                  "@type": "Course",
                  name: "Website Development",
                  description: "Learn to build websites from scratch.",
                  provider: {
                    "@type": "EducationalOrganization",
                    name: "StudyCubs",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Will this learning platform have the same impact as regular classes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! StudyCubs provides interactive sessions that engage students just like regular classes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How will the courses offered benefit students?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our courses help students gain real-world skills in public speaking, coding, and financial literacy.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are There Live Tutoring Sessions Available?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we offer live tutoring sessions to ensure personalized learning.",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              itemReviewed: {
                "@type": "EducationalOrganization",
                name: "StudyCubs",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "Sangeeta Jain",
              },
              reviewBody:
                "StudyCubs seems to be a promising platform for young kids to learn and grow. The teachers are great at keeping children engaged.",
            }),
          }}
        />
      </Head>
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
