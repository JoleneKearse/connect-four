import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import RulesPage from "./pages/RulesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/play" element={<GamePage />} />
      <Route path="/rules" element={<RulesPage />} />
    </Routes>
  );
}

export default App;
