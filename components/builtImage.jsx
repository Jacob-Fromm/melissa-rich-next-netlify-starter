import imageUrlBuilder from "@sanity/image-url";
import { client } from "../util/client";
import React from "react";

export default function BuiltImage(imageData) {
  console.log(imageData);
  return <img src={urlFor(imageData).url()} />;
}

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}
