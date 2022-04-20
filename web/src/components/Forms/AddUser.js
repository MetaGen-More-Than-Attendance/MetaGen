import React, { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { Formik } from "formik";
import axios from "axios";
const AddUser = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [image, setImage] = useState("");
  const [imageBase64, setImageBase64] = useState("");
  const [datas, setDatas] = useState();

  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("error", error);
    };
  };

  const changeHandler = async (event) => {
    event.persist();
    
    await new Promise((resolve) => {
      setSelectedFile(event.target.files[0]);
      setImage(URL.createObjectURL(event.target.files[0]));
      resolve();
    });
    await new Promise((resolve) => {
      try {
        getBase64(event.target.files[0], (base64String) => {
          setImageBase64(base64String);
        });
      } catch (error) {
        console.log(error);
      }
      setIsFilePicked(true);
      resolve();
    });
  };

  const postHandling = (e) => {
    e.preventDefault();
    console.log(imageBase64);
    let newData = { ...datas, imageBase64 };
    console.log(newData);
    axios
      .post("https://meta-gen.herokuapp.com/api/student/register", newData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const initialValues = {
    userName: "",
    userSurname: "",
    identityNumber: "",
    departmentId: 0,
    userMail: "",
    userPassword: "",
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};
          if (!values.userMail) {
            errors.userMail = "*";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userMail)
          ) {
            errors.userMail = "*Invalid userMail address!";
          }
          if (!values.userName) {
            errors.userName = "*";
          }
          if (!values.userSurname) {
            errors.userSurname = "*";
          }
          if (!values.identityNumber) {
            errors.identityNumber = "*";
          }
          if (!values.departmentId) {
            errors.departmentId = "*";
          }
          if (!values.userPassword) {
            errors.userPassword = "*";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(selectedFile);
          setDatas(values);
          console.log(values);
          console.log(imageBase64);
          let newData = { ...values, imageBase64 };
          console.log(newData);
          axios
            .post(
              "https://meta-gen.herokuapp.com/api/student/register",
              newData
            )
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
          postHandling();
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
                  name="imageBase64"
                  onChange={changeHandler}
                />
              </Form.Group>
              {isFilePicked && (
                <Image
                  src={image}
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
                  {errors.userName && touched.userName && (
                    <div style={{ color: "red", marginRight: 5 }}>
                      {errors.userName}
                    </div>
                  )}
                  <Form.Label>Name</Form.Label>
                </div>

                <Form.Control
                  type="input"
                  name="userName"
                  value={values.userName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter teacher name"
                />
              </Form.Group>

              <Form.Group className="mb-1" style={{ width: "60%" }}>
                <div style={{ display: "flex" }}>
                  {errors.userSurname && touched.userSurname && (
                    <div style={{ color: "red", marginRight: 5 }}>
                      {errors.userSurname}
                    </div>
                  )}
                  <Form.Label>Surname</Form.Label>
                </div>

                <Form.Control
                  type="input"
                  name="userSurname"
                  value={values.userSurname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter teacher surname"
                />
              </Form.Group>

              <Form.Group className="mb-1" style={{ width: "60%" }}>
                <div style={{ display: "flex" }}>
                  {errors.identityNumber && touched.identityNumber && (
                    <div style={{ color: "red", marginRight: 5 }}>
                      {errors.identityNumber}
                    </div>
                  )}
                  <Form.Label>Identity Number</Form.Label>
                </div>

                <Form.Control
                  type="input"
                  name="identityNumber"
                  value={values.identityNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter teacher identity number"
                />
              </Form.Group>

              <Form.Group className="mb-1" style={{ width: "60%" }}>
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
                  placeholder="Enter teacher department"
                />
              </Form.Group>

              <Form.Group className="mb-1" style={{ width: "60%" }}>
                <div style={{ display: "flex" }}>
                  {errors.userMail && touched.userMail && (
                    <div style={{ color: "red", marginRight: 5 }}>
                      {errors.userMail}
                    </div>
                  )}
                  <Form.Label>Email address</Form.Label>
                </div>

                <Form.Control
                  type="email"
                  name="userMail"
                  value={values.userMail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-1" style={{ width: "60%" }}>
                <div style={{ display: "flex" }}>
                  {errors.userPassword && touched.userPassword && (
                    <div style={{ color: "red", marginRight: 5 }}>
                      {errors.userPassword}
                    </div>
                  )}
                  <Form.Label>Password</Form.Label>
                </div>

                <Form.Control
                  type="password"
                  name="userPassword"
                  value={values.userPassword}
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
                Check
              </Button>

              <Button
                type="submit"
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
