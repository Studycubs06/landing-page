import AboutUs from "@/components/AboutUs";
import AboutUsBoxes from "@/components/AboutUsBoxes";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SuperCubs from "@/components/SuperCubs";
import Testimonials from "@/components/Testimonials";
import TopCourses from "@/components/TopCourses";
import WhytoChose from "@/components/WhytoChose";
import PricingPackage from "@/components/PricingPackage";
import { sanityFetch } from "@/sanity/lib/fetch";
import { COURSES_QUERY, STATS_QUERY, TESTIMONIALS_QUERY } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [courses, stats, testimonials] = await Promise.all([
    sanityFetch<any[]>({ query: COURSES_QUERY, tags: ["course"], revalidate: 0 }),
    sanityFetch<any[]>({ query: STATS_QUERY, tags: ["stat"], revalidate: 0 }),
    sanityFetch<any[]>({ query: TESTIMONIALS_QUERY, tags: ["testimonial"], revalidate: 0 }),
  ]);

  console.log("Sanity data:", {
    coursesCount: courses?.length,
    statsCount: stats?.length,
    testimonialsCount: testimonials?.length,
  });

  return (
    <>
      <Hero />
      <AboutUsBoxes />
      <PricingPackage />
      <AboutUs />
      <Banner />
      <Stats initialStats={stats} />
      <WhytoChose />
      <Testimonials initialTestimonials={testimonials} />
      <TopCourses initialCourses={courses} />
      <SuperCubs />
    </>
  );
}
