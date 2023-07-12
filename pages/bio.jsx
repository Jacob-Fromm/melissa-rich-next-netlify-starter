import { client } from "../util/client";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

export default function Bio({ bio }) {
  console.log(bio);
  console.log(bio[0].tiktok);
  let bioBackgroundImage = urlFor(bio[0].photo).url();

  return (
    <div
      className="bio-container"
      style={{
        height: `100vh`,
        width: `100vw`,
        backgroundImage: `url(${bioBackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {bio.length > 0 && (
        <div className="bio-text-container">
          <h2 style={{ color: `white` }}>{bio[0].headline}</h2>
          <div className="bio-text">
            <PortableText className="bio-text-text" value={bio[0].fullBio} />
            <div
              className="bio-socials"
              style={{
                display: `flex`,
                flexDirection: `row`,
                justifyContent: `center`,
                border: `1px solid white`,
                marginTop: `1rem`,
              }}
            >
              {bio[0].tiktok ? (
                <a href={bio[0].tiktok} target="_blank">
                  <p>TikTok | </p>
                </a>
              ) : (
                ""
              )}
              {bio[0].instagram ? (
                <a href={bio[0].instagram} target="_blank">
                  <p>Instagram | </p>
                </a>
              ) : (
                ""
              )}
              {bio[0].email ? (
                <a href={`mailto:${bio[0].email}`} target="_blank">
                  <p>Email me!</p>
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
          <img src="assets/envelope.jpg" alt="" />
          {/* <img src={urlFor(bio[0].photo).auto("format").fit("fill").url()}
          style={{ height: `100vh` }}/> */}
        </div>
      )}
      {bio.length > 0 && (
        <div>{/* <pre>{JSON.stringify(bio, null, 2)}</pre> */}</div>
      )}
    </div>
  );
}

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export async function getStaticProps() {
  const bio = await client.fetch(`*[_type == "bio"]`);

  return {
    props: {
      bio,
    },
  };
}
