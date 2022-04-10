import React, { useState } from 'react'
import { Table, Button, Modal, Form, Image } from 'react-bootstrap'
import AdminSideMenu from '../../components/SideMenus/AdminSideMenu'
import avatar from '../../images/logo512.png'
import { Formik } from "formik";

const AdminDisplayTeachers = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
    setIsFilePicked(true);
  };

  const initialValues = {
    name: "",
    surname: "",
    identityNumber: "",
    department: "",
    email: "",
  };

  return (
    <div style={{ height: "80vh", display: "flex" }}>
      <AdminSideMenu />
      <div style={{ marginLeft: 15, width: '100%', marginRight: 15 }}>
        <h1 style={{ color: '#9C9FA3' }}>Display All Teachers</h1>
        <hr style={{ color: '#222831', width: '97%' }} />
        <Table striped bordered hover responsive="md">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Identity Number</th>
              <th>Department</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><Image src={avatar} rounded={true} style={{ backgroundColor: 'black', width: '2rem' }} /></td>
              <td>Teoman</td>
              <td>Bayoglu</td>
              <td>11111111111</td>
              <td>Computer</td>
              <td>bayogluteoman@gmail.com</td>
              <td style={{ display: 'flex', justifyContent: 'center' }}><Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }} onClick={handleShow}>Edit</Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td><Image src={avatar} rounded={true} style={{ backgroundColor: 'black', width: '2rem' }} /></td>
              <td>Teoman</td>
              <td>Bayoglu</td>
              <td>11111111111</td>
              <td>Computer</td>
              <td>bayogluteoman@gmail.com</td>
              <td style={{ display: 'flex', justifyContent: 'center' }}><Button style={{ backgroundColor: "#00ADB5", borderColor: "#00ADB5" }}>Edit</Button></td>
            </tr>
          </tbody>
        </Table>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Teacher</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                if (!values.identityNumber) {
                  errors.identityNumber = "*";
                }
                if (!values.department) {
                  errors.department = "*";
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
                  <Form.Group className='mb-3'>
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" onChange={changeHandler} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
                      placeholder="Calculus 1"
                      autoFocus
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
                      placeholder="Teoman Bayoğlu"
                      autoFocus
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
                      placeholder="21232"
                      autofocus
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
                      placeholder="BIM 344"
                      autoFocus
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
                      placeholder="test@test.com"
                      autofocus
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
              )}
            </Formik>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  )
}

export default AdminDisplayTeachers
