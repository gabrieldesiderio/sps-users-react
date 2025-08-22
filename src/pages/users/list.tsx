import { Plus, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LogoutButton } from '@/components/logout-button'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { UsersList } from '@/components/users-list'

export function UsersListPage() {
  return (
    <div className="w-full">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h1 className="font-bold text-2xl text-foreground">
                  Dashboard de Usuários
                </h1>
                <p className="text-muted-foreground text-sm">
                  Gerencie todos os usuários do sistema
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse items-end gap-2 sm:flex-row">
              <Button asChild className="gap-2">
                <Link to="/users/create">
                  <Plus className="h-4 w-4" />
                  Novo Usuário
                </Link>
              </Button>
              <LogoutButton />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Lista de Usuários</CardTitle>
            <CardDescription>
              Visualize e gerencie todos os usuários cadastrados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UsersList />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
