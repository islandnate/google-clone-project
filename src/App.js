import './App.css';
import React from "react"
import Home from './pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SearchPage from "./pages/SearchPage.jsx"

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
    </Routes>
      </div>
    </Router>
  );
}

export default App;
