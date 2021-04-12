import React from "react";
import "./App.scss";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../home/home";
import MuralImage from "../mural-image/mural-image";

function App() {

  const routes = (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/mural/:id' component={MuralImage} />
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
