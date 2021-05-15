import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const DEFAULT_IMG =
  "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60";
const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    <img src={poster_path ? IMG_API + poster_path : DEFAULT_IMG} alt="title" />
    <div className="movie-info">
      <h3>{title}</h3>
      <span>{vote_average}</span>
    </div>
    <div className="movie-over">
      <h2>overview:</h2>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movie;
