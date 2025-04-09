import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HomePage from "../views/HomePage";

import SearchResults from "../views/SearchResults";
import MovieDetails from "../views/MovieDetails";
import Movies from "../views/Movies";

function AnimatedRoutes() {
    const navigate = useNavigate();


    const location = useLocation();
    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/search" element={<SearchResults/>} />
          <Route path="/movie/:id" element={<MovieDetails/>} />
          <Route path="/movies" element={<Movies/>} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </AnimatePresence>
    );
  }
  
  export default AnimatedRoutes;