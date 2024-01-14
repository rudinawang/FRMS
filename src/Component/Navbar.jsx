import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        {/* <a href="/">Home</a>
        <a href="/addRecipe">Add Recipe</a> */}
        <Link to="/"> Home</Link>
        <Link to="/addRecipe">Add Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
