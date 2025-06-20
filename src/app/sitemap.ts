import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://Studycubs.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: "https://Studycubs.com/#our-courses",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://Studycubs.com/public-speaking",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://Studycubs.com/website-development",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://Studycubs.com/financial-planning",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // {
    //   url: "https://Studycubs.com/contact",
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.6,
    // },
    {
      url: "https://Studycubs.com/#about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
