
// src/routes/AdminRoute.tsx
import { useAuthStore } from '@/store/authStore';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuthStore();
  return user && user.role === 'admin' ? children : <Navigate to="/login" replace />;
};

export default AdminRoute;
