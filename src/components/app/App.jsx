import React from "react";
import "./App.scss";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../home/home";
import MuralImage from "../mural-image/mural-image";
import About from "../about/about";
import Blog from "../blog/blog";

function App() {

  const routes = (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/mural/:id' component={MuralImage} />
      <Route path='/about' component={About} />
      <Route path='/blog' component={Blog} />
      <Redirect to='/' />
    </Switch>
  )

  return (
    <BrowserRouter>
      <Layout>
        { routes }
      </Layout>
    </BrowserRouter>
  );
}

export default App;
