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
          <p className="recipe-description">
            Biryani is a celebration of all that is great about Indian food –
            the heady aromas, the vibrant colours, the fluffy rice and those
            addictive curry flavours. Make this Chicken Biryani with your
            protein of choice – or try a vegetable biryani!
          </p>
          <h3 className="recipe-type">Country Name</h3>
          <a href="#" className="recipe-details-button">
            Recipe Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
