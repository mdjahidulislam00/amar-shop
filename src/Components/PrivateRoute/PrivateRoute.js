import React, { useContext } from 'react';
import {currentUser} from '../../App';
import { Navigate,  Outlet,  useLocation } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    const [logInUser, setLogInUser] = useContext(currentUser);
    return logInUser.email ?  <Outlet /> : <Navigate to={'/SignUpPage'} />;
};

export default PrivateRoute;