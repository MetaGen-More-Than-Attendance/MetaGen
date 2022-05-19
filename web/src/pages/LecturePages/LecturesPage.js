import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap'

import LectureCard from '../../components/Cards/LectureCard'
import { fetchLecturesOfStudent } from '../../redux/features/admin/lecturesOfStudentSlice';
import { fetchLecturesOfTeacher } from '../../redux/features/admin/lecturesOfTeacherSlice';

const LecturesPage = ({ isTeacher, isAdmin, isStudent, lectureBg }) => {
  const [data, setData] = useState([]);
  const lecturesOfStudent = useSelector((state) => state.lecturesOfStudent.entities);
  const lecturesOfTeacher = useSelector((state) => state.lecturesOfTeacher.entities);

  const dispatch = useDispatch();

  const id = localStorage.getItem("userId")

   useEffect(() => {
    if (isTeacher === true && (isStudent && isAdmin) !== true) {
      dispatch(fetchLecturesOfTeacher(id));
      setData(lecturesOfTeacher);
    }
    else if (isStudent === true && (isTeacher && isAdmin) !== true) {
      dispatch(fetchLecturesOfStudent(id));
      setData(lecturesOfStudent);
    }
    else {
      return null;
    }
  }, [dispatch, id, isAdmin, isStudent, isTeacher, lecturesOfStudent, lecturesOfTeacher]);

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