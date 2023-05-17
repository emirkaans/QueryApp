import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./routes/routes";
// COMPONENTS
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
