import React, { Fragment } from "react";
import './app.css'
import Navigation from "./components/navigation";
import Topbar from "./components/topbar";
function App() {
  
  return (
    <Fragment>
      <div className="container">
      <Navigation/>
      <div className="main"><Topbar /></div>
      </div>
    </Fragment>
  );
}

export default App;
