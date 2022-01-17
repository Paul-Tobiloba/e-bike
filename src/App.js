import * as React from "react";
import { Routes, Route } from "react-router-dom";
import classes from "./App.module.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className={classes.App}>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;