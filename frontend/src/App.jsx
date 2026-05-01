import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Houses from "./pages/Houses";
import HouseDetails from "./pages/HouseDetails";
import AdminDashboard from "./pages/AdminDashboard";
import AddHouse from "./pages/AddHouse";
import EditHouse from "./pages/EditHouse";
import AboutDeveloper from "./pages/AboutDeveloper";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/houses/:id" element={<HouseDetails />} />
        <Route path="/about-developer" element={<AboutDeveloper />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-house"
          element={
            <ProtectedRoute adminOnly={true}>
              <AddHouse />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/edit-house/:id"
          element={
            <ProtectedRoute adminOnly={true}>
              <EditHouse />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;