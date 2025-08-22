import { api } from '../api-client'

type CreateUserRequest = {
  name: string
  email: string
  password: string
  type: 'admin' | 'default'
}

export async function editUser(userId: string, data: CreateUserRequest) {
  await api.put(`/users/${userId}`, data)
}
