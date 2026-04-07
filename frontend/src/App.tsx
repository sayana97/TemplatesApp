import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TemplatesPage from "./pages/TemplatesPage";
import TemplateDetail from "./pages/TemplateDetail";
import CategoryPage from "./pages/CategoryPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemplatesPage />} />
        <Route path="/templates/:id" element={<TemplateDetail />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}