import axios from "axios";
import Navbar from "../../Component/Navbar";
import "./Home.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const fecthRecipe = async () => {
    const response = await axios.get(
      "https://65a56cc452f07a8b4a3f15a9.mockapi.io/recipes"
    );
    console.log(response);
    setRecipes(response.data);
  };

  useEffect(() => {
    fecthRecipe();
  }, []);
  return (
    <div>
      <Navbar />
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id} className="recipe-card">
            <img
              className="recipe-image"
              src={recipe.recipeImage}
              alt="Recipe Image"
            />
            <div className="recipe-details">
              <h2 className="recipe-name">{recipe.recipeName}</h2>
              <p className="recipe-description">{recipe.recipeDescription}</p>
              <h3 className="recipe-type">{recipe.recipeType}</h3>
              <a href="#" className="recipe-details-button">
                Recipe Details
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
