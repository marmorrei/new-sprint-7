import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from './Styled-components';

export default function StarshipDetailsModal({
  modalState,
  changeModalState,
  selectedStarship,
}) {
  const handleClick = event => {
    event.target === event.currentTarget && changeModalState(!modalState);
  };
  return (
    selectedStarship && (
      <Overlay className='overlay' onClick={handleClick}>
        <ModalContainer className='modal-container'>
          <h1>{selectedStarship.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            ratione, doloribus cum aut aliquid quibusdam accusamus veritatis
            corporis facere suscipit magni est asperiores explicabo dolor,
            excepturi neque sequi autem minus.
          </p>
          <ul>
            <li>Model: {selectedStarship.model}</li>
            <li>Manufacturer: {selectedStarship.manufacturer}</li>
            <li>Cost in credits: {selectedStarship.cost_in_credits}</li>
            <li>Length: {selectedStarship.length}</li>
            <li>
              Atmosphering speed: {selectedStarship.max_atmosphering_speed}
            </li>
            <li>Crew: {selectedStarship.crew}</li>
          </ul>
        </ModalContainer>
      </Overlay>
    )
  );
}
StarshipDetailsModal.propTypes = {
  modalState: PropTypes.bool,
  changeModalState: PropTypes.any,
  selectedStarship: PropTypes.object,
};
