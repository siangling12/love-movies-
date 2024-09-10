import Header from "./shared/Header";
import MoviesList from "./home/MoviesList";
import DetailedMoviesList from "./movies/DetailedMoviesList";
import FullMovie from "./movie/FullMovie";
import TheaterList from "./theaters/TheaterList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route

function App() {
  return (
    <Router>
      <Header />
      <Routes> {/* Replace Switch with Routes */}
        <Route exact path="/" element={<MoviesList />} /> 
        <Route exact path="/movies" element={<DetailedMoviesList />} /> 
        <Route exact path="/movies/:movieId" element={<FullMovie />} /> 
        <Route exact path="/theaters" element={<TheaterList />} /> 
      </Routes>
    </Router>
  );
}

export default App;