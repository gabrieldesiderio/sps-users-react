import { Navigate, useParams } from 'react-router-dom'

type Params = {
  userId: string
}

export function EditUserPage() {
  const { userId } = useParams<Params>()

  if (!userId) {
    return <Navigate replace to="not-found" />
  }

  return <h1>Edit user</h1>
}
