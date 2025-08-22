import { api } from '../api-client'

type DeleteUserRequest = {
  userId: string
}

export async function deleteUser({ userId }: DeleteUserRequest) {
  await api.delete(`/users/${userId}`)
}
