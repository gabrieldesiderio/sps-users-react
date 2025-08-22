import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { queryClient } from '@/lib/query-client'
import { ProtectedRoute } from '../components/protected-route'
import { AppLayout } from './_layouts/app'
import { DashboardLayout } from './_layouts/dashboard'
import { SignIn } from './auth/sign-in'
import { NotFoundPage } from './not-found'
import { CreateUserPage } from './users/create'
import UserDetailsPage from './users/details'
import { EditUserPage } from './users/edit'
import { UsersListPage } from './users/list'

export function AppRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute redirectIfAuthenticated="/users">
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route element={<SignIn />} index />
          </Route>

          <Route
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
            path="users"
          >
            <Route element={<UsersListPage />} index />
            <Route element={<CreateUserPage />} path="create" />
            <Route element={<EditUserPage />} path=":userId/edit" />
            <Route element={<UserDetailsPage />} path=":userId" />
          </Route>

          <Route element={<NotFoundPage />} path="*" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
