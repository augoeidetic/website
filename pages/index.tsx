import React from "react"

import Navbar from "../components/home/Navbar";
import CliInput from "../components/cli/CliInput";
import BlogBox from "../components/common/BlogBox";

const Home = () => (
  <>
    <div id="body" className="center-container">

      <CliInput />
      <Navbar />
      <BlogBox />

    </div>
  </>
);

export default Home;
