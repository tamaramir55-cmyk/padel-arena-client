import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Competitions from "./pages/Competitions";
import Publishers from "./pages/Publishers";
import PublisherDetail from "./pages/PublisherDetail";
import NotFound from "./pages/NotFound";
import AboutUs from "./components/AboutUs";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
      <AboutUs />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="tournaments" element={<Competitions />} />
            <Route path="publishers" element={<Publishers />} />
            <Route path="publishers/:id" element={<PublisherDetail />} />
          </Route>

          {/* wildcard route renders without MainLayout */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ToastContainer position="top-center" aria-label="site toasts" />
      </div>
    </BrowserRouter>
  );
};

export default App;
