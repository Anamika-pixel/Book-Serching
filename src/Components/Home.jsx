import axios from 'axios';
import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function Home() {

        const [holdingId,setHoldingId]=useState()
        console.log(holdingId);
        const [holdingData,setHoldingData]=useState("")
        console.log(holdingData);
        

        const getBooksData=()=>{

            const bookId=Number(holdingId)

            if (bookId >= 1 && bookId <= 10) {
                axios.get(`https://fakerapi.it/api/v2/books?_quantity=10`).then(res=>{

                    console.log(res.data);

                    const books=res.data.data
                    
                    const selectedBook=books.find(book=>book.id===bookId)

                    if (selectedBook) {
                        setHoldingData(selectedBook)
                    } else {
                        alert("Book Not find")
                    }
                }
                    
                )
                
            } else {
                alert("Please Enter ID")
                
            }
        }
        

  return (
    <>
    <div style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
      <Container className="d-flex justify-content-center" style={{ height: '100%' }}>
        <Row className="text-center" style={{ marginTop: '10vh' }}>
          <Col>
            <h1 style={{ fontSize: '3rem', color: '#343a40', fontWeight: 'bold' }}> Search Book</h1>

            <div className="mt-4">
              <input onChange={e=>setHoldingId(e.target.value)}  type="text" placeholder="Enter book ID (1-10)" style={{ width: '300px', padding: '10px', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }} />
              <Button onClick={getBooksData} variant="primary" size="lg" style={{ fontSize: '1.25rem', padding: '10px 20px' }} > Search</Button>
            </div>

            <p style={{ marginTop: '20px', color: '#6c757d', fontSize: '1.125rem' }}>  There are only 10 books. You can enter an ID with 1-10.</p>
          </Col>
        </Row>

      

      {
        holdingData && (
            <Row className="d-flex justify-content-center mt-4">
              <Col xs="auto">
                <Card id='cards'
                  style={{  width: '18rem',  border: '1px solid #ccc',   borderRadius: '10px',  padding: '10px',  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  backgroundColor: '#fff',  margin:'250px 0px 0px -390px'  }}>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                      Title: {holdingData.title}
                    </Card.Title>
                    <h3 style={{ fontSize: '1rem', color: '#555' }}>Author: {holdingData.author}</h3>
                    <h4 style={{ fontSize: '1rem', color: '#555' }}>Publisher: {holdingData.publisher}</h4>
                    <Card.Text style={{ fontSize: '0.9rem', color: '#777' }}>
                      Description: {holdingData.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
        )

        

      }



      </Container>


      
    </div>
    </>
  )
}

export default Home

