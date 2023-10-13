import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from './Styled-components';
import starshipsImg from '../../assets/starship-images';

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
          <div className='ship-image'>
            <img
              src={
                starshipsImg.find(
                  element => element.name === selectedStarship.name,
                ).url ||
                'https://starwars-visualguide.com/assets/img/placeholder.jpg'
              }
              alt={selectedStarship.name}
            />
          </div>
          <div className='ship-details'>
            <h1>{selectedStarship.name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              ratione, doloribus cum aut aliquid quibusdam accusamus veritatis
              corporis facere suscipit magni est asperiores explicabo dolor,
              excepturi neque sequi autem minus.
            </p>
            <ul className='list-of-details'>
              <li>Model: {selectedStarship.model}</li>
              <li>Manufacturer: {selectedStarship.manufacturer}</li>
              <li>Cost in credits: {selectedStarship.cost_in_credits}</li>
              <li>Length: {selectedStarship.length}</li>
              <li>
                Atmosphering speed: {selectedStarship.max_atmosphering_speed}
              </li>
              <li>Crew: {selectedStarship.crew}</li>
            </ul>
          </div>
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
