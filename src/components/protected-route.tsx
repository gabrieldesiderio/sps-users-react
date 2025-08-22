import { Loader2 } from 'lucide-react';
import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';

type ProtectedRouteProps = {
  children: ReactNode;
  redirectIfAuthenticated?: string;
};

export function ProtectedRoute({
  children,
  redirectIfAuthenticated,
}: ProtectedRouteProps) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Loader2 className="size-7 animate-spin" />
      </div>
    );
  }

  if (redirectIfAuthenticated && isAuthenticated) {
    return <Navigate replace to={redirectIfAuthenticated} />;
  }

  if (!(redirectIfAuthenticated || isAuthenticated)) {
    return <Navigate replace to="/" />;
  }

  return children;
}
