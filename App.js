import React, { useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";

// Static data for demo
const movieData = [
  {
    title: "Breaking Bad",
    type: "series",
    year: "2008–2013",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png",
  },
  {
    title: "The Good, the Bad and the Ugly",
    type: "movie",
    year: "1966",
    poster: "https://m.media-amazon.com/images/I/91h3W-k8VCL._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: "Bad Boys",
    type: "movie",
    year: "1995",
    poster: "https://m.media-amazon.com/images/I/71l+YB7aH-L._AC_SY679_.jpg",
  },
  {
    title: "Bad Boys II",
    type: "movie",
    year: "2003",
    poster: "https://m.media-amazon.com/images/I/71EdAHT1voL._AC_SY679_.jpg",
  },
];

function App() {
  const [query, setQuery] = useState("");
  const filteredMovies = movieData.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="title">MOVIE LIST</h1>
      <FilterButtons />
      <SearchBar query={query} setQuery={setQuery} />
      <div className="movie-grid">
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
