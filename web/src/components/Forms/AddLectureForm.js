import React from 'react'
// import { useDispatch } from 'react-redux';
import { Formik } from "formik";
import { Button, Form } from 'react-bootstrap'
// import { postLecture } from '../../redux/features/lecture/lectureSlice';

const AddLectureForm = () => {

    // const dispatch = useDispatch();

    const initialValues = {
        lectureName: "",
        instructorId: "",
        // semester: "",
        lectureId: "",
        lectureStartDate: "",
        // startHour: "",
        departmentId: "",
    };

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
                    if (!values.lectureId) {
                        errors.lectureId = "*";
                    }
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
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                    // const obj = { content: values };
                    // console.log(obj)
                    // dispatch(postLecture(obj))
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
                                <Form.Control
                                    type="input"
                                    name="instructorId"
                                    value={values.instructorId}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Search teacher name"
                                    style={{ width: '60%' }}
                                />
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
                                {errors.lectureId && touched.lectureId && (
                                    <div style={{ color: "red", marginRight: 5 }}>
                                        {errors.lectureId}
                                    </div>
                                )}
                                <Form.Label>Lecture Code</Form.Label>
                            </div>
                            <Form.Control
                                type="input"
                                name="lectureId"
                                value={values.lectureId}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter lecture code" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '60%' }}>
                            <div style={{ display: "flex" }}>
                                {errors.departmentId && touched.departmentId && (
                                    <div style={{ color: "red", marginRight: 5 }}>
                                        {errors.departmentId}
                                    </div>
                                )}
                                <Form.Label>Department</Form.Label>
                            </div>
                            <Form.Control
                                type="input"
                                name="departmentId"
                                value={values.departmentId}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter department id" />
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