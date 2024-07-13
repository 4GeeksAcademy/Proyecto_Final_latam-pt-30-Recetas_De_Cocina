//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


//include your index.scss file into the bundle
import "../styles/index.css";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Categories } from "./component/categories";
import { Header } from "./component/header";

//import your own components
import Layout from "./layout";
import { Home } from "./pages/home";

//render your react application
ReactDOM.render(<Layout/>, document.querySelector("#app"));
