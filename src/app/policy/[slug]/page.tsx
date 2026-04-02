import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { LEGAL_BY_SLUG_QUERY } from "@/sanity/lib/queries";

interface PolicyPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: PolicyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const policy = await sanityFetch<any>({
    query: LEGAL_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!policy) return { title: "Policy Not Found | StudyCubs" };

  return {
    title: `${policy.title} | StudyCubs`,
    description: `Official ${policy.title} for StudyCubs - India's best public speaking platform.`,
  };
}

const POLICY_FALLBACKS: Record<string, { title: string; content: any; icon: string }> = {
  "privacy-policy": {
    title: "Privacy & Policies",
    icon: "ShieldCheck",
    content: [
      {
        _type: "block",
        children: [{ _type: "span", text: "Welcome to StudyCubs. Your privacy is critically important to us. This policy details how we handle your personal data when you use our Public Speaking Platform." }],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "1. Information We Collect" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "We collect personal information such as name, email, and contact details during enrollment. We also collect student progress data to personalize the learning journey. Automated data (IP address, cookies) is collected to improve website performance." }],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "2. Data Protection" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "StudyCubs uses industry-standard encryption to protect your sensitive data. We never sell your personal information to third parties. Your data is used exclusively to provide world-class mentoring." }],
        style: "normal",
      },
    ],
  },
  "terms-conditions": {
    title: "Terms & Conditions",
    icon: "FileText",
    content: [
      {
        _type: "block",
        children: [{ _type: "span", text: "By accessing StudyCubs, you agree to be bound by these Terms and Conditions. These terms govern the use of our Public Speaking Classes for students (Class 3rd to 10th)." }],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "1. Service Eligibility" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Our classes are designed for children aged 8-16. Parents or legal guardians must manage the account and enrollment for minors." }],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "2. Intellectual Property" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "All curriculum content, videos, and materials provided by StudyCubs are the exclusive property of the company and may not be redistributed without permission." }],
        style: "normal",
      },
    ],
  },
  "refund-policy": {
    title: "Cancel & Refund Policy",
    icon: "RotateCcw",
    content: [
      {
        _type: "block",
        children: [{ _type: "span", text: "We are committed to student excellence. If you feel our public speaking classes aren't a fit, we have a clear refund process." }],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "1. Cancellation Window" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Enrollments can be cancelled within 48 hours of initial registration for a full refund. Cancellations made after this period but before the second live class are eligible for a 50% refund." }],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "2. Refund Process" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Refund requests must be submitted via email to support@studycubs.com. Approved refunds will be processed via the original payment method within 7-10 business days." }],
        style: "normal",
      },
    ],
  },
  "community-guidelines": {
    title: "Community Guidelines",
    icon: "Users",
    content: [
      {
        _type: "block",
        children: [{ _type: "span", text: "The StudyCubs tribe is built on mutual respect and growth. These guidelines ensure a safe space for every child's voice." }],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "1. Zero Tolerance for Bullying" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "We maintain a zero-tolerance policy for any form of bullying, harassment, or disrespectful behavior during live mentoring sessions." }],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "2. Participation & Encouragement" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Students are encouraged to practice daily, support their peers' progress, and stay committed to their public speaking journey." }],
        style: "normal",
      },
    ],
  },
};


import Link from "next/link";
import { ShieldCheck, FileText, RotateCcw, Users, ArrowLeft, Calendar } from "lucide-react";

export default async function PolicyPage({ params }: PolicyPageProps) {
  const { slug } = await params;
  const policyFromSanity = await sanityFetch<any>({
    query: LEGAL_BY_SLUG_QUERY,
    params: { slug },
  });

  const policy = policyFromSanity || (POLICY_FALLBACKS[slug] ? {
    ...POLICY_FALLBACKS[slug],
    lastUpdated: new Date().toISOString()
  } : null);

  if (!policy) {
    notFound();
  }

  // Map icon component
  const icons: any = { ShieldCheck, FileText, RotateCcw, Users };
  const PageIcon = icons[policy.icon || "FileText"] || FileText;

  return (
    <div className="relative min-h-screen bg-[#070B14] overflow-hidden selection:bg-[#0097B2]/30 selection:text-[#0097B2]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: "linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)", backgroundSize: "40px 40px" }} 
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0097B2] rounded-full blur-[160px] opacity-10 -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFBC36] rounded-full blur-[160px] opacity-10 -ml-48 -mb-48" />

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-32 space-y-12">
        {/* Navigation / Breadcrumb */}
        <div className="flex items-center gap-4 text-sm">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-gray-400 hover:text-[#0097B2] transition-colors group"
          >
            <div className="p-2 border border-white/10 rounded-full group-hover:border-[#0097B2] transition-all">
              <ArrowLeft size={16} />
            </div>
            Back to Website
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-[#0097B2] font-medium uppercase tracking-wider text-[10px]">Legal Center</span>
        </div>

        {/* Hero Section */}
        <section className="space-y-6">
          <div className="inline-flex items-center justify-center p-3 bg-[#0097B2]/10 border border-[#0097B2]/20 rounded-2xl text-[#0097B2]">
            <PageIcon size={32} />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-batangas font-bold text-white tracking-tight">
              {policy.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[#FFBC36]" />
                <span>Last Modified:</span>
              </div>
              <time className="text-white font-medium">
                {new Date(policy.lastUpdated).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </section>

        {/* Content Card (Glassmorphism) */}
        <article className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[32px] group-hover:border-white/20 transition-all duration-500" />
          
          <div className="relative p-8 md:p-16 space-y-10 prose prose-invert prose-lg max-w-none">
            <PortableText 
              value={policy.content} 
              components={{
                block: {
                  h2: ({children}) => (
                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-4 group/h2">
                      <span className="h-0.5 w-8 bg-[#0097B2] group-hover/h2:w-12 transition-all" />
                      {children}
                    </h2>
                  ),
                  normal: ({children}) => <p className="text-gray-300 leading-relaxed font-light text-[17px]">{children}</p>,
                  blockquote: ({children}) => (
                    <blockquote className="border-l-4 border-[#FFBC36] bg-[#FFBC36]/5 px-8 py-6 italic text-gray-200 rounded-r-2xl my-10 border-opacity-50">
                      {children}
                    </blockquote>
                  ),
                },
                marks: {
                  link: ({children, value}) => (
                    <a href={value.href} className="text-[#0097B2] underline underline-offset-4 decoration-white/20 hover:decoration-[#0097B2] transition-all font-medium">
                      {children}
                    </a>
                  ),
                  strong: ({children}) => <strong className="font-bold text-white">{children}</strong>,
                },
              }}
            />
          </div>
        </article>

        {/* Professional Dismiss/CTA */}
        <div className="text-center pt-8 border-t border-white/5 space-y-4">
          <p className="text-gray-400 text-sm">
            Questions about our policies? We&apos;re here to clarify.
          </p>
          <a 
            href="mailto:support@studycubs.com" 
            className="inline-flex items-center gap-2 bg-[#0097B2] hover:bg-[#00869e] text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#0097B2]/20"
          >
            Email Support Team
          </a>
        </div>
      </main>
    </div>
  );
}

