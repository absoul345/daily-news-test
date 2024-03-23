import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  removeCredentials,
  selectCurrentAdmin,
  selectIsAuthenticated,
} from '../../services/admin/admin.slice';

import { useLogoutMutation } from '../../services/admin/admin.api';
import { PATHS_URL } from '../../constants/paths-url.constants';

const NavigationBar = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const admin = useSelector(selectCurrentAdmin);

  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logout(null);
      dispatch(removeCredentials());
    } catch (error) {
      console.error('error', error);
    }
  };

  return (
    <nav className="bg-gray-800 py-4 px-12 ">
      <ul className="flex justify-between">
        <li className="flex">
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
          {isAuthenticated && (
            <div>
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
            </div>
          )}
        </li>
        <li className="flex flex-row">
          {isAuthenticated && (
            <p className="mr-20 ml-4 text-blue-400 font-bold">
              Hi, {admin?.email}
            </p>
          )}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="text-white font-bold hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to={`/${PATHS_URL.AUTH}`}
              className={({ isActive, isPending }) =>
                isPending
                  ? ''
                  : isActive
                    ? 'mr-20 text-blue-400 font-bold transition duration-300 ease-in-out'
                    : 'mr-20 text-white font-bold transition duration-300 ease-in-out'
              }
            >
              Authorization
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
