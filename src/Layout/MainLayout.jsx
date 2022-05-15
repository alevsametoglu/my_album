import React from "react";

import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};
