import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../util/client";
import NavBar from "components/navBar";

export default function IndexPage({ heroPhotos }) {
  console.log(heroPhotos[0].images);
  let gallery = heroPhotos[0].images.map((photo) => {
    return <img src={urlFor(photo).width(300).url()} />;
  });
  console.log(gallery);
  return (
    <div
      className="appContainer"
      style={{
        // height: "80vh",
        // width: "100vw",
        // display: "flex",
        // flexDirection: "column",
        // marginTop: "5em",
        // backgroundColor: "black",
        // backgroundColor: "red",
        backgroundImage: `urlFor(heroPhotos[0].images[0]).auto("format").fit("fill").url()}
          style={{ height: '90vh' }`,
      }}
    >
      <header>
        <h1>Melissa Rich NYC</h1>
      </header>
      <main>
        <div
          className="simpleNav"
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
          }}
        ></div>
        <div style={{ position: `relative`, textAlign: `center` }}>
          <img
            src={urlFor(heroPhotos[0].images[0])
              .auto("format")
              .fit("fill")
              .url()}
            style={{ height: `90vh` }}
          />
        </div>
      </main>
    </div>
  );
}

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export async function getStaticProps() {
  const heroPhotos = await client.fetch(`*[_type == "heroPhotos"]`);

  return {
    props: {
      heroPhotos,
    },
  };
}
