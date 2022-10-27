import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import LeftSide from '../shared/leftsidenav/LeftSide';

const Category = () => {
    const course_data = useLoaderData()
    console.log(course_data)
    return (
        <div className='d-flex'>
            <Container>
                <Row>
                    <Col lg= {2}>
                        <LeftSide></LeftSide>
                    </Col>
                    <Col lg = {10}>
                        <Container>
                        <Row>
                            {
                                course_data.map(course => <Course key={course._id} course={course}></Course>)
                            }
                        </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Category;