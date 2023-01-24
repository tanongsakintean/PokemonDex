import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

type Props = {};

function Home({}: Props) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
