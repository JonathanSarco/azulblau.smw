import React from "react";
import "./App.scss";
import { BrowserRouter, Switch } from "react-router-dom";
import Layout from "../layout/layout";

function App() {

  const routes = (
    <>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    {/* <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p>
    <p>Something to write about...</p> */}
    </>
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
