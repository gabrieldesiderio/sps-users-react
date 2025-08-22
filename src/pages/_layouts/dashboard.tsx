import { Outlet } from 'react-router-dom'

export function DashboardLayout() {
  return (
    <main className="antialised min-h-screen bg-background">
      <Outlet />
    </main>
  )
}
