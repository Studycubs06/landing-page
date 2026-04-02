const { createClient } = require("@sanity/client");
require("dotenv").config({ path: ".env.local" });
const fs = require("fs");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: "2024-03-24",
  token: process.env.SANITY_AUTH_TOKEN,
});

async function run() {
  const docs = await client.fetch("*[_type == 'legal'] { _id, title }");
  fs.writeFileSync("scripts/results.json", JSON.stringify(docs, null, 2));
  console.log(`FOUND ${docs.length} DOCUMENTS`);
}

run();
