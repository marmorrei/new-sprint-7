import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchStarships } from '../api/fetchStarships';

export const useStarships = () => {
  const {
    isLoading,
    isError,
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['starships'],
    queryFn: fetchStarships,
    getNextPageParam: lastPage => lastPage.nextCursor,
  });

  return {
    isLoading,
    isError,
    starships: data?.pages?.flatMap(page => page.starships) ?? [],
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  };
};
