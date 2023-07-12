import React, { useState } from "react";
import { client } from "util/client";
import imageUrlBuilder from "@sanity/image-url";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import MasonryImageGallery from "@components/MasonryImageGallery.jsx";
import VideoEmbed from "../components/VideoEmbed";

export default function Media(props) {
  console.log("media page props: ", props.gallery[0]);
  const [media, setMedia] = useState({
    images: [],
    videoLinks: [],
    vidoes: [],
  });

  // if (props) {
  //   setMedia({
  //     images: props.gallery[0].images,
  //     videoLinks: props.gallery[0].videoLinks,
  //   });
  // }
  return (
    <div
      style={{
        backgroundColor: `#f2f2f2`,
        padding: `2.5em`,
        paddingTop: `5em`,
      }}
    >
      <h1 style={{ color: `black`, opacity: `80%` }}>photos</h1>
      {props.gallery[0].images && (
        <MasonryImageGallery gallery={props.gallery[0].images} />
      )}

      {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="0.5rem">
          {props.gallery[0].images ? (
            props.gallery[0].images.map((image) => {
              console.log("image: ", image);
              return (
                <img
                  key={image._key}
                  src={urlFor(image).auto("format").url()}
                />
              );
            })
          ) : (
            <p>no images to show</p>
          )}
        </Masonry>
      </ResponsiveMasonry> */}

      <h1
        style={{
          color: `black`,
          opacity: `80%`,
          paddingBottom: `1em`,
        }}
      >
        videos
      </h1>
      {props.gallery[0].videoLinks &&
        props.gallery[0].videoLinks.map((vid) => {
          return <VideoEmbed videoUrl={vid} />;
          // <MasonryImageGallery gallery={props.gallery[0].videoLinks} />;
        })}
    </div>
  );
}

export async function getStaticProps() {
  const gallery = await client.fetch(
    `*[_type == "gallery" && title == "Media Page"]`
  );

  return {
    props: {
      images: gallery[0].images || null,
      videoLinks: gallery[0].videosUrl || null,
      videos: gallery[0].videos || null,
      gallery,
    },
  };
}
