import type { User } from '@/types/user'
import { api } from '../api-client'

type GetUserByIdRequest = {
  userId: string
}

type GetUserByIdResponse = {
  user: User
}

export async function GetUserById({ userId }: GetUserByIdRequest) {
  const response = await api.get<GetUserByIdResponse>(`/users/${userId}`)

  return response.data
}
