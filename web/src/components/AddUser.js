import React, { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { Formik } from "formik";
import axios from "axios";
const AddUser = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [image, setImage] = useState();
  const changeHandler = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
    setImage(event.currentTarget.files[0]);

    console.log(selectedFile);
    setIsFilePicked(true);
  };

  const initialValues = {
    name: "",
    surname: "",
    id: "",
    department: "",
    email: "",
    password: "",
    image: "",
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "*";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "*Invalid email address!";
          }
          if (!values.name) {
            errors.name = "*";
          }
          if (!values.surname) {
            errors.surname = "*";
          }
          if (!values.id) {
            errors.id = "*";
          }
          if (!values.department) {
            errors.department = "*";
          }
          if (!values.password) {
            errors.password = "*";
          }
          // if (!values.image) {
          //     errors.image = '*image';
          // }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          var formData = new FormData();
          formData.append("file", image);
          formData.append("data", JSON.stringify(values));

          axios({
            method: "post",
            url: "https://meta-gen.herokuapp.com/api/student",
            data: formData,
          })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (response) {
              console.log(response);
            });
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
          <div>
            <div
              style={{
                display: "flex",
                float: "left ",
                width: "30%",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Form.Group
                controlId="formFile"
                className="mr-5"
                style={{ width: "70%" }}
              >
                <Form.Control
                  type="file"
                  name="image"
                  onChange={changeHandler}
                />
                {/* {errors.image && touched.image && (<div style={{ color: 'red', marginRight: 5 }}>{errors.image}</div>)} */}
              </Form.Group>
              {isFilePicked && (
                <Image
                  src={selectedFile}
                  roundedCircle={true}
                  className="mt-5 mr-5"
                  style={{ width: "70%" }}
                />
              )}
            </div>

            <Form
              onSubmit={handleSubmit}
              style={{ width: "70%", float: "right" }}
            >
              <Form.Group className="mb-1" style={{ width: "60%" }}>
                <div style={{ display: "flex" }}>
                  {errors.name && touched.name && (
                    <div style={{ color: "red", marginRight: 5 }}>
                      {errors.name}
                    </div>
                  )}
                  <Form.Label>Name</Form.Label>
                </div>

                <Form.Control
                  type="input"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter teacher name"
                />
              </Form.Group>

              <Form.Group className="mb-1" style={{ width: "60%" }}>
                <div style={{ display: "flex" }}>
                  {errors.surname && touched.surname && (
                    <div style={{ color: "red", marginRight: 5 }}>
                      {errors.surname}
                    </div>
                  )}
                  <Form.Label>Surname</Form.Label>
                </div>

                <Form.Control
                  type="input"
                  name="surname"
                  value={values.surname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter teacher surname"
                />
              </Form.Group>

              <Form.Group className="mb-1" style={{ width: "60%" }}>
                <div style={{ display: "flex" }}>
                  {errors.id && touched.id && (
                    <div style={{ color: "red", marginRight: 5 }}>
                      {errors.id}
                    </div>
                  )}
                  <Form.Label>Identity Number</Form.Label>
                </div>

                <Form.Control
                  type="input"
                  name="id"
                  value={values.id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter teacher identity number"
                />
              </Form.Group>

              <Form.Group className="mb-1" style={{ width: "60%" }}>
                <div style={{ display: "flex" }}>
                  {errors.department && touched.department && (
                    <div style={{ color: "red", marginRight: 5 }}>
                      {errors.department}
                    </div>
                  )}
                  <Form.Label>Department</Form.Label>
                </div>

                <Form.Control
                  type="input"
                  name="department"
                  value={values.department}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter teacher department"
                />
              </Form.Group>

              <Form.Group className="mb-1" style={{ width: "60%" }}>
                <div style={{ display: "flex" }}>
                  {errors.email && touched.email && (
                    <div style={{ color: "red", marginRight: 5 }}>
                      {errors.email}
                    </div>
                  )}
                  <Form.Label>Email address</Form.Label>
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

              <Form.Group className="mb-1" style={{ width: "60%" }}>
                <div style={{ display: "flex" }}>
                  {errors.password && touched.password && (
                    <div style={{ color: "red", marginRight: 5 }}>
                      {errors.password}
                    </div>
                  )}
                  <Form.Label>Password</Form.Label>
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
                style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }}
              >
                Submit
              </Button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AddUser;
