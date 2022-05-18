import React, { useEffect, useState } from 'react'
import { Table, Button, Form } from "react-bootstrap";
import axios from 'axios'

const AddStudentToLectureForm = () => {
  const [department, setDepartment] = useState([]);
  const [departmentId, setDepartmentId] = useState([]);
  const [departmentStudents, setDepartmentStudents] = useState([]);
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('https://meta-gen.herokuapp.com/api/department/getAll')
        setDepartment(response);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('https://meta-gen.herokuapp.com/api/lecture/getAll');
        setLectures(response);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);


  const handleData = (event) => {
    setDepartmentId(event.target.value)
  }

  const handleLectureData = (event) => {
    setLectures(event.target.value)
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(`https://meta-gen.herokuapp.com/api/student/getAllByDepartment?departmentId=${departmentId}`);
        setDepartmentStudents(response);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, [departmentId]);

  console.log(departmentStudents);

  return (
    <div>
      <Form.Select
        name="departmentId"
        onChange={handleData}
        style={{ color: 'gray' }}
      >
        <option value="" >Choose department</option>
        {department.map((department) => <option value={department.departmentId} style={{ color: 'black' }} key={department.departmentId}>{department.departmentName}</option>)}
      </Form.Select>

      <Form.Select
        name="lecture"
        onChange={handleLectureData}
        style={{ color: 'gray' }}
      >
        <option value="" >Choose lecture</option>
        {lectures.map((lecture) => <option value={lecture.lectureName} style={{ color: 'black' }} key={lecture.lectureId}>{lecture.lectureName}</option>)}
      </Form.Select>

      {departmentStudents &&
        <Table striped bordered hover responsive="md">
          <thead>
            <tr>
              <th></th>
              <th>Students</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {departmentStudents.map((student) => {
              return (
                <tr>
                  <td>{student.studentId}</td>
                  <td>{student.userName+" "} {student.userSurname}</td>
                  <td style={{ display: 'flex', justifyContent: 'center' }}><Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }}>Add</Button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      }

    </div>


  )
}

export default AddStudentToLectureForm