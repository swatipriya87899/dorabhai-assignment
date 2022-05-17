import React from 'react';
import Form from '../Components/Form';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import User_Details from '../Components/User_Details';

const Users = () => {

  return (
    <div>
        {/* For Header(Navbar) */}
        <Header></Header>

        {/* User Details Page */}
        <User_Details></User_Details>

        {/* Show form for adding user */}
        <Form></Form>
    </div>
  )
}

export default Users