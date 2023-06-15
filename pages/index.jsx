import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../util/client";
import NavBar from "components/navBar";
import Projects from "./projects";
import Events from "./events";
import Writing from "./writing";

export default function IndexPage({
  heroPhotos,
  projects,
  events,
  sanityArticles,
}) {
  callNewArticles();
  console.log("index page writing props: ", sanityArticles);
  // let gallery = heroPhotos[0].images.map((photo) => {
  //   return <img src={urlFor(photo).width(300).url()} />;
  // });
  return (
    <div
      className="appContainer"
      style={{
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
          <h1>Writing — Nylon</h1>
          <br></br>
          <Writing articles={sanityArticles} />
          <br />
        </div>
        <div className="index-section-container">
          <h1>events</h1>
          <Events events={events} />
        </div>
        <div className="index-section-container">
          <h1>projects</h1>
          <Projects projects={projects} />
        </div>
      </main>
    </div>
  );
}

const callNewArticles = () => {
  const NYLON_API_URL = "https://rss.app/feeds/v1.1/BXUeAyezFac0HGpi.json";

  fetch(NYLON_API_URL)
    .then((res) => res.json())
    .then((data) => data.items.map(transformNylonData))
    .then((articles) => {
      console.log("articles in fetch in index:", articles);
      let transaction = client.transaction();
      articles.forEach((article) => {
        transaction.createOrReplace(article);
      });
      return transaction.commit();
    });
};
const transformNylonData = (article) => {
  return {
    _id: `imported-article-${article.id}`,
    _type: "writingNylon",
    title: article.title,
    tagline: article.content_text,
    image: article.image,
    url: article.url,
    publicationDate: article.date_published,
  };
};

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export async function getStaticProps() {
  const heroPhotos = await client.fetch(`*[_type == "heroPhotos"]`);
  const projects = await client.fetch(`*[_type == "project"]`);
  const events = await client.fetch(`*[_type == "event"]`);
  const sanityArticles = await client.fetch(`*[_type == "writingNylon"]`);

  return {
    props: {
      heroPhotos,
      projects,
      events,
      sanityArticles,
    },
  };
}
