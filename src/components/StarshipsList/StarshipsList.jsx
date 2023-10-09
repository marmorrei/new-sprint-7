import { useState } from 'react';
import { fetchStarships } from '../../utils/api/fetch-starships';
import StarshipDetailsModal from '../StarshipDetailsModal/StarshipDetailsModal';
import { ListItem } from './Styled-components';

export default function StarshipsList() {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedStarship, setSelectedStarship] = useState(undefined);
  const starshipsQuery = fetchStarships();

  const starshipsList = starshipsQuery.data?.map(starship => (
    <ListItem
      key={starship.name}
      onClick={() => {
        setDisplayModal(true);
        setSelectedStarship(starship);
      }}
    >
      <p>{starship.name}</p>
      <p>{starship.model}</p>
    </ListItem>
  ));

  return (
    <>
      <h1>Starships</h1>
      {starshipsQuery.data?.length > 0 && <ul>{starshipsList}</ul>}
      {starshipsQuery.isLoading && <strong>Loading...</strong>}
      {starshipsQuery.error && <p>There is an error</p>}
      {displayModal && (
        <StarshipDetailsModal
          modalState={displayModal}
          changeModalState={setDisplayModal}
          selectedStarship={selectedStarship}
        />
      )}
    </>
  );
}
