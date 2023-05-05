import { client } from "../util/client";
import Link from "next/link";

export default function Writing({ sanityArticles }) {
  callNewArticles();
  console.log("sanity articles in writing page :", sanityArticles);
  return (
    <>
      <h1>articles</h1>
      {sanityArticles ? (
        sanityArticles.map((article) => {
          return (
            <>
              <div
                style={{
                  display: `flex`,
                  flexDirection: `column`,
                  margin: `1em`,
                  padding: `1em`,
                  border: `1px solid blue`,
                  backgroundColor: `limegreen`,
                }}
              >
                <Link href={article.url}>
                  <h2>{article.title}</h2>
                  <img
                    style={{ maxWidth: `100%` }}
                    src={article.image}
                    alt=""
                  />
                  <p>{article.tagline}</p>
                  <p>{article.publicationDate}</p>
                </Link>
              </div>
            </>
          );
        })
      ) : (
        <h2>no articles to show</h2>
      )}
    </>
  );
}

const callNewArticles = () => {
  const NYLON_API_URL = "https://rss.app/feeds/v1.1/BXUeAyezFac0HGpi.json";

  fetch(NYLON_API_URL)
    .then((res) => res.json())
    .then((data) => data.items.map(transformNylonData))
    .then((articles) => {
      console.log("articles in fetch:", articles);
      let transaction = client.transaction();
      articles.forEach((article) => {
        transaction.createOrReplace(article);
        console.log("transaction completed :", article);
      });
      return transaction.commit();
    });

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
};

export async function getStaticProps() {
  const sanityArticles = await client.fetch(`*[_type == "writingNylon"]`);

  return {
    props: {
      sanityArticles,
    },
  };
}
