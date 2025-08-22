import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { logout } from '@/http/auth/logout'
import { queryClient } from '@/lib/query-client'
import { Button } from './ui/button'

export function LogoutButton() {
  const navigate = useNavigate()

  const { mutateAsync: handleLogout } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
      queryClient.clear()
      navigate('/')
    },
    onError: () => {
      toast.error('Ocorreu um erro')
    },
  })

  return (
    <Button
      className="cursor-pointer"
      onClick={() => handleLogout()}
      size="icon"
      title="Logout"
      variant="ghost"
    >
      <LogOut className="size-4" />
    </Button>
  )
}
