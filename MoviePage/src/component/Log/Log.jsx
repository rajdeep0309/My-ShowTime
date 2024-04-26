import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import{ Modal,ModalHeader,ModalBody, Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "antd";
// import React, { useState } from 'react';

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

const Log=()=> {
  const [centredModal, setCentredModal] = useState(false);

  const toggleOpen = () => setCentredModal(!centredModal);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navTo=useNavigate();

  const handleLogin=async()=>{
    
    const data= await fetch('http://localhost:5000/api/auth/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email,
        password
      })
    });
    const response= await data.json();
    
    if(response.success===true){
      localStorage.setItem('auth-token',response.token);
      navTo('/movie');
      
    }
    else{
      alert('Invalid Credentials');
      navTo('/');
    }

    console.log(response);  
  }
  

  return (
    <>
      <MDBBtn onClick={toggleOpen}>LOG IN</MDBBtn>

      <MDBModal tabIndex='-1' open={centredModal} onClose={() => setCentredModal(false)}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
                Log In
              <MDBModalTitle>Log In</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                <Form>
                    <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' onChange={(e)=>{setEmail(e.target.value)}} id='email' name='email' required />
                    </div>
                    <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' onChange={(e)=>{setPassword(e.target.value)}} id='password' name='password' required />
                    </div>
                </Form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn onClick={handleLogin}>Log In</MDBBtn>
              <p text='black'>Don't have an account? <MDBBtn>Sign Up</MDBBtn></p>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default Log;