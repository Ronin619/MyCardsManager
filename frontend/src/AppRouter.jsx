import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Inventory from "./pages/Inventory";
import AddCards from "./pages/AddCards";
import ProtectedRoutes from "./components/ProtectedRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/addCards" element={<AddCards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
