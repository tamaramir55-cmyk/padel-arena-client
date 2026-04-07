import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Subscribe from "./pages/Subscribe";
import UsersList from "./components/UsersList";
import NotFound from "./pages/NotFound";
import Competitions from "./pages/Competitions";
import Organizers from "./pages/Organizers";
import OrganizerDetail from "./pages/OrganizerDetail";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TournamentDetail from "./pages/TournamentDetail";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/competitions/:id" element={<TournamentDetail />} />
            <Route path="/organizers" element={<Organizers />} />
            <Route path="/organizers/:id" element={<OrganizerDetail />} />
            <Route path="/members" element={<UsersList />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="footer">
          © {new Date().getFullYear()} 10 Padel Arena — Play. Compete. Improve.
        </footer>
      </div>
    </BrowserRouter>
  );
}
