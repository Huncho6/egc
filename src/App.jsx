import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Staking from "./components/Staking";
import NewToken from "./components/NewToken";
import Wallets from "./pages/Wallets";

function App() {
  const { pathname } = useLocation();

  return (
    <div>
      {/* Always render NavBar */}
      <NavBar />

      {/* Render Hero only on the root path */}
      {pathname === "/" && <Hero />}

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={null} />
        <Route path="/wallets" element={<Wallets />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/newtoken" element={<NewToken />} />
      </Routes>

      {/* Always render Footer */}
      <Footer />
    </div>
  );
}

export default App;
