
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProtectedRoutes = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return (
            <Navigate to="/" replace >
                {Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })}
            </Navigate>
        );
    }
    return children ? children : <Outlet />;
}

export default ProtectedRoutes;