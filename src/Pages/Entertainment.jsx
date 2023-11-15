import { useContext, useEffect } from "react";

import Card from "../component/Card";

import NewsContext from "../Context/Reducer/Newscontext";
import fetchNews from "../Context/Action";

const Entertainment = () => {
  const { allnews, NewsDispatch } = useContext(NewsContext);

  const getNews = async (topic) => {
    const data = await fetchNews(topic);
    NewsDispatch({ type: "NEWS", payload: data });
  };

  useEffect(() => {
    getNews("Entertainment");
  }, []);

  if (allnews.length === 0) {
    return <h1 className="text-center mt-5">Loading...</h1>;
  }

  return (
    <div className="container p-5 d-flex">
      <div className="container p-3 ">
        <h1 className="text-center">Entertainment</h1>

        {allnews.map((news, index) => (
          <Card key={index} news={news} />
        ))}
      </div>
    </div>
  );
};

export default Entertainment;
