import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../../context/authprovider/AuthProvider';
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';


const Header = () => {
    const [dark, setDark] = useState(false)
    const { user, logOut } = useContext(authContext)
    const handleLogOut = () => {
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="">
            <Navbar bg="">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="/public/42fd3825815139.5634b2e60ab82.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <Navbar.Brand href="#home">CSE-Learn</Navbar.Brand>
                <Navbar.Brand><Link to={'/'}>Home</Link></Navbar.Brand>
                <Navbar.Brand><Link to={'/category'}>Course</Link></Navbar.Brand>
                <Navbar.Brand><Link to={'/blogs'}>Blogs</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link >Source</Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">Likes</Nav.Link>
                    </Nav>
                        {
                            dark ?
                            <Button onClick={() => setDark(!dark)} variant="dark">Dark</Button>
                            :
                            <Button onClick={() => setDark(!dark)} variant="light">Light</Button>
                        }
                    {
                        user?.uid ?
                            <button onClick={handleLogOut}>Log Out</button>
                            :
                            <>
                                <Link to={'/form/login'}>Login</Link>
                                <Link to={'/form/register'}>Register</Link>
                            </>
                    }
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ?
                                    <OverlayTrigger
                                        placement='bottom'
                                        overlay={
                                            <Tooltip id={`tooltip-${'bottom'}`}>
                                                <strong>{user?.displayName}</strong>
                                            </Tooltip>
                                        }
                                    >
                                        <Image style={{ height: '30px' }} roundedCircle src={user.photoURL}></Image>
                                    </OverlayTrigger>
                                    :
                                    <FaUser />
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;