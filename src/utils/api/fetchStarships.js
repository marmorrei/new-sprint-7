export const fetchStarships = async ({ pageParam = 1 }) => {
  return await fetch(`https://swapi.dev/api/starships/?page=${pageParam}`)
    .then(async res => {
      if (!res.ok) throw new Error('Error in the petition');
      return await res.json();
    })
    .then(res => {
      const currentPage = pageParam;
      const nextCursor = currentPage > 3 ? undefined : currentPage + 1;
      return {
        starships: res.results,
        nextCursor,
      };
    });
};
