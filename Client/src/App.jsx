import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import About from "./pages/About";
import PrivateRoute from "./pages/auth/PrivateRoute";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import SummaryPage from "./pages/SummaryPage";
import Page1 from "./pages/Page1";
import SleepSummary from "./pages/SleepSummary.jsx";
import { Toaster } from "sonner";
function App() {
  return (
    <>
      <Toaster position="top-right" duration={1000} dismissOnClick={true} />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/sleep" element={<SleepSummary />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
