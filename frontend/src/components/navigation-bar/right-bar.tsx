import { NavLink } from 'react-router-dom';

import { PATHS_URL } from '../../constants/paths-url.constants';

import { ICredentials } from '../../services/admin/admin.types';

interface IProp {
  isAuthenticated: boolean;
  admin: ICredentials | null;
  handleLogout: () => Promise<void>;
}

const RightBar: React.FC<IProp> = ({
  isAuthenticated,
  handleLogout,
  admin,
}) => {
  return (
    <div className="flex flex-row">
      {isAuthenticated && (
        <p className="mr-20 ml-4 text-blue-400 font-bold">Hi, {admin?.email}</p>
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
                ? isAuthenticated
                  ? 'mr-20 text-white font-bold transition duration-300 ease-in-out'
                  : 'text-white font-bold transition duration-300 ease-in-out'
                : isAuthenticated
                  ? 'mr-20 text-white font-bold transition duration-300 ease-in-out'
                  : 'text-white font-bold transition duration-300 ease-in-out'
          }
        >
          Authorization
        </NavLink>
      )}
    </div>
  );
};

export default RightBar;
