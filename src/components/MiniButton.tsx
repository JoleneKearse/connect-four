type MiniButtonProps = {
  children: React.ReactNode;
};

const MiniButton = ({ children }: MiniButtonProps) => {
  return <button className="mini-button">{children}</button>;
};

export default MiniButton;
