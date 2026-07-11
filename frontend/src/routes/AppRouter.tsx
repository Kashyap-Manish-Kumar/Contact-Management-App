import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Contacts from "../pages/Contacts";
import Charts from "../pages/Charts";
import Maps from "../pages/Maps";
import AddContact from "../pages/AddContact";
import EditContact from "../pages/EditContact";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}

        <Route element={<ProtectedRoute />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/contacts" element={<Contacts />} />

          <Route path="/contacts/add" element={<AddContact />} />

          <Route path="/contacts/edit/:id" element={<EditContact />} />

          <Route path="/charts" element={<Charts />} />

          <Route path="/maps" element={<Maps />} />

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;