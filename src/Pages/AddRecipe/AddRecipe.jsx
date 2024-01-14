import Navbar from "../../Component/Navbar";
import "./AddRecipe.css";

const AddRecipe = () => {
  return (
    <div>
      <Navbar />
      <div id="recipe-form">
        <h2>Recipe Information</h2>
        <form>
          <label htmlFor="recipeImage">Recipe Image URL:</label>
          <input type="text" id="recipeImage" name="recipeImage" />

          <label htmlFor="recipeName">Recipe Name:</label>
          <input type="text" id="recipeName" name="recipeName" />

          <label htmlFor="recipeDescription">Recipe Description:</label>
          <textarea
            id="recipeDescription"
            name="recipeDescription"
            rows="4"
          ></textarea>

          <label htmlFor="recipeType">Recipe Type:</label>
          <input type="text" id="recipeType" name="recipeType" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
