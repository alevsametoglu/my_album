import React from "react";
import { Header } from "../Components";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
