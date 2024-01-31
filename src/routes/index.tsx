import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/register";
import LoginPage from "../pages/login";
import BaseLayout from "../layouts/BaseLayout";
import ManagerLayout from "../layouts/ManagerLayout";
import DashboardPage from "../pages/admin/dashboard";
import { Home } from "../pages/home";
import ProductPage from "../pages/admin/product";
import ProductAddPage from "../pages/admin/product-add";
import ProductEditPage from "../pages/admin/product-edit";
import { ToastContainer } from "react-toastify";
import PrivateRouter from "../components/PrivateRouter";
import React from "react";

const Routers = () => {
  let user = JSON.parse(localStorage.getItem("token"));
  
  return (
    <>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<Home />} />

          <Route path='register' element={<RegisterPage />} />
          <Route path='login' element={<LoginPage />} />
        </Route>
        <Route
          path='admin'
          element={
            <PrivateRouter user={user && user}>
              <ManagerLayout />
            </PrivateRouter>
          }>
          <Route index element={<DashboardPage />} />
          <Route path='products' element={<ProductPage />} />
          <Route path='products/add' element={<ProductAddPage />} />
          <Route path='products/:id/edit' element={<ProductEditPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default Routers;
