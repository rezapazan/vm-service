import { useQuery } from '@tanstack/react-query'
import { getLocations } from '@/api/instances'

const queryKeys = ['instanceLocations']

export const useInstanceLocationsQuery = () => {
  return useQuery({
    queryKey: queryKeys,
    queryFn: () => getLocations(),
  })
}
