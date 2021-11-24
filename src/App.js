import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router";


//import pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

//import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./scss/main.scss";


const App = () => {
  return (
    <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/contact" element={<Contact />}/>
                <Route exact path="/cocktail/:id" element={<SingleCocktail />}/>
                <Route exact path="*" element={<Error />}/>
            </Routes>
            <Footer />
    </BrowserRouter>
  );
}

export default App;