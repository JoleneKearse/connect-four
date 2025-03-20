type ButtonProps = {
  children: React.ReactNode;
  color: string;
  isFlex?: boolean;
};

const Button = ({ children, color, isFlex }: ButtonProps) => {
  return (
    <button className={`${color} ${isFlex ? "flex-between" : ""}`}>
      {children}
    </button>
  );
};

export default Button;
