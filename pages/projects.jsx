import { client } from "../util/client";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import BuiltImage from "components/builtImage";

export default function Projects({ projects }) {
  return (
    <>
      <header>
        <h1>Melissa Rich NYC</h1>
      </header>
      <main>
        <div className="projects-container">
          <h2>projects</h2>
          {projects.length > 0 && (
            <ul>
              {projects.map((project) => (
                <li key={project._id}>
                  <h2>{project?.title}</h2>
                  <p>{project?.description}</p>
                  <img src={urlFor(project.mainImage).url()} />
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
