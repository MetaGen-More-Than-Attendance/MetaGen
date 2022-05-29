import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import loginImg from "../../images/homeBg2.jpg";
import logoImg from "../../images/metagenLogo.png";
import { Formik } from "formik";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [errorMessage, seterrorMessage] = useState("");

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#222831",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row-reverse",
        }}
      >
        <img
          src={loginImg}
          alt="img"
          style={{ width: "70%", height: "100vh" }}
        />
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors = {};

            if (!values.username) {
              errors.username = "*";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
            ) {
              errors.username = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "*";
            }

            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            axios
              .post("https://meta-gen.herokuapp.com/login", values)
              .then((result) => {
                var decoded = jwt_decode(result.data.token);
                localStorage.setItem("token", result.data.token);
                localStorage.setItem("exp", decoded.exp);
                localStorage.setItem("iat", decoded.iat);
                localStorage.setItem("isAdmin", decoded.isAdmin);
                localStorage.setItem("isTeacher", decoded.isTeacher);
                localStorage.setItem("isStudent", decoded.isStudent);
                localStorage.setItem("userId", result.data.userDto.userId);

                axios.defaults.headers.common[
                  "Authorization"
                ] = `Bearer ${result.data}`;

                if (result.data) {
                  navigate("/home");
                  window.location.reload(true);
                }
              })
              .catch((err) => {
                seterrorMessage("Wrong password or username");
                resetForm();
              });
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
            <Form
              onSubmit={handleSubmit}
              style={{ padding: "1rem", width: "70%" }}
            >
               <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Form.Label style={{ color: "#00ADB5", fontWeight:'bold', fontSize: 25 }}>
                  MetaGen
                </Form.Label>
              </Form.Group>
              <Form.Group
                className="mb-3"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src={logoImg}
                  alt="logo"
                  style={{ width: "10rem", height: "10rem" }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Form.Label style={{ color: "#00ADB5", fontWeight:'bold' }}>
                  More Than Attendance
                </Form.Label>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {errors.username && touched.username && (
                    <div style={{ color: "red" }}>{errors.username}</div>
                  )}
                  <Form.Label style={{ color: "#EEE" }}>
                    Email address
                  </Form.Label>
                </div>
                <Form.Control
                  type="username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {errors.password && touched.password && (
                    <div style={{ color: "red" }}>{errors.password}</div>
                  )}
                  <Form.Label style={{ color: "#EEE" }}>Password</Form.Label>
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

              <div style={{display:'flex', justifyContent:'center'}}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5", marginTop: 8 }}
                >
                  Submit
                </Button>
              </div>
              {errorMessage && <p style={{ color: "red" }}> {errorMessage} </p>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
