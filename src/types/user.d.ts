export type User = {
  id: string
  name: string
  email: string
  password: string
  type: 'admin' | 'default'
  createdAt: string
  updatedAt: string
}
