import { useQuery } from '@tanstack/react-query'
import { Eye, MoreHorizontal, Pen, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { listUsers } from '@/http/users/list-users'
import { formatDate } from '@/utils/date'
import { getInitials } from '@/utils/get-initials'
import { DeleteUserDialog } from './delete-user-dialog'
import { Loading } from './loading'

export function UsersList() {
  const { data, isLoading } = useQuery({
    queryFn: listUsers,
    queryKey: ['list-users'],
  })

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Usuário</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Função</TableHead>
            <TableHead>Data de Cadastro</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                  <span>{user.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {user.email}
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{user.type}</Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {formatDate(user.createdAt)}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <Button asChild size="sm" variant="ghost">
                    <Link to={`/users/${user.id}`}>
                      <Eye className="size-4" />
                    </Link>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link to={`/users/${user.id}/edit`}>
                          <Pen className="size-4" />
                          Editar
                        </Link>
                      </DropdownMenuItem>
                      <DeleteUserDialog user={user}>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <Trash2 className="size-4" />
                          Exluir
                        </DropdownMenuItem>
                      </DeleteUserDialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
