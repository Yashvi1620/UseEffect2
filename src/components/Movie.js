import React, { useState, useEffect } from "react";

const Movie = () => {
  const [movie, setmovie] = useState([]);
  const [title, settitle] = useState("Comedy");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const URL = `https://www.omdbapi.com/?s=${title}&apikey=8f580c86`;
      const response = await fetch(URL);
      const final_Data = await response.json();
      console.log(final_Data.Search);
      setmovie(final_Data.Search);
    };
    fetchMovies();
    // eslint-disable-next-line
  }, [isClicked]);
  return (
    <>
      <div>
        <div className="main">
          <h2>FindMovie</h2>
        </div>
        <div className="content">
          <input
            type="text"
            name="search"
            placeholder="Movies"
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setIsClicked((prevState) => !prevState);
            }}
            className="search"
          >
            Search
          </button>
        </div>
        <div className="content-container">
          <p>Best Movies</p>
        </div>
        <div className="show">
          {movie.map((item, i) => {
            return (
              <div key={i} className="show-cards">
                <img src={item.Poster} className="picture" alt="poster" />
                <h4>{item.Title}</h4>
                <p>Year- {item.Year}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Movie;
