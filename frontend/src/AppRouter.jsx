import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Inventory from "./pages/Inventory";
import AddCards from "./pages/AddCards";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/addCards" element={<AddCards />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
