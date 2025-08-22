import { useMutation } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { deleteUser } from '@/http/users/delete-user'
import { queryClient } from '@/lib/query-client'
import type { User } from '@/types/user'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog'

type DeleteUserDialogProps = {
  user: User
  children: ReactNode
}

export function DeleteUserDialog({ user, children }: DeleteUserDialogProps) {
  const navigate = useNavigate()

  const { mutateAsync: handleDeleteUser } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list-users'] })
      navigate('/users')
    },
  })

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
          <AlertDialogDescription>
            Tem certeza que deseja excluir o usuário{' '}
            <strong>{user.name}</strong>? Esta ação não pode ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            className="cursor-pointer bg-destructive hover:bg-destructive/70"
            onClick={() => handleDeleteUser({ userId: user.id })}
          >
            Excluir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
