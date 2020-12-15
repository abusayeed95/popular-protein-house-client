import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Admin from "./Components/Administration/Admin/Admin";
import AllProducts from "./Components/AllProducts/AllProducts";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home/Home";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import NotFound from "./Components/NotFound/NotFound";

export const AllContext = createContext();

const App = () => {
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    fetch("https://secure-gorge-46592.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <AllContext.Provider value={[products, setProducts]}>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/products">
            <AllProducts />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <ContactUs />
          </Route>
          <Route exact path="/administration">
            <Admin />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AllContext.Provider>
  );
};

export default App;
