import React from 'react'
import LectureCard from '../../components/Cards/LectureCard'
import { Container, Row, Col } from 'react-bootstrap'

const LecturesPage = ({ isTeacher }) => {
  return (
    <div>
      <Container>
        <Row md={3} lg={3} sm={2} >
          <Col><LectureCard isTeacher={isTeacher} lectureName="Lecture Name" lectureInfo="Some quick example text to build on the card title and make up the bulk of the card's content." /> </Col>
          <Col><LectureCard lectureName="Lecture Name" lectureInfo="Some quick example text to build on the card title and make up the bulk of the card's content." /> </Col>
          <Col><LectureCard lectureName="Lecture Name" lectureInfo="Some quick example text to build on the card title and make up the bulk of the card's content." /> </Col>
          <Col><LectureCard lectureName="Lecture Name" lectureInfo="Some quick example text to build on the card title and make up the bulk of the card's content." /> </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LecturesPage