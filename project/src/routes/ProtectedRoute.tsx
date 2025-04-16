// src/routes/ProtectedRoute.tsx
import { useAuthStore } from '@/store/authStore';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuthStore();
  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
