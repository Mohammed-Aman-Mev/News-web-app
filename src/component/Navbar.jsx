import { useContext, useState } from "react";
import fetchNews from "../Context/Action";
import NewsContext from "../Context/Reducer/Newscontext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [topic, settopic] = useState("");

  const { NewsDispatch } = useContext(NewsContext);

  const handletopic = async (e) => {
    e.preventDefault();
    const getnews = await fetchNews(topic);

    NewsDispatch({ type: "NEWS", payload: getnews });
  };

  return (
    <nav
      style={{ position: "fixed", zIndex: "10" }}
      className="navbar navbar-expand-lg navbar-light bg-light w-100"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Absolute Fake
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"}>
                <p className="nav-link active">Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/WorldPolitics"}>
                <p className="nav-link active">World Politics</p>
              </Link>
            </li>
            <li className="nav-item">
              {/* <a
                className="nav-link active"
                aria-current="page"
                href="/Entertainment"
              >
                Entertainment
              </a> */}
              <Link to={"/Entertainment"}>
                <p className="nav-link active">Entertainment</p>
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="/Sports">
                Sports
              </a> */}
              <Link to={"/Sports"}>
                <p className="nav-link active">Sports</p>
              </Link>
            </li>
          </ul>

          <form className="d-flex" onSubmit={handletopic}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={topic}
              onChange={(e) => settopic(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
