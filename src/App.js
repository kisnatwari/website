import React from "react";
import { Route, Routes } from "react-router";
import RootLayOut from "./components/RootLayOut";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewPage from "./pages/NewPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayOut />}>
          <Route index element={<NewPage />} />
          <Route path="original" element={<HomePage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={1000} position="top-right" />
    </>
  );
};

export default App;
