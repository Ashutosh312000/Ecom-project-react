import { useRef } from "react";
import { Form,Button } from "react-bootstrap";

function ContactUs() {

    const nameRef=useRef()
    const emailRef=useRef()
    const phoneNoRef=useRef()

  async function contactUsHandler(e){

    try{

    
        e.preventDefault();

        const details={
            name:nameRef.current.value,
            email:emailRef.current.value,
            phoenNo:phoneNoRef.current.value
        }

       const response=await fetch('https://react-project-4e57d-default-rtdb.firebaseio.com/contactUs.json',
       {method:'POST',
       body:JSON.stringify(details),
       headers: {
        'Content-Type': 'application/json'
      }
    })

    if(!response.ok){
      throw new Error('Something Went Wrong')
    }
    else{
      alert('We will contact you soon')
    }

  }
  catch(err){
    console.log(err.message)
  }
    }

    return (
        <>
        <div className="d-flex flex-column align-items-center my-5" >
            <h1>Contact Us</h1>
        <Form onSubmit={contactUsHandler}>
            <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control ref={nameRef} className="w-100" type="number" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} className="w-100" type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" >
          <Form.Label>Phone No.</Form.Label>
          <Form.Control ref={phoneNoRef} className="w-100" type="number" placeholder="Enter PhoneNo." />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> 
      </div>
      </>
        
    )
}

export default ContactUs;