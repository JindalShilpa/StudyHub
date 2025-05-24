import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "@/components/Navbar.jsx";

function MainLayout() {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet /> {/*to render children*/}
      </div>
    </div>
  );
}

export default MainLayout;
