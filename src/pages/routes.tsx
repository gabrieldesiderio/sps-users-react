import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { queryClient } from '@/lib/query-client'
import { ProtectedRoute } from '../components/protected-route'
import { SignIn } from './auth/sign-in'
import { NotFoundPage } from './not-found'
import { CreateUserPage } from './users/create'
import UserDetailsPage from './users/details'
import { EditUserPage } from './users/edit'
import { UsersListPage } from './users/list'

export function AppRoutes() {
  return (
    <main className="antialised min-h-screen bg-background">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute redirectIfAuthenticated="/users">
                  <SignIn />
                </ProtectedRoute>
              }
              index
            />

            <Route path="users">
              <Route
                element={
                  <ProtectedRoute>
                    <UsersListPage />
                  </ProtectedRoute>
                }
                index
              />
              <Route
                element={
                  <ProtectedRoute>
                    <CreateUserPage />
                  </ProtectedRoute>
                }
                path="create"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <EditUserPage />
                  </ProtectedRoute>
                }
                path=":userId/edit"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <UserDetailsPage />
                  </ProtectedRoute>
                }
                path=":userId"
              />
            </Route>

            <Route element={<NotFoundPage />} path="*" />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </main>
  )
}
