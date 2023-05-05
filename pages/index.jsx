import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../util/client";
import NavBar from "components/navBar";
import Projects from "./projects";
import Events from "./events";

export default function IndexPage({ heroPhotos, projects, events }) {
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
          style={{ height: '50vh' }`,
      }}
    >
      <div className="background-canvas">
        <div className="background-overlay"></div>
      </div>
      {/* <header>
        <h1>Melissa Rich NYC</h1>
      </header> */}
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
          <a href="/bio">
            <img
              src={urlFor(heroPhotos[0].images[0])
                .auto("format")
                .fit("fill")
                .url()}
              style={{ height: `80vh`, marginTop: `3.5rem` }}
            />
          </a>
        </div>
        <div className="index-section-container">
          <h1>projects</h1>
          <Projects projects={projects} />
        </div>
        <div className="index-section-container">
          <h1>events</h1>
          <Events events={events} />
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
  const projects = await client.fetch(`*[_type == "project"]`);
  const events = await client.fetch(`*[_type == "event"]`);

  return {
    props: {
      heroPhotos,
      projects,
      events,
    },
  };
}


