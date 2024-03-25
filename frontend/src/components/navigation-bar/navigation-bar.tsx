import { useSelector, useDispatch } from 'react-redux';

import {
  removeCredentials,
  selectCurrentAdmin,
  selectIsAuthenticated,
} from '../../services/admin/admin.slice';

import { useLogoutMutation } from '../../services/admin/admin.api';

import LeftBar from './left-bar';
import RightBar from './right-bar';

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
      <ul className="flex justify-between items-center">
        <li>
          <LeftBar isAuthenticated={isAuthenticated} />
        </li>
        <li>
          <RightBar
            isAuthenticated={isAuthenticated}
            admin={admin}
            handleLogout={handleLogout}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
