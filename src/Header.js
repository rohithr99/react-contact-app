import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function header() {
    return (
        <div>
            <Navbar className="bg-primary">
                <Container>
                    <Navbar.Brand href="#home" className="text-secondary">
                        <Link to={''} style={{ textDecoration: 'none' }}>
                            <p><i class="fa-solid fa-id-card-clip fa-beat-fade fa-2x me-2"></i>
                                <strong className="fs-4">Contact App</strong> </p>
                        </Link>                  
                   </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default header