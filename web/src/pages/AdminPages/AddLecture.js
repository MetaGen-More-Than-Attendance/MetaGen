import React from 'react'
import { Button, Form } from 'react-bootstrap'
import AdminSideMenu from '../../components/SideMenus/AdminSideMenu'
import { Formik } from "formik";

const AddLecture = () => {

    const initialValues = {
        lectureName: "",
        teacherName: "",
        semester: "",
        lectureCode: "",
        startDate: "",
        startHour: "",
    };

    return (
        <div style={{ height: "80vh", display: "flex" }}>
            <AdminSideMenu />
            <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
                <h1 style={{ color: '#9C9FA3' }}>Save Lecture</h1>
                <hr style={{ color: '#222831', width: '97%' }} />
                <Formik
                    initialValues={initialValues}
                    validate={(values) => {
                        const errors = {};

                        if (!values.lectureName) {
                            errors.lectureName = "*";
                        }
                        if (!values.teacherName) {
                            errors.teacherName = "*";
                        }
                        if (!values.semester) {
                            errors.semester = "*";
                        }
                        if (!values.lectureCode) {
                            errors.lectureCode = "*";
                        }
                        if (!values.startDate) {
                            errors.startDate = "*";
                        }
                        if (!values.startHour) {
                            errors.startHour = "*";
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
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
                                        {errors.teacherName && touched.teacherName && (
                                            <div style={{ color: "red", marginRight: 5 }}>
                                                {errors.teacherName}
                                            </div>
                                        )}
                                        <Form.Label>Teacher Name</Form.Label>
                                    </div>
                                    <Form.Control
                                        type="input"
                                        name="teacherName"
                                        value={values.teacherName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Search teacher name"
                                        style={{ width: '60%' }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '60%' }}>
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
                                </Form.Group>
                            </div>

                            <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '60%' }}>
                                <div style={{ display: "flex" }}>
                                    {errors.lectureCode && touched.lectureCode && (
                                        <div style={{ color: "red", marginRight: 5 }}>
                                            {errors.lectureCode}
                                        </div>
                                    )}
                                    <Form.Label>Lecture Code</Form.Label>
                                </div>
                                <Form.Control
                                    type="input"
                                    name="lectureCode"
                                    value={values.lectureCode}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter lecture code" />
                            </Form.Group>

                            <div style={{ display: 'flex', width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '40%' }}>
                                    <div style={{ display: "flex" }}>
                                        {errors.startDate && touched.startDate && (
                                            <div style={{ color: "red", marginRight: 5 }}>
                                                {errors.startDate}
                                            </div>
                                        )}
                                        <Form.Label>Start Date</Form.Label>
                                    </div>
                                    <Form.Control
                                        type="date"
                                        name="startDate"
                                        value={values.startDate}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '40%' }}>
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
                                </Form.Group>
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
            </div >
        </div >
    )
}

export default AddLecture

