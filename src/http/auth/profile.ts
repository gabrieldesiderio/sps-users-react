import type { User } from '@/types/user'
import { api } from '../api-client'

type ProfileResponse = {
  user: User
}

export async function getProfile() {
  const response = await api.get<ProfileResponse>('/me')

  return response.data
}
