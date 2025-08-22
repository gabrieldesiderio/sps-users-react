import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { UserForm } from '@/components/forms/user'
import { LogoutButton } from '@/components/logout-button'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function CreateUserPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto flex flex-col-reverse px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Button asChild size="sm" variant="ghost">
              <Link to="/users">
                <ArrowLeft className="size-4" />
                Voltar
              </Link>
            </Button>
            <Separator className="h-6" orientation="vertical" />
            <div>
              <h1 className="font-bold text-2xl text-foreground">
                Novo Usuário
              </h1>

              <p className="text-muted-foreground text-sm">
                Adicione um novo usuário ao sistema
              </p>
            </div>
          </div>
          <LogoutButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Usuário</CardTitle>
              <CardDescription>
                Preencha os dados para criar um novo usuário
              </CardDescription>
            </CardHeader>
            <CardContent>
              <UserForm />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
