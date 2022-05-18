import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap'

import LectureCard from '../../components/Cards/LectureCard'
import { fetchLecturesOfStudent } from '../../redux/features/admin/lecturesOfStudentSlice';
import { fetchLecturesOfTeacher } from '../../redux/features/admin/lecturesOfTeacherSlice';

const LecturesPage = ({ isTeacher, lectureBg }) => {
  const lecturesOfStudent = useSelector((state) => state.lecturesOfStudent.entities);
  const lecturesOfTeacher = useSelector((state) => state.lecturesOfTeacher.entities);

  const dispatch = useDispatch();

  const id = localStorage.getItem("userId")

  useEffect(() => {
    dispatch(fetchLecturesOfStudent(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchLecturesOfTeacher(id));
  }, [dispatch, id]);


  return (
    <div style={{ backgroundColor: `${lectureBg}` }}>
      <Container>
        <Row md={3} lg={3} sm={2} >
          {lecturesOfStudent?.map((lecture) => {
            return (
              <Col><LectureCard isTeacher={isTeacher} lectureName={lecture.lectureName} lectureInfo="Some quick example text to build on the card title and make up the bulk of the card's content." /> </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default LecturesPage