import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Admin from '../pages/Admin';
import Films from '../pages/Films';

export default function NavRoutes() {
  return (
    <Routes>
      <Route
        path="/admin"
        element={<ProtectedRoute>{<Admin />}</ProtectedRoute>}
      />
      <Route path="/" element={<Home />} />
      <Route path="/films" element={<Films />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
