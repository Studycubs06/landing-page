import { sanityFetch } from "@/sanity/lib/fetch";
import { groq } from "next-sanity";
import { projectId, dataset } from "@/sanity/env";
import { createClient } from "@sanity/client";
import { revalidatePath } from "next/cache";

// Server Action for Seeding
async function seedLegalDocs() {
  "use server";
  
  const token = process.env.SANITY_AUTH_TOKEN;
  if (!token) throw new Error("SANITY_AUTH_TOKEN is missing in .env.local!");

  const adminClient = createClient({
    projectId,
    dataset,
    apiVersion: "2024-03-24",
    useCdn: false,
    token,
  });

  const legalDocs = [
    {
      _id: "legal-privacy-policy",
      _type: "legal",
      title: "Privacy & Policies",
      slug: { _type: "slug", current: "privacy-policy" },
      content: [
        { _type: "block", children: [{ _type: "span", text: "Welcome to StudyCubs. Your privacy matters." }], style: "normal" }
      ],
      lastUpdated: new Date().toISOString(),
    },
    {
      _id: "legal-terms-conditions",
      _type: "legal",
      title: "Terms & Conditions",
      slug: { _type: "slug", current: "terms-conditions" },
      content: [
        { _type: "block", children: [{ _type: "span", text: "By using StudyCubs, you agree to our terms." }], style: "normal" }
      ],
      lastUpdated: new Date().toISOString(),
    },
    {
      _id: "legal-refund-policy",
      _type: "legal",
      title: "Cancel & Refund Policy",
      slug: { _type: "slug", current: "refund-policy" },
      content: [
        { _type: "block", children: [{ _type: "span", text: "Refunds are processed within 7-10 days." }], style: "normal" }
      ],
      lastUpdated: new Date().toISOString(),
    },
    {
      _id: "legal-community-guidelines",
      _type: "legal",
      title: "Community Guidelines",
      slug: { _type: "slug", current: "community-guidelines" },
      content: [
        { _type: "block", children: [{ _type: "span", text: "Every student's voice matters in our tribe." }], style: "normal" }
      ],
      lastUpdated: new Date().toISOString(),
    }
  ];

  console.log("📡 Starting seed from Server Action...");
  for (const doc of legalDocs) {
    await adminClient.createOrReplace(doc);
  }
  
  revalidatePath("/debug-sanity");
  revalidatePath("/");
  console.log("✅ Seed complete!");
}

export default async function DebugSanityPage() {

  // Query ALL types to see what actually exists
  const diagnostics = await sanityFetch<any>({
    query: groq`{
      "legalDocs": count(*[_type == "legal"]),
      "blogPosts": count(*[_type == "post"]),
      "courses": count(*[_type == "course"]),
      "allTypes": *[] { _type }[0...100]
    }`,
  });

  const uniqueTypes = [...new Set(diagnostics.allTypes.map((t: any) => t._type))];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 font-mono">
      <h1 className="text-3xl font-bold text-[#FFBC36] mb-8">🔍 Sanity Connection Diagnostics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Connection Info */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-bold mb-4 text-[#0097B2]">📡 Current Connection</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 text-xs">Project ID</p>
              <p className="text-xl">{projectId}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Dataset</p>
              <p className="text-xl font-bold text-green-400">{dataset}</p>
            </div>
            <div className="pt-4 border-t border-gray-700">
              <p className="text-red-400 text-sm">
                💡 Tip: If these don&apos;t match your Sanity dashboard, your .env.local is wrong!
              </p>
            </div>
          </div>
        </div>

        {/* Counts Info */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-bold mb-4 text-[#0097B2]">📊 Document Counts</h2>
          <div className="space-y-4 text-lg">
            <div className="flex justify-between">
              <span>Legal Documents:</span>
              <span className={diagnostics.legalDocs > 0 ? "text-green-400" : "text-red-400"}>
                {diagnostics.legalDocs}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Blog Posts:</span>
              <span className={diagnostics.blogPosts > 0 ? "text-green-400" : "text-red-400"}>
                {diagnostics.blogPosts}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Courses:</span>
              <span className={diagnostics.courses > 0 ? "text-green-400" : "text-red-400"}>
                {diagnostics.courses}
              </span>
            </div>
          </div>
          
          <form action={seedLegalDocs} className="mt-8">
            <button 
              type="submit"
              className="w-full bg-[#FFBC36] hover:bg-[#e5a931] text-black font-bold py-3 rounded-lg transition-all"
            >
              🚀 FORCE SEED LEGAL DOCUMENTS
            </button>
          </form>
        </div>


        {/* Discovered Types */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 col-span-full">
          <h2 className="text-xl font-bold mb-4 text-[#0097B2]">🕵️ Found Document Types in {dataset}</h2>
          {uniqueTypes.length > 0 ? (
            <div className="flex flex-wrap gap-2 text-sm">
              {uniqueTypes.map((type: string) => (
                <span key={type} className="bg-gray-700 px-3 py-1 rounded-full border border-gray-600">
                  {type}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-red-400 italic">No documents of ANY type found. This dataset is empty!</p>
          )}
        </div>
      </div>

      <div className="mt-12 p-6 bg-[#0097B2]/10 border border-[#0097B2]/30 rounded-xl">
        <h3 className="font-bold mb-2">Next Steps:</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
          <li>Check the Project ID at the top-left of your <strong>Sanity Studio</strong>.</li>
          <li>If it is NOT <span className="text-white bg-gray-700 px-1">{projectId}</span>, update your <code>.env.local</code>.</li>
          <li>Make sure you are not in the <strong>development</strong> dataset if you seeded to <strong>production</strong>.</li>
        </ol>
      </div>
    </div>
  );
}
