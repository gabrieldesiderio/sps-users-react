import { api } from '../api-client'

type CreateUserRequest = {
  name: string
  email: string
  password: string
  type: 'admin' | 'default'
}

export async function createUser(data: CreateUserRequest) {
  await api.post('/users', data)
}
