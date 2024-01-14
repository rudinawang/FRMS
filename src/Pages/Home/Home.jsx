import Navbar from "../../Component/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="recipe-card">
        <img
          className="recipe-image"
          src="your_recipe_image_url.jpg"
          alt="Recipe Image"
        />
        <div className="recipe-details">
          <h2 className="recipe-name">Delicious Recipe</h2>
          <a href="#" className="recipe-details-button">
            Recipe Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
