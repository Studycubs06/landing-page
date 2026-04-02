import { groq } from "next-sanity";

export const COURSES_QUERY = groq`*[_type == "course"] | order(level asc) {
  _id,
  title,
  "slug": slug.current,
  level,
  grades,
  features,
  price,
  duration,
  classesPerMonth,
  mentorRatio,
  "imageUrl": image.asset->url
}`;

export const STATS_QUERY = groq`*[_type == "stat"] {
  _id,
  label,
  count,
  icon
}`;

export const TESTIMONIALS_QUERY = groq`*[_type == "testimonial"] {
  _id,
  name,
  role,
  quote,
  "avatarUrl": avatar.asset->url
}`;

export const BLOG_POSTS_QUERY = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  "mainImageUrl": mainImage.asset->url,
  "author": author->{name, "imageUrl": image.asset->url},
  "categories": categories[]->title
}`;

export const POST_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  body,
  "mainImageUrl": mainImage.asset->url,
  "author": author->{name, "imageUrl": image.asset->url, bio},
  "categories": categories[]->title
}`;

export const CATEGORIES_QUERY = groq`*[_type == "category"] {
  _id,
  title,
  description
}`;

export const LEGAL_DOCS_QUERY = groq`*[_type == "legal"] | order(title asc) {
  _id,
  title,
  "slug": slug.current
}`;

export const LEGAL_BY_SLUG_QUERY = groq`*[_type == "legal" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  content,
  lastUpdated
}`;

