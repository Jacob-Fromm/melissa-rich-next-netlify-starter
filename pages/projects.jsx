import { client } from "../util/client";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";

import BuiltImage from "components/builtImage";

export default function Projects({ projects }) {
  return (
    <>
      <header>
        <h1>PROJECTS</h1>
      </header>
      <main>
        <div className="container">
          {projects.length > 0 && (
            <ul>
              {projects.map((project) => (
                <li className="project-card" key={project._id}>
                  <img src={urlFor(project.mainImage).auto("format").url()} />
                  <div className="project-title-and-description">
                    <h2>{project?.title}</h2>
                    <p>{project?.description}</p>
                  </div>
                  {/* <BuiltImage imageData={project.mainImage} /> */}
                </li>
              ))}
            </ul>
          )}
          {!projects.length > 0 && <p>No projects to show</p>}
          {projects.length > 0 && (
            <div>
              <pre>{JSON.stringify(projects, null, 2)}</pre>
            </div>
          )}
          {!projects.length > 0 && (
            <div>
              <div>¯\_(ツ)_/¯</div>
              <p>
                Your data will show up here when you've configured everything
                correctly
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export async function getStaticProps() {
  const projects = await client.fetch(`*[_type == "project"]`);

  return {
    props: {
      projects,
    },
  };
}
