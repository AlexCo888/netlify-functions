import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import BasicApi from "./routes/BasicApi";
import HelloWorld from "./routes/HelloWorld";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<App />} />
        <Route path="hello-world" element={<HelloWorld />} />
        <Route path="basic-api" element={<BasicApi />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
