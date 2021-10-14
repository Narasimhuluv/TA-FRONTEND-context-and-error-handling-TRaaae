import {useContext} from 'react';
import { UserContext } from '../Context';

function Header({ isDarkMode }) {
  const user = useContext(UserContext)
  let isDarkMode = user.data.isDarkMode;
  return (
    <h1 className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}>
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
