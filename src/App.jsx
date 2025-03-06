import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Blog, Product, Projects, Goals, Testimonials, Question, Info, Footer } from "./component/Index";  
import ProductDetails from "./component/Product/ProductDetails";
import Navbar from './component/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Blog />
            <Goals />
            <Product />
            <Projects />
            <Testimonials />
            <Question />
            <Info />
          </>
        } />

        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
