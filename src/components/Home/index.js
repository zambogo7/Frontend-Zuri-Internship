import React from 'react'
import Header from "../header";
import Links from "../Links";
import Social from "../Social";
import User from '../User'

function index() {
  return (
    <div>
      <Header/>
      <User/>
      <Links/>
      <Social/>
    </div>
  )
}

export default index