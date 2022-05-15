import { Formik } from 'formik';
import { Button, Form } from "react-bootstrap";
import React from 'react'

const AddDepartmentForm = () => {
    return (
        <div>
            <Formik
                initialValues={{ departmentName: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.departmentName) {
                        errors.departmentName = "*";
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
                        <Form.Group className="mb-1" style={{ width: "60%" }}>
                            <div style={{ display: "flex" }}>
                                {errors.departmentName && touched.departmentName && (
                                    <div style={{ color: "red", marginRight: 5 }}>
                                        {errors.departmentName}
                                    </div>
                                )}
                                <Form.Label>Name</Form.Label>
                            </div>

                            <Form.Control
                                type="input"
                                name="departmentName"
                                value={values.departmentName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter department name"
                            />
                        </Form.Group>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row-reverse",
                                width: "60%",
                                marginTop: 20,
                            }}
                        >
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5", marginBottom: 15 }}
                            >
                                Submit
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddDepartmentForm