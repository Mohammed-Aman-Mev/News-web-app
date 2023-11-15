import Noimage from "../assets/Noimage.png";

const Card = ({ news }) => {
  return (
    <div className="card mb-3">
      <img
        style={{ height: "100%" }}
        src={news.urlToImage ? news.urlToImage : Noimage}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{news.title}</h5>
        <p className="card-text">{news.description}</p>
        <p className="card-text ">
          <small className="text-body-secondary">{news.publishedAt}</small>
          <a
            href={news.url}
            target="_blank"
            className="btn btn-success float-end"
          >
            Read More
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
