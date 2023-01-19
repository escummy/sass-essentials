import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Ranking } from "./pages/Ranking.jsx";
import { Watchlist } from "./components/Watchlist/Watchlist";
import { Favorites } from "./components/Favorites/Favorites";
import { AddMovie } from "./components/AddMovie/AddMovie";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

function App() {
  // console.count("Rerender: ");
  // console.log(process.env);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/path" element={<Component />}></Route> */}

        <Route exact path="/ranking" element={<Ranking />} />

        <Route exact path="/watchlist" element={<Watchlist />} />

        <Route exact path="/favorites" element={<Favorites />} />

        <Route exact path="/add" element={<AddMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
