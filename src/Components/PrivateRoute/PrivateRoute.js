import React, { useContext } from 'react';
import { userLogInData } from '../../App';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    const [logInUser, setLogInUser] = useContext(userLogInData)
    return (
        logInUser.email ? <Outlet /> : <Navigate to='/logInPage' />
    );
};

export default PrivateRoute;