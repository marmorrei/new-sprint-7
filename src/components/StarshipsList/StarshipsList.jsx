import { useState } from 'react';
import StarshipDetailsModal from '../StarshipDetailsModal/StarshipDetailsModal';
import { ListItem } from './Styled-components';
import { useStarships } from '../../utils/hooks/useStarships';

export default function StarshipsList() {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedStarship, setSelectedStarship] = useState(undefined);
  const {
    starships,
    isError,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useStarships();

  const starshipsList = starships.map(starship => (
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
      {starships.length > 0 && <ul>{starshipsList}</ul>}
      {isLoading && <strong>Loading...</strong>}
      {isError && <p>There is an error</p>}
      {!isLoading && !isError && hasNextPage === true && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading more' : 'View more'}
        </button>
      )}
      {!isLoading && !isError && hasNextPage === false && (
        <p>There are no more results.</p>
      )}
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
