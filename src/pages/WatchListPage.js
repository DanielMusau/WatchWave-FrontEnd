import React, { useEffect, useState } from "react";
import { getWatchlist } from "../services/api";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import "./styles/WatchListPage.css";

const WatchListPage = () => {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const fetchWatchlist = async () => {
    try {
      const response = await getWatchlist();
      setWatchList(response.data);
    } catch (error) {
      console.error('Error fetching watchlist:', error);
    }
  };

  return (
    <div>
      <NavBar />
      <h1>Watch List</h1>
      <div className="watch-list">
        {watchList.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            showDeleteButton={true}
            onRemoveSuccess={fetchWatchlist}
          />
        ))}
      </div>
    </div>
  );
};

export default WatchListPage;
