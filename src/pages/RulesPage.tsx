import { Link } from "react-router-dom";
import check from "/images/icon-check.svg";

const RulesPage = () => {
  return (
    <main className="rules-container">
      <h1 className="rules-heading">Rules</h1>
      <h2 className="rules-subheading">Objective</h2>
      <p className="rules-text" style={{ textTransform: "none" }}>
        Be the first player to connect 4 of the same colored discs in a row
        (either vertically, horizontally, or diagonally).
      </p>
      <h2 className="rules-subheading">How To Play</h2>
      <ol className="rules-text rules-list" style={{ textTransform: "none" }}>
        <li>Red goes first in the first game.</li>
        <li>
          Players must alternate turns, and only one disc can be dropped in each
          turn.
        </li>
        <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
        <li>The starter of the previous game goes second on the next game.</li>
      </ol>
      <Link to="/">
        <img src={check} alt="back to home" className="rules-link" />
      </Link>
    </main>
  );
};

export default RulesPage;
