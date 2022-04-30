
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import Swal from 'sweetalert2';

const ProtectedRoutes = ({ children }) => {
    const token = localStorage.getItem("token")
    
    return (
        token === null
            ?
            <Navigate to="/" replace>
                {Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You need to login!',
                })}
            </Navigate>
            :
            children ? children : <Outlet />
    )
}

export default ProtectedRoutes;