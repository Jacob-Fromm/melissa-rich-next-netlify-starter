import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../util/client";
import { PortableText } from "@portabletext/react";

export default function Events({ events }) {
  console.log(events);
  return (
    <div className="container">
      {events.length > 0 && (
        <ul className="project-card-container">
          {events.map((event) => (
            <a href={event.url}>
              <li className="project-card event-card" key={event._id}>
                <div className="project-title-and-description">
                  <h2 id="event-title">{event?.name}</h2>
                  <h3 style={{ paddingBottom: `0.25em` }} id="event-venue">
                    {event?.venue}
                  </h3>
                  <p id="event-date">{transformDate(event.date)}</p>
                  <PortableText value={event?.description} />
                </div>
                <img src={urlFor(event.image).auto("format").url()} />
              </li>
            </a>
          ))}
        </ul>
      )}
      {!events.length > 0 && <p>No events to show</p>}
      {!events.length > 0 && (
        <div>
          <div>¯\_(ツ)_/¯</div>
          <p>
            Your data will show up here when you've configured everything
            correctly
          </p>
        </div>
      )}
    </div>
  );
}

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const transformDate = (datetime) => {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let date = new Date(datetime);
  return date.toLocaleDateString("en-US", options);
};

export async function getStaticProps() {
  const events = await client.fetch(`*[_type == "event"]`);

  return {
    props: {
      events,
    },
  };
}
