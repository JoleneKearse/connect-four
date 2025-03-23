import MiniButton from "../components/MiniButton";
import logo from "/images/logo.svg";

const GameControls = () => {
  return (
    <div className="flex-center game-nav">
      <MiniButton>Menu</MiniButton>
      <img src={logo} alt="" />
      <MiniButton>Restart</MiniButton>
    </div>
  );
};

export default GameControls;
