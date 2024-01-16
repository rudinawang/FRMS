import { useState } from "react";
import Navbar from "../../Component/Navbar";
import "./AddRecipe.css";
import axios from "axios";

const AddRecipe = () => {
  const [data, setData] = useState({
    recipeImage: "",
    recipeName: "",
    recipeDescription: "",
    recipeType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const addRecipe = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://65a56cc452f07a8b4a3f15a9.mockapi.io/recipes",
      data
    );
    console.log(response);
  };
  return (
    <div>
      <Navbar />
      <div id="recipe-form">
        <h2>Recipe Information</h2>
        <form onSubmit={addRecipe}>
          <label htmlFor="recipeImage">Recipe Image URL:</label>
          <input
            type="text"
            id="recipeImage"
            name="recipeImage"
            onChange={handleChange}
          />

          <label htmlFor="recipeName">Recipe Name:</label>
          <input
            type="text"
            id="recipeName"
            name="recipeName"
            onChange={handleChange}
          />

          <label htmlFor="recipeDescription">Recipe Description:</label>
          <textarea
            id="recipeDescription"
            name="recipeDescription"
            rows="4"
            onChange={handleChange}
          ></textarea>

          <label htmlFor="recipeType">Recipe Type:</label>
          <input
            type="text"
            id="recipeType"
            name="recipeType"
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
