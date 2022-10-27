import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {



  return (
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={course.image_url} />
        <Card.Body>
          <Card.Title>Title: {course.title}</Card.Title>
          <Card.Text>
            Details: {course.details}
          </Card.Text>
          <Link to={`/corse-details/${course.category_id}`}>
            <Button variant="primary">Get Premium</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Course;