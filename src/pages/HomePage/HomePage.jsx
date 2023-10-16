import { Link } from 'react-router-dom';
import { MainContainer } from './Styled-components';

export default function HomePage() {
  return (
    <MainContainer>
      <section>
        <h1>ALL THE STARSHIPS IN ONE PLACE</h1>
        <h3>
          Find out more details about each one of them: from the length to the
          atmosphering speed.
        </h3>
        <Link to='/starships'>
          <button>GO TO STARSHIPS</button>
        </Link>
      </section>
    </MainContainer>
  );
}
