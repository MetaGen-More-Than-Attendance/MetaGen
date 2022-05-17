import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Table, Button } from 'react-bootstrap'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router'
import axios from 'axios'

import AdminSideMenu from '../../components/SideMenus/AdminSideMenu'
import { deleteDepartment } from '../../redux/features/department/departmentSlice';

const AdminDisplayDepartment = () => {
    const [data, setData] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get('https://meta-gen.herokuapp.com/api/department/getAll');
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, []);

    const handleDelete = (id) => {
        dispatch(deleteDepartment(id))
    }

    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <AdminSideMenu />
            <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
                <h1 style={{ color: '#9C9FA3' }}>Display All Departments</h1>
                <hr style={{ color: '#222831', width: '97%' }} />
                <Table striped bordered hover responsive="md">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((department) => {
                            return (
                                <tr >
                                    <td>{department.departmentId}</td>
                                    <td colSpan={2}>{department.departmentName}</td>
                                    <td style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <Button style={{ backgroundColor: "red", borderColor: "red", width: '40%' }} onClick={() => {
                                            Swal.fire({
                                                title: 'Do you want to delete the department?',
                                                showDenyButton: true,
                                                showCancelButton: false,
                                                confirmButtonText: 'Delete',
                                                denyButtonText: `Cancel`,
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    handleDelete(department.departmentId)
                                                    setTimeout(() => {
                                                        navigate(0)
                                                    }, 1500)
                                                    Swal.fire('Deleted!', '', 'success')
                                                } else if (result.isDenied) {
                                                    Swal.fire('Canceled', '', 'info')
                                                }
                                            })
                                        }} >Delete</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default AdminDisplayDepartment