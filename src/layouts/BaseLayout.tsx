import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import React from "react";

const BaseLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
