import "./App.css";

import React from "react";

import ReactDOM from "react-dom/client";

import Menu from "./Menu";

import ContenuPrincipal from "./ContenuPrincipal";

import Footer from "./footer";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render();

function App() {
  return (
    <div>
      <Menu />

      <ContenuPrincipal />

      <Footer />
    </div>
  );
}
export default App;
