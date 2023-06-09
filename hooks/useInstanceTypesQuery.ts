import { useQuery } from '@tanstack/react-query'
import { getTypes } from '@/api/instances'

const queryKeys = ['instanceTypes']

export const useInstanceTypesQuery = () => {
  return useQuery({
    queryKey: queryKeys,
    queryFn: () => getTypes(),
  })
}
