import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import "./style.css";
import SearchIcon from "./search.svg";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}&p=3`);
    const data = await response.json();

    console.log(data.Search);
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  useEffect(() => {
    searchMovies("music");
  }, []);
  return (
    <div className="app">
      <h1>MovieWorld</h1>
      <div className="search">
        <input
          placeholder="Search movies..!"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>검색결과가 없습니다.</h2>
        </div>
      )}
    </div>
  );
}
