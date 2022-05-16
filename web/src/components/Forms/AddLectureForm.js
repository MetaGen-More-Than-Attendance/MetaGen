import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from "formik";
import { Button, Form } from 'react-bootstrap'
import { postLecture } from '../../redux/features/lecture/lectureSlice';
import { fetchTeachers } from '../../redux/features/teacher/teacherSlice';
import axios from 'axios';

const AddLectureForm = () => {
    const [data, setData] = useState([]);

    const dispatch = useDispatch();

    const initialValues = {
        lectureName: "",
        instructorId: 0,
        // semester: "",
        lectureStartDate: "",
        // startHour: "",
        departmentId: 0,
    };

    const allTeachers = useSelector((state) => state.teachers.entities);

    useEffect(() => {
        dispatch(fetchTeachers());
    }, [dispatch]);

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
        <div>
            <Formik
                initialValues={initialValues}
                validate={(values) => {
                    const errors = {};

                    if (!values.lectureName) {
                        errors.lectureName = "*";
                    }
                    if (!values.instructorId) {
                        errors.instructorId = "*";
                    }
                    // if (!values.semester) {
                    //     errors.semester = "*";
                    // }                   
                    if (!values.lectureStartDate) {
                        errors.lectureStartDate = "*";
                    }
                    if (!values.departmentId) {
                        errors.departmentId = "*";
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 400);
                    const obj = {
                        instructorId: parseInt(values.instructorId),
                        departmentId: parseInt(values.departmentId),
                        lectureName: values.lectureName,
                        lectureStartDate: values.lectureStartDate
                     };
                    dispatch(postLecture(obj))
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '60%' }}>
                            <div style={{ display: "flex" }}>
                                {errors.lectureName && touched.lectureName && (
                                    <div style={{ color: "red", marginRight: 5 }}>
                                        {errors.lectureName}
                                    </div>
                                )}
                                <Form.Label>Lecture Name</Form.Label>
                            </div>
                            <Form.Control
                                type="input"
                                name="lectureName"
                                value={values.lectureName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter lecture name" />
                        </Form.Group>

                        <div style={{ display: 'flex', width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '60%' }}>
                                <div style={{ display: "flex" }}>
                                    {errors.instructorId && touched.instructorId && (
                                        <div style={{ color: "red", marginRight: 5 }}>
                                            {errors.instructorId}
                                        </div>
                                    )}
                                    <Form.Label>Instructor Name</Form.Label>
                                </div>

                                <Form.Select
                                    name="instructorId"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ color: 'gray' }}
                                >
                                    <option value="" >Choose teacher</option>
                                    {allTeachers.map((teacher) => <option value={teacher.instructorId} key={teacher.instructorId} style={{ color: 'black' }}>{teacher.userName}</option>)}
                                </Form.Select>

                            </Form.Group>

                            {/* <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '60%' }}>
                                <div style={{ display: "flex" }}>
                                    {errors.semester && touched.semester && (
                                        <div style={{ color: "red", marginRight: 5 }}>
                                            {errors.semester}
                                        </div>
                                    )}
                                    <Form.Label>Semester</Form.Label>
                                </div>
                                <Form.Select
                                    name="semester"
                                    value={values.semester}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ color: 'gray' }}
                                >
                                    <option disabled value="" >Choose one semester</option>
                                    <option value="Fall" style={{ color: 'black' }}>Fall</option>
                                    <option value="Spring" style={{ color: 'black' }}>Spring</option>
                                </Form.Select>
                            </Form.Group> */}
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '60%' }}>
                            <div style={{ display: "flex" }}>
                                {errors.departmentId && touched.departmentId && (
                                    <div style={{ color: "red", marginRight: 5 }}>
                                        {errors.departmentId}
                                    </div>
                                )}
                                <Form.Label>Department</Form.Label>
                            </div>

                            <Form.Select
                                name="departmentId"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{ color: 'gray' }}
                            >
                                <option value="" >Choose department</option>
                                {data.map((department) => <option value={department.departmentId} style={{ color: 'black' }} key={department.departmentId}>{department.departmentName}</option>)}
                            </Form.Select>
                        </Form.Group>

                        <div style={{ display: 'flex', width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '40%' }}>
                                <div style={{ display: "flex" }}>
                                    {errors.lectureStartDate && touched.lectureStartDate && (
                                        <div style={{ color: "red", marginRight: 5 }}>
                                            {errors.lectureStartDate}
                                        </div>
                                    )}
                                    <Form.Label>Start Date</Form.Label>
                                </div>
                                <Form.Control
                                    type="date"
                                    name="lectureStartDate"
                                    value={values.lectureStartDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Form.Group>

                            {/* <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '40%' }}>
                                <div style={{ display: "flex" }}>
                                    {errors.startHour && touched.startHour && (
                                        <div style={{ color: "red", marginRight: 5 }}>
                                            {errors.startHour}
                                        </div>
                                    )}
                                    <Form.Label>Start Hour</Form.Label>
                                </div>
                                <Form.Control
                                    type="time"
                                    name="startHour"
                                    value={values.startHour}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Form.Group> */}
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }}>
                            Submit
                        </Button>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddLectureForm