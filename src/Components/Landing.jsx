import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>

<div style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
        <Row className="text-center">
          <Col>
            <h1 style={{ fontSize: '3rem', color: '#343a40', fontWeight: 'bold' }}>Search Books</h1>
            <p style={{ fontSize: '1.25rem', color: '#6c757d' }}>Discover your next great read from our collection.</p>
<Link to={'/home'}>
              <Button variant="primary" size="lg"  style={{ fontSize: '1.25rem', padding: '12px 24px' }}>Start Searching</Button>
  
</Link>          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Landing