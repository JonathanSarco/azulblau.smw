import React from "react";
import "./App.scss";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../home/home";

function App() {

  const routes = (
    <Switch>
      <Route path='/' component={Home} />
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
