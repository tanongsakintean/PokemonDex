import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Layout />}>
          <Route path="/Home" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/Home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
