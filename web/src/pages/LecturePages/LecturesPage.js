import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap'

import LectureCard from '../../components/Cards/LectureCard'
import { fetchLecturesOfStudent } from '../../redux/features/admin/lecturesOfStudentSlice';
import { fetchLecturesOfTeacher } from '../../redux/features/admin/lecturesOfTeacherSlice';

const LecturesPage = ({ user, lectureBg }) => {
  const [id, setId] = useState(() => localStorage.getItem("userId"));
  const data = useSelector((state) => {
    if (state.lecturesOfTeacher.entities.length > 0) {
      return state.lecturesOfTeacher.entities;
    }
    if (state.lecturesOfStudent.entities.length > 0) {
      return state.lecturesOfStudent.entities;
    }
  });

  const dispatch = useDispatch();

  const { isTeacher, isStudent, isAdmin } = user;

  useEffect(() => {
    if(isTeacher === true){
      dispatch(fetchLecturesOfTeacher(id));
    }
    if(isStudent === true){
      dispatch(fetchLecturesOfStudent(id));
    }
  }, [dispatch, id, isStudent, isTeacher]);

  return (
    <div style={{ backgroundColor: `${lectureBg}` }}>
      <Container>
        <Row md={3} lg={3} sm={2} >
          {data?.map((lecture) => {
            return (
              <Col><LectureCard isTeacher={isTeacher} isAdmin={isAdmin} lectureName={lecture.lectureName} lectureId={lecture.lectureId} lectureInfo="Some quick example text to build on the card title and make up the bulk of the card's content." /> </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default LecturesPage