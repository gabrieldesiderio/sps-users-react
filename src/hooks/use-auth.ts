import { useQuery } from '@tanstack/react-query'
import { getProfile } from '../http/auth/profile'

export function useAuth() {
	const { data, error, isLoading, refetch } = useQuery({
		queryKey: ['profile'],
		queryFn: getProfile,
		retry: false,
	})

	return {
		user: data?.user || null,
		isAuthenticated: !!data?.user,
		loading: isLoading,
		error,
		refetchUser: refetch,
	}
}
