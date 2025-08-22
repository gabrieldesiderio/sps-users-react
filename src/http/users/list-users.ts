import type { User } from '@/types/user'
import { api } from '../api-client'

type ListUsersResponse = {
  users: User[]
}

export async function listUsers() {
  const response = await api.get<ListUsersResponse>('/users')

  return response.data
}
