import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Archived from "./pages/Archived";
import ListDetail from "./pages/ListDetail";
import ShoppingLists from "./pages/ShoppingLists";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/ShoppingLists" element={<ShoppingLists />} />
          <Route path="/Archived" element={<Archived />} />
          <Route path="/ListDetail/:id" element={<ListDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;