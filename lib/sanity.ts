import { createClient } from "next-sanity";
// In a separate file like lib/sanity.ts




export const client = createClient({
  projectId: "2uuemyfh",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});


// Create an image URL builder instance
