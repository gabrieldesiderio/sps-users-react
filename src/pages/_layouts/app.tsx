import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <main className="antialised min-h-screen bg-background">
      <Outlet />
    </main>
  )
}
