import { client } from "../util/client";
import Link from "next/link";

export default function Writing({ sanityArticles }) {
  callNewArticles();
  console.log("sanity articles in writing page :", sanityArticles);
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        justifyItems: `center`,
      }}
    >
      <h1>articles</h1>
      <div className="writing-container">
        {sanityArticles ? (
          sanityArticles.map((article) => {
            return (
              <>
                <div
                  className="writing-item"
                  style={{
                    display: `flex`,
                    flexDirection: `column`,
                    marginLeft: `1em`,
                    marginRight: `1em`,
                    padding: `1em`,
                    border: `1px solid blue`,
                    backgroundColor: `limegreen`,
                    width: `40vw`,
                    justifyContent: `flex-start`,
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
                    <p>{transformDate(article.publicationDate)}</p>
                  </Link>
                </div>
              </>
            );
          })
        ) : (
          <h2>no articles to show</h2>
        )}
      </div>
    </div>
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
  const sanityArticles = await client.fetch(`*[_type == "writingNylon"]`);

  return {
    props: {
      sanityArticles,
    },
  };
}
