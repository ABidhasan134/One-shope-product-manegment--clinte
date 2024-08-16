import React, { Children, useContext } from 'react'
import { AuthContext } from '../context/authProvider'
import { Navigate, useLocation } from 'react-router-dom';

const PriveteRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location =useLocation();

    if(loading)
    {
        return <div>loading........</div>
    }

    if(user)
    {
        return children
    }
  return (
    <div>
      <Navigate state={location.pathname} to="/login"></Navigate>
    </div>
  )
}

export default PriveteRouter
