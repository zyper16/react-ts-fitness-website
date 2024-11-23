import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
