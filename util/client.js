import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "yr5ykait",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});
