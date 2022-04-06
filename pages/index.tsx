import React from "react"

import Navbar from "../components/home/Navbar";
import CLI from "../components/common/cli";

const Home = () => (
  <>
    <div id="body" className="center-container">

      <CLI />
      <Navbar />

    </div>
  </>
);

export default Home;
