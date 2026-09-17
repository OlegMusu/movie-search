import "./App.css";

import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import Cast from "./pages/Cast/Cast";
import Reviews from "./pages/Reviews/Reviews";
import Header from "./Components/Header/Header";

import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movie" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
