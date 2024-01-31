import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import React from "react";

const ManagerLayout = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <aside>
        <Sidebar />
      </aside>
      <main style={{ padding: "50px", width: "90%" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default ManagerLayout;
