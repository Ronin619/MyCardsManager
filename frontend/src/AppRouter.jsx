import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Inventory from "./pages/Inventory";
import About from "./pages/About";
import GetStarted from "./pages/GetStarted";
import TotalValue from "./pages/TotalValue";
import ProtectedRoutes from "./components/ProtectedRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/totalValue" element={<TotalValue />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
