import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignIn } from "./pages/auth/sign-in"
import { ListUsers } from "./pages/users/list"

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<SignIn />} index />

          <Route path="users">
            <Route index element={<ListUsers />} />
            <Route path=":userId" element={<ListUsers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
