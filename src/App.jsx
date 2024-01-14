import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddRecipe from "./Pages/AddRecipe/AddRecipe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
