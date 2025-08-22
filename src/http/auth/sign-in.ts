import { api } from '../api-client'

type SignInRequest = {
  email: string
  password: string
}

export async function signIn({ email, password }: SignInRequest) {
  await api.post('/auth/login', { email, password })
}
