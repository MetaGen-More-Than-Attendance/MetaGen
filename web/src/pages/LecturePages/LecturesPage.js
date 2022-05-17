import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap'

import LectureCard from '../../components/Cards/LectureCard'
import { fetchLecturesOfStudent } from '../../redux/features/admin/lecturesOfStudentSlice';

const LecturesPage = ({ isTeacher, lectureBg }) => {
  const lecturesOfStudent = useSelector((state) => state.lecturesOfStudent.entities);
  const dispatch = useDispatch();

  const id = localStorage.getItem("userId")

  useEffect(() => {
    dispatch(fetchLecturesOfStudent(id));
  }, [dispatch, id]);

  console.log(lecturesOfStudent);

  return (
    <div style={{ backgroundColor: `${lectureBg}` }}>
      <Container>
        <Row md={3} lg={3} sm={2} >
          {lecturesOfStudent?.map((lecture) => {
            return (
              <Col><LectureCard isTeacher={isTeacher} lectureName={lecture.lectureName} lectureInfo="Some quick example text to build on the card title and make up the bulk of the card's content." /> </Col>
            )
          })}
{/* 
          <Col><LectureCard lectureName="Lecture Name" lectureInfo="Some quick example text to build on the card title and make up the bulk of the card's content." /> </Col>
          <Col><LectureCard lectureName="Lecture Name" lectureInfo="Some quick example text to build on the card title and make up the bulk of the card's content." /> </Col>
          <Col><LectureCard lectureName="Lecture Name" lectureInfo="Some quick example text to build on the card title and make up the bulk of the card's content." /> </Col> */}
        </Row>
      </Container>
    </div>
  )
}

export default LecturesPage