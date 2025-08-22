import { useQuery } from '@tanstack/react-query'
import {
  ArrowLeft,
  Calendar,
  Edit,
  Mail,
  Shield,
  Trash2,
  User,
} from 'lucide-react'
import { Link, Navigate } from 'react-router-dom'
import { DeleteUserDialog } from '@/components/delete-user-dialog'
import { Loading } from '@/components/loading'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
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
import { formatDate } from '@/utils/date'
import { getInitials } from '@/utils/get-initials'
import { LogoutButton } from './logout-button'

type UserDetailsProps = {
  userId: string
}

export default function UserDetails({ userId }: UserDetailsProps) {
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
          <div className="flex items-center justify-between">
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
                  Detalhes do Usuário
                </h1>
                <p className="text-muted-foreground text-sm">
                  Visualize e gerencie informações do usuário
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline">
                <Link to={`/users/${userId}/edit`}>
                  <Edit className="size-4" />
                  Editar
                </Link>
              </Button>
              <DeleteUserDialog user={data.user}>
                <Button className="cursor-pointer" variant="destructive">
                  <Trash2 />
                  Excluir
                </Button>
              </DeleteUserDialog>
              <LogoutButton />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader className="text-center">
              <div className="mb-4 flex justify-center">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="text-2xl">
                    {getInitials(data.user.name)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-xl">{data.user.name}</CardTitle>
              <CardDescription>{data.user.email}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <span className="font-medium text-sm">Tipo:</span>
                <Badge variant="secondary">{data.user.type}</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Informações do Usuário</CardTitle>
              <CardDescription>
                Detalhes completos do perfil do usuário
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-medium text-muted-foreground text-sm">
                    <User className="h-4 w-4" />
                    Nome Completo
                  </div>
                  <p className="text-base">{data.user.name}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-medium text-muted-foreground text-sm">
                    <Mail className="h-4 w-4" />
                    Email
                  </div>
                  <p className="text-base">{data.user.email}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-medium text-muted-foreground text-sm">
                    <Shield className="h-4 w-4" />
                    Função
                  </div>
                  <p className="text-base">{data.user.type}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-medium text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    Data de Cadastro
                  </div>
                  <p className="text-base">{formatDate(data.user.createdAt)}</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-medium text-muted-foreground text-sm">
                  ID do Usuário
                </h3>
                <p className="rounded bg-muted px-2 py-1 font-mono text-sm">
                  {data.user.id}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
