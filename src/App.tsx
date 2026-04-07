import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Competitions from "./pages/Competitions";
import Publishers from "./pages/Publishers";
import PublisherDetail from "./pages/PublisherDetail";
import NotFound from "./pages/NotFound";
import AboutUs from "./components/AboutUs";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tournaments" element={<Competitions />} />
            <Route path="/publishers" element={<Publishers />} />
            <Route path="/publishers/:id" element={<PublisherDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <AboutUs />
      </div>
    </BrowserRouter>
  );
}
