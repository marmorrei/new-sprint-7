import { NavbarStyle } from './Styled-components';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <NavbarStyle>
      <ul>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'is-active' : undefined)}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/starships'
            className={({ isActive }) => (isActive ? 'is-active' : undefined)}
          >
            STARSHIPS
          </NavLink>
        </li>
      </ul>
    </NavbarStyle>
  );
}
