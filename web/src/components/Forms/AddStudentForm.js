import React, { useState, useEffect } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { Formik } from "formik";
import axios from "axios";
import Swal from 'sweetalert2';


const AddStudentForm = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [image, setImage] = useState("");
  const [imageBase64, setImageBase64] = useState("");
  const [datas, setDatas] = useState();
  const [department, setDepartment] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('https://meta-gen.herokuapp.com/api/department/getAll');
        setDepartment(response);
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
        onSubmit={(values, { resetForm }) => {
          setDatas(values);
          let newData = { ...values, imageBase64 };
          axios
            .post(
              "https://meta-gen.herokuapp.com/api/student/register",
              newData
            )
            .then(() =>
              resetForm({
                values: {
                  userName: '',
                  userSurname: '',
                  identityNumber: '',
                  departmentId: 0,
                  userMail: '',
                  userPassword: '',
                },
                isSubmitting: true
              }),
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              }),
              setIsFilePicked(false)
            )
            .catch((err) => console.log(err));
          postHandling();
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
                  placeholder="Enter student name"
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
                  placeholder="Enter student surname"
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
                  type="number"
                  name="identityNumber"
                  value={values.identityNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter student identity number"
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

                <Form.Select
                  name="departmentId"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ color: 'gray' }}
                >
                  <option value="" >Choose department</option>
                  {department.map((department) => <option value={department.departmentId} style={{ color: 'black' }} key={department.departmentId}>{department.departmentName}</option>)}
                </Form.Select>
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
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AddStudentForm;
