import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img width={100} height={35} src="/header.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navs">
                            {/* <Nav.Link href="home#Bikes" className='text-white'>Bikes</Nav.Link> */}
                            {/* <Nav.Link href="home#vehicles" className='text-white'>Vehicles</Nav.Link> */}
                            {/* <Nav.Link as={Link} to="/checkout" className='text-white'>Checkout</Nav.Link> */}
                            <Nav.Link as={Link} to="blogs" className='text-white'><div className='headerNav'>Blogs</div></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about" className='text-white'><div className='headerNav'><small>About</small></div></Nav.Link>
                            {
                                user ?
                                    <div className='d-flex align-items-baseline justify-content-center'>
                                        <Nav.Link as={Link} to="/bikes" className='text-white'><div className='headerNav'><small>See All</small></div></Nav.Link>
                                        <Nav.Link as={Link} to="/myItems" className='text-white'><div className='headerNav'><small>My Items</small></div></Nav.Link>
                                        <Nav.Link as={Link} to="/add" className='text-white'><div className='headerNav'><small>Add Bike</small></div></Nav.Link>
                                        <Nav.Link as={Link} to="/manage" className='text-white'><div className='headerNav'><small>Manage Bikes</small></div></Nav.Link>
                                        <span className='rounded bg-light py-1 px-2'>{user?.displayName}</span>
                                        <button className='btn btn-link bg-white mx-2 text-decoration-none text-danger' onClick={handleSignOut}>sign out</button>
                                    </div>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;