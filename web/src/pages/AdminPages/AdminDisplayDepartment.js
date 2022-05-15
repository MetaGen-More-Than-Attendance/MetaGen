import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import AdminSideMenu from '../../components/SideMenus/AdminSideMenu'
import axios from 'axios'

const AdminDisplayDepartment = () => {
    const [data, setData] = useState([]);
    
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
                        {data.map((dep) => {
                            return (
                                <tr >
                                    <td>{dep.departmentId}</td>
                                    <td colSpan={2}>{dep.departmentName}</td>
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