import React, { useContext } from 'react';
import {currentUser} from '../../App';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    const [logInUser, setLogInUser] = useContext(currentUser)
    return (
        <p>this is Protect Route</p>
    );
};

export default PrivateRoute;