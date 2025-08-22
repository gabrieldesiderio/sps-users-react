import { Navigate, useParams } from 'react-router-dom'
import { EditUser } from '@/components/edit-user'

type Params = {
  userId: string
}

export function EditUserPage() {
  const { userId } = useParams<Params>()

  if (!userId) {
    return <Navigate replace to="not-found" />
  }

  return <EditUser userId={userId} />
}
