import "./AddRecipe.css";

const AddRecipe = () => {
  return (<div>
      <form className="recipe-form">
    <div className="form-group">
      <label for="inputRecipeImage">Recipe Image URL:</label>
      <input type="text" id="inputRecipeImage" name="inputRecipeImage" />
    </div>

    <div className="form-group">
      <label for="inputRecipeName">Recipe Name:</label>
      <input type="text" id="inputRecipeName" name="inputRecipeName" />
    </div>

    <div className="form-group">
      <label for="inputRecipeDescription">Recipe Description:</label>
      <textarea id="inputRecipeDescription" name="inputRecipeDescription" rows="4" ></textarea>
    </div>

    <div className="form-group">
      <label for="inputRecipeType">Recipe Type:</label>
      <select id="inputRecipeType" name="inputRecipeType" required>
        <option value="appetizer">Appetizer</option>
        <option value="main_course">Main Course</option>
        <option value="dessert">Dessert</option>
        <!-- Add more options as needed -->
      </select>
    </div>

    <button type="submit" className="submit-button">Submit</button>
  </form>
  </div>);
};

export default AddRecipe;
