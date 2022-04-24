import React from "react"
import ReactDOM from "react-dom"
import Footer from "../src/components/Footer"
import Header from "../src/components/Header"
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Home from "./components/Views/Home"
import About from "./components/Views/About"
import Product from "./components/Views/product"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header/>

    <div className="p-3">
        <Routes>
          <Route exact path="/"element={<Home />}>
          </Route>
          
          <Route path="/about" element={<About />}>
          </Route>

          <Route path="/product/:id" element={<Product />}>
          </Route>
        </Routes>
    </div>
        
        <Footer/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
