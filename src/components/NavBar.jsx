import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/about-us">About us</Link>
    </div>
  );
};

export default NavBar;
