import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import path from "path";

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-24",
  token: process.env.SANITY_AUTH_TOKEN, // Use the token provided by the user
});

const legalDocs = [
  {
    _type: "legal",
    title: "Privacy & Policies",
    slug: { _type: "slug", current: "privacy-policy" },
    content: [
      {
        _type: "block",
        children: [{ _type: "span", text: "Welcome to StudyCubs. Your privacy is critically important to us. This policy explains how we collect, use, and safeguard your data when you visit our website and use our public speaking services." }],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "1. Information We Collect" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "We collect information you provide directly to us (name, email, etc.) and automatic data like device info to improve your learning experience." }],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "2. How We Use It" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Your data is used solely to personalize your learning journey, provide customer support, and keep you informed about our expert public speaking mentoring sessions." }],
        style: "normal",
      },
    ],
    lastUpdated: new Date().toISOString(),
  },
  {
    _type: "legal",
    title: "Terms & Conditions",
    slug: { _type: "slug", current: "terms-conditions" },
    content: [
      {
        _type: "block",
        children: [{ _type: "span", text: "By using StudyCubs, you agree to comply with and be bound by the following terms and conditions. Please read them carefully." }],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "1. Acceptance of Terms" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Use of our services represents acceptance of these terms. These services include online and offline public speaking classes for students (Class 3rd to 10th)." }],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "2. User Responsibility" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account." }],
        style: "normal",
      },
    ],
    lastUpdated: new Date().toISOString(),
  },
  {
    _type: "legal",
    title: "Cancel & Refund Policy",
    slug: { _type: "slug", current: "refund-policy" },
    content: [
      {
        _type: "block",
        children: [{ _type: "span", text: "We strive to provide the best educational experience. If you are not satisfied with our public speaking classes, please contact us." }],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "1. Refund Eligibility" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Refund requests are evaluated on a case-by-case basis. Generally, if a student cancels within the first 48 hours of enrollment, a full refund is processed." }],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "2. Process" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Refunds, when approved, are credited back to the original payment method within 7-10 business days." }],
        style: "normal",
      },
    ],
    lastUpdated: new Date().toISOString(),
  },
  {
    _type: "legal",
    title: "Community Guidelines",
    slug: { _type: "slug", current: "community-guidelines" },
    content: [
      {
        _type: "block",
        children: [{ _type: "span", text: "Our community is built on respect, growth, and empowerment. Every student's voice matters in our public speaking tribe." }],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "1. Respect for All" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "We maintain a zero-tolerance policy for bullying or harassment. We encourage constructive feedback and mutual support." }],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "2. Continuous Learning" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Students are encouraged to practice daily, support their peers, and participate actively in all public speaking sessions." }],
        style: "normal",
      },
    ],
    lastUpdated: new Date().toISOString(),
  },
];

async function seed() {
  console.log("🚀 Starting Legal Content Seeding...");

  for (const doc of legalDocs) {
    try {
      console.log(`📡 Creating/Updating: ${doc.title}...`);
      await client.createOrReplace({
        _id: `legal-${doc.slug.current}`,
        ...doc,
      });
      console.log(`✅ Success: ${doc.title} is now live.`);
    } catch (err) {
      console.error(`❌ Error seeding ${doc.title}:`, err.message);
    }
  }

  console.log("\n✨ Seeding Complete! Check your Sanity Studio.");
}

seed();
