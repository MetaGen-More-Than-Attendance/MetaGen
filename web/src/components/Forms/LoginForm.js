import React from 'react'
import { Button, Form } from 'react-bootstrap'
import loginImg from "../../images/java.jpeg"
import logoImg from "../../images/logo512.png"
import { Formik } from "formik";

const LoginForm = () => {

    const initialValues = {
        email: "",
        password: "",
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div style={{ backgroundColor: '#222831', display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row-reverse" }}>
                <img src={loginImg} alt="img" style={{ width: '70%', height: '100vh' }} />
                <Formik
                    initialValues={initialValues}
                    validate={(values) => {
                        const errors = {};

                        if (!values.email) {
                            errors.email = '*';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        if (!values.password) {
                            errors.password = "*";
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
                        <Form onSubmit={handleSubmit} style={{ padding: "1rem", width: "70%" }} >
                            <Form.Group className="mb-3" style={{ display: 'flex', justifyContent: "center" }}>
                                <img src={logoImg} alt="logo" style={{ width: '2rem', height: '2rem' }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail" style={{ display: 'flex', justifyContent: "center" }}>
                                <Form.Label style={{ color: '#EEE' }}>Login into your account</Form.Label>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <div style={{ display: "flex", flexDirection: 'column' }}>
                                    {errors.email && touched.email && (
                                        <div style={{ color: "red" }}>
                                            {errors.email}
                                        </div>
                                    )}
                                    <Form.Label style={{ color: '#EEE' }}>Email address</Form.Label>
                                </div>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter email"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <div style={{ display: "flex", flexDirection: 'column' }}>
                                    {errors.password && touched.password && (
                                        <div style={{ color: "red" }}>
                                            {errors.password}
                                        </div>
                                    )}
                                    <Form.Label style={{ color: '#EEE' }}>Password</Form.Label>
                                </div>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Password"
                                />
                            </Form.Group>

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

        </div >
    )
}

export default LoginForm

