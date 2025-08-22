import { useQuery } from '@tanstack/react-query'
import { ArrowLeft } from 'lucide-react'
import { Link, Navigate } from 'react-router-dom'
import { UserForm } from '@/components/forms/user'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getUserById } from '@/http/users/get-user-by-id'
import { Loading } from './loading'

type EditUserProps = {
  userId: string
}

export function EditUser({ userId }: EditUserProps) {
  const { data, isLoading } = useQuery({
    queryFn: () => getUserById({ userId }),
    queryKey: ['get-user', userId],
  })

  if (isLoading) {
    return <Loading />
  }

  if (!data) {
    return <Navigate replace to="not-found" />
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
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
                Editar Usuário
              </h1>
              <p className="text-muted-foreground text-sm">
                Altere informaçoes de um usuário do sistema
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Usuário</CardTitle>
              <CardDescription>
                Atualize as informações do usuário
              </CardDescription>
            </CardHeader>
            <CardContent>
              <UserForm initialValues={data.user} userId={userId} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
