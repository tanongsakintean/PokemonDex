import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

type Props = {};

function Layout({}: Props) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
