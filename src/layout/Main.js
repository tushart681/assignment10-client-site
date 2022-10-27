import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Home from '../pages/home/Home';
import Fotter from '../pages/shared/footer/Fotter';
import Header from '../pages/shared/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
        <Container>
            <Row>
                <Col>
                    <Outlet>
                        <Home></Home>
                    </Outlet>
                </Col>
            </Row>
        </Container>
        <Fotter></Fotter>
        </div>
    );
};

export default Main;