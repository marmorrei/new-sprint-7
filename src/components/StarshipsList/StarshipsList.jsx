import React from 'react';
import { fetchStarships } from '../../utils/api/fetch-starships';

export default function StarshipsList() {
  const starshipsQuery = fetchStarships();
  const starshipsList = starshipsQuery.data?.map(starship => (
    <li key={starship.name}>
      <p>{starship.name}</p>
      <p>{starship.model}</p>
    </li>
  ));

  return (
    <>
      <h1>Starships</h1>
      {starshipsQuery.data?.length > 0 && <ul>{starshipsList}</ul>}
      {starshipsQuery.isLoading && <strong>Loading...</strong>}
      {starshipsQuery.error && <p>There is an error</p>}
    </>
  );
}
