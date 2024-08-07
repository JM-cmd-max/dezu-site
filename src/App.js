import "./App.css";
import "./layout/Layout";
import Layout from "./layout/Layout"
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import UseCase from "./pages/UseCase";

import Product from "./pages/Product";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./components/hero/components/Navbar";
import { useState } from "react";
import { PageProvider } from "./context/PageContext";
import { ColorProvider } from "./context/ColorContext";
import WJ1 from "./components/waterjet/WJ1";
import WJ2 from "./components/waterjet/WJ2";
import WJ3 from "./components/waterjet/WJ3";
import WJ4 from "./components/waterjet/WJ4";
import WJ5 from "./components/waterjet/WJ5";
import WJ6 from "./components/waterjet/WJ6";
import WJ7 from "./components/waterjet/WJ7";
import WJ8 from "./components/waterjet/WJ8";
import WJ9 from "./components/waterjet/WJ9";
import PS1 from "./components/pressure/PS1";
import PS2 from "./components/pressure/PS2";
import UCMenu from "./components/UCMenu";

function App() {
  const [page, setPage] = useState("");
  const [color, setColor] = useState({ color: " #32CBBB", bgColor: "#0C191D" });

  return (
    <ColorProvider value={{ color, setColor }}>
      <PageProvider value={{ page, setPage }}>
        <Router>
          <Layout>
            
            <Routes>
              <Route path="/" element={<Home handlePage={setPage} />} />
              <Route path="/use-cases" element={<UseCase handlePage={setPage} />} />
              <Route path="/product" element={<Product handlePage={setPage} />} />
              <Route path="/contact" element={<ContactPage handlePage={setPage} />} />
              <Route path="/menu" element={<MenuPage handlePage={setPage} />} />
              <Route path="/wj1" element={<WJ1 handlePage={setPage} />} />
              <Route path="/wj2" element={<WJ2 handlePage={setPage} />} />
              <Route path="/wj3" element={<WJ3 handlePage={setPage} />} />
              <Route path="/wj4" element={<WJ4 handlePage={setPage} />} />
              <Route path="/wj5" element={<WJ5 handlePage={setPage} />} />
              <Route path="/wj6" element={<WJ6 handlePage={setPage} />} />
              <Route path="/wj7" element={<WJ7 handlePage={setPage} />} />
              <Route path="/wj8" element={<WJ8 handlePage={setPage} />} />
              <Route path="/wj9" element={<WJ9 handlePage={setPage} />} />
              <Route path="/ps1" element={<PS1 handlePage={setPage} />} />
              <Route path="/ps2" element={<PS2 handlePage={setPage} />} />

              <Route path="/ucmenu" element={<UCMenu handlePage={setPage} />} />
            </Routes>
           

          </Layout>
        </Router>
      </PageProvider>
    </ColorProvider>
  );
}

export default App;
