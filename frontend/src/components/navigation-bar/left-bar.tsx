import { NavLink } from 'react-router-dom';

import { PATHS_URL } from '../../constants/paths-url.constants';

interface IProp {
  isAuthenticated: boolean;
}

const LeftBar: React.FC<IProp> = ({ isAuthenticated }) => {
  return (
    <ul className="flex">
      <li>
        {!isAuthenticated && (
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? ''
                : isActive
                  ? 'mr-20 text-blue-400 font-bold transition duration-300 ease-in-out'
                  : 'mr-20 text-white font-bold transition duration-300 ease-in-out'
            }
          >
            Home
          </NavLink>
        )}
      </li>
      {isAuthenticated && (
        <>
          <li>
            <NavLink
              to={`/${PATHS_URL.ADMIN_PANEL}`}
              className={({ isActive, isPending }) =>
                isPending
                  ? ''
                  : isActive
                    ? 'mr-20 text-blue-400 font-bold transition duration-300 ease-in-out'
                    : 'mr-20 text-white font-bold transition duration-300 ease-in-out'
              }
            >
              Admin Panel
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${PATHS_URL.CREATE_ARTICLE}`}
              className={({ isActive, isPending }) =>
                isPending
                  ? ''
                  : isActive
                    ? ' text-blue-400 font-bold transition duration-300 ease-in-out'
                    : 'text-white font-bold transition duration-300 ease-in-out'
              }
            >
              Create Article
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default LeftBar;
