import { Link } from "react-router-dom";
import logo from "/images/logo.svg";
import pVsP from "/images/player-vs-player.svg";
import pVsC from "/images/player-vs-cpu.svg";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <main className="home-menu-container">
      <img src={logo} alt="logo" className="home-logo" />
      <div className="home-buttons">
        <Link to="/play">
          <Button color="yellow" isFlex={true}>
            Play vs Player <img src={pVsP} alt="play against a player" />
          </Button>
        </Link>
        <Link to="/play">
          <Button color="pink" isFlex={true}>
            Play vs CPU <img src={pVsC} alt="play against the computer" />
          </Button>
        </Link>
        <Link to="/rules">
          <Button color="white">Game rules</Button>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
