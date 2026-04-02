const { createClient } = require("@sanity/client");
require("dotenv").config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-24",
  token: process.env.SANITY_AUTH_TOKEN,
});

async function check() {
  console.log("🔍 Checking Sanity Content Lake...");
  console.log(`📡 Project: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`);
  console.log(`📡 Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET}`);

  try {
    const docs = await client.fetch("*[_type == 'legal'] { _id, title, 'slug': slug.current }");
    if (docs.length === 0) {
      console.log("❌ NO legal documents found in this dataset.");
    } else {
      console.log(`✅ FOUND ${docs.length} legal documents:`);
      docs.forEach(d => console.log(` - [${d._id}] ${d.title} (${d.slug})`));
    }
  } catch (err) {
    console.error("❌ ERROR querying Sanity:", err.message);
  }
}

check();
