import { useQuery } from '@tanstack/react-query';

export const fetchStarships = () => {
  const starshipsQuery = useQuery({
    queryKey: ['starships'],
    queryFn: async () =>
      await fetch('https://swapi.dev/api/starships')
        .then(async res => {
          if (!res.ok) throw new Error('Error in the petition');
          return await res.json();
        })
        .then(res => res.results),
  });
  return starshipsQuery;
};
