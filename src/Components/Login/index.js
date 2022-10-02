import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'


//pages
import Register from '../Register'
import { Container, InputOne, InputTwo, LableOne, LableTwo } from './LoginElements'
// redirecting an unregistered client to the registration form
const Login = () => {
  return (
    <>
    <Container>
        <LableOne>email</LableOne>
        <InputOne />
        <LableTwo>password</LableTwo>
        <InputTwo />
   
    <BrowserRouter>
    <nav>
        <Link to ="">register</Link>
    </nav>
    </BrowserRouter>
    </Container>
    </>
  )
}

export default Login