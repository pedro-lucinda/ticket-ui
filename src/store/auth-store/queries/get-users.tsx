import { useQuery } from 'react-query'

import { queryClient } from '@/config/react-query/lib'
import { QUERY_KEYS } from '@/constants/react-query'

type IFilter = {
  name: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IUsersQueryResult = any | null

export const UsersQuery = (page: number, filters?: IFilter) => {
  return useQuery({
    queryKey: [QUERY_KEYS.AUTH, page, filters],
    queryFn: async (): Promise<IUsersQueryResult> =>
      await onFetch(page, filters),
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    staleTime: 1000 * 60 * 1, // 1 min
  })
}

export async function onRefetchUsersQuery() {
  return await queryClient.invalidateQueries(QUERY_KEYS.AUTH)
}

const onFetch = async (
  page: number,
  filters?: IFilter,
): Promise<IUsersQueryResult[] | null> => {
  try {
    // ...
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return [] as any
  } catch (err) {
    console.log(err)
    return Promise.resolve(null)
  }
}
