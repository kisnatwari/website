import React from "react";
import { Outlet } from "react-router";

import Footer from "./Footer";

const RootLayOut = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayOut;
