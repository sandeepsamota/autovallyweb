import "./App.css";
import Splash from "./components/Splash/Splash";
import Splash1 from "./components/Splash/Splash1";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Otp from "./components/OTP/Otp";
import Forgot from "./components/Forgot/Forgot";
import Reset from "./components/Forgot/Reset";
import Products from "./components/Products/Products";
import ViewProducts from "./components/Products/ViewProducts";
import ConfirmOrder from "./components/Orders/ConfirmOrder";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/select" element={<Splash1 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/view-products" element={<ViewProducts />} />
        <Route path="/confirm-order" element={<ConfirmOrder />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/reset-password" element={<Reset />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </>
  );
}

export default App;
