import { Loader2 } from 'lucide-react'

export function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Loader2 className="size-7 animate-spin" />
    </div>
  )
}
