import Head from "next/head";

export const metadata = {
  title: "Financial Planning for Students | StudyCubs",
  description:
    "Teach your child financial literacy with our engaging financial planning course for students in 7th grade to UG. Build confidence in budgeting, investing, and smart money management.",
  keywords: [
    "Financial Planning for students",
    "Money Management",
    "Budgeting for kids",
    "Financial Literacy",
    "Investing for teens",
  ],
  authors: [{ name: "StudyCubs", url: "https://studycubs.com" }],
  openGraph: {
    title: "Financial Planning for Students | StudyCubs",
    description:
      "Our activity-based curriculum helps students master financial literacy, from budgeting to investing.",
    url: "https://studycubs.com/financial-planning",
    siteName: "StudyCubs",
    images: [
      {
        url: "https://studycubs.com/finance-kid.png",
        width: 1200,
        height: 630,
        alt: "Financial Planning Course - StudyCubs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Planning for Students | StudyCubs",
    description:
      "Engaging financial planning course for students to build confidence in money management.",
    images: ["https://studycubs.com/finance-kid.png"],
  },
  alternates: {
    canonical: "https://studycubs.com/financial-planning",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Financial Planning for Students",
            description:
              "Our activity-based curriculum in financial planning helps students understand the 'Why' behind money management, building confidence in budgeting, investing, and financial decision-making.",
            provider: {
              "@type": "Organization",
              name: "StudyCubs",
              url: "https://studycubs.com",
            },
            educationalLevel: "7th Grade - UG",
            offers: {
              "@type": "Offer",
              price: "1999", // Update if there's a price
              priceCurrency: "INR",
              url: "https://studycubs.com/financial-planning",
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      </Head>
      {children}
    </>
  );
}
