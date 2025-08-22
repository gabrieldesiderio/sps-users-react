import { Navigate, useParams } from 'react-router-dom'
import UserDetails from '@/components/user-details'

type Params = {
  userId: string
}

export default function UserDetailsPage() {
  const { userId } = useParams<Params>()

  if (!userId) {
    return <Navigate replace to="not-found" />
  }

  return <UserDetails userId={userId} />
}
