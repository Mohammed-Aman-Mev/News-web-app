import fetchcripto from "./ActionCripto";

const getdate = () => {
  let a = new Date();

  let d = a.getDate();
  let m = a.getMonth() + 1;
  let y = a.getFullYear();
  let full = y + "-" + d + "-" + m;

  return full;
};

const fetchNews = async (topic) => {
  const f = getdate();

  const news = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&from=${f}&sortBy=publishedAt&apiKey=d28982a314d846abb6e4c12baaf19002`
  );
  const data = await news.json();

  // const crypto = fetchcripto();
  // console.log(data);
  return data.articles;
};

export default fetchNews;
