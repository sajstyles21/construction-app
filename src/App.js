import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
