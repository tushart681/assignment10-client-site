import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../context/authprovider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext)
    const location = useLocation()
    if(loading){
        <Spinner animation='border' variant='primary' />
    }
    if(!user){
        return <Navigate to={'/form/login'} state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;