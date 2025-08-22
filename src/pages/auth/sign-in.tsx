import { Users } from 'lucide-react'
import { SignInForm } from '@/components/forms/sign-in'

export function SignIn() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Users className="size-4" />
          </div>
          SPS Users
        </div>
        <SignInForm />
      </div>
    </div>
  )
}
