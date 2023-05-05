import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "yr5ykait",
  dataset: "production",
  apiVersion: "2022-03-25",
  token: `skmgE29LYiVWn6WwJkim05zatyZSZISpchmYASnxpf1YpYk41c12ZEoyUfe2uYAVHUNYsRqwR5EqRuPbKYq3Nr2ZVRUSxwpD38OsGbj7SxuBOcPVotoYJhJytIUPXtk2itHdx9FxBPTkF5uqluqbaYveh3CqPwILSXRCxmSHdTh9jkSAY6Y8`,
  useCdn: false,
});

// const NYLON_API_URL = "https://rss.app/feeds/v1.1/xTdz3VYWDk2IIvrU.json";

// fetch(NYLON_API_URL)
//   .then((res) => res.json())
//   .then((catBreeds) => catBreeds.map(transform))
//   .then((pairs) =>
//     // documents is now an array of [country, cat], so we need to flatten it.
//     // We'll use lodash.flatten for that
//     flatten(documents)
//   )
//   .then((documents) => {
//     const countries = documents.filter((doc) => doc._type === "country");
//     const catBreeds = documents.filter((doc) => doc._type === "catBreed");

//     // Write all countries to the dataset using a createOrReplace mutation
//     const allCountriesWritten = Promise.all(
//       countries.map((country) => client.createOrReplace(country))
//     );

//     // After the countries has been written, go ahead and create (or replace) the cat documents
//     const allCatsWritten = allCountriesWritten.then(() =>
//       Promise.all(catBreeds.map((cat) => client.createOrReplace(cat)))
//     );

//     // continue when all cats has been written
//     return allCatsWritten;
//   });
