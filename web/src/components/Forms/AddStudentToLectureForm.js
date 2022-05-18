import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Table, Form, Button } from "react-bootstrap";
import axios from 'axios'
import Swal from 'sweetalert2';

import { postStudentToLecture } from '../../redux/features/lecture/lectureSlice';


const AddStudentToLectureForm = () => {
  const [department, setDepartment] = useState([]);
  const [departmentId, setDepartmentId] = useState([]);
  const [departmentStudents, setDepartmentStudents] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [lectureId, setLectureId] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleDepartmentId = (event) => {
    setDepartmentId(event.target.value)
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


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('https://meta-gen.herokuapp.com/api/lecture/getAll')
        setLectures(response);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);

  const handleLectureId = (event) => {
    setLectureId(event.target.value)
  }

  const [studentId, setStudentId] = useState({
    studentIds: [],
  });

  const handleAddStudent = (e) => {
    const { value, checked } = e.target;

    const { studentIds } = studentId;
    setStudentId({
      studentIds: [...studentIds, Number(value)],
    });

    if (checked) {
      setStudentId({
        studentIds: [...studentIds, Number(value)],
      });
    }

    else {
      setStudentId({
        studentIds: studentIds.filter((e) => e !== value),
      });
    }

  }

  const handleSubmit = () => {
    const obj = {
      lectureId: lectureId,
      studentIds: studentId.studentIds
    }
    if (obj.lectureId.length !== 0 && obj.studentIds.length !== 0) {
      dispatch(postStudentToLecture(obj))

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 2000
      })

      setTimeout(() => {
        navigate(0)
      }, 2100);
    }
    else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Ooops...Something went wrong!',
        showConfirmButton: false,
        timer: 2000
      })

      setTimeout(() => {
        navigate(0)
      }, 2100);
    }
  }

  return (
    <div>
      <Form.Label>Lecture</Form.Label>
      <Form.Select
        name="lectureId"
        onChange={handleLectureId}
        className="mb-3"
        style={{ color: 'gray', width: '60%' }}
      >
        <option value="" >Choose lecture</option>
        {lectures?.map((lecture) => <option value={lecture.lectureId} style={{ color: 'black' }} key={lecture.lectureId}>{lecture.lectureName}</option>)}
      </Form.Select>

      <Form.Label>Department</Form.Label>
      <Form.Select
        name="departmentId"
        onChange={handleDepartmentId}
        className="mb-3"
        style={{ color: 'gray', width: '60%' }}
      >
        <option value="" >Choose department</option>
        {department.map((department) => <option value={department.departmentId} style={{ color: 'black' }} key={department.departmentId}>{department.departmentName}</option>)}
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
                <tr key={student.studentId}>
                  <td>{student.studentId}</td>
                  <td>{student.userName + " "} {student.userSurname}</td>
                  <td style={{ display: 'flex', justifyContent: 'center' }}><Form.Check aria-label="option 1" value={student.studentId} onChange={handleAddStudent} /></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      }
      <Button style={{ float: "right", backgroundColor: "#00ADB5", borderColor: "#00ADB5" }} onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  )
}

export default AddStudentToLectureForm