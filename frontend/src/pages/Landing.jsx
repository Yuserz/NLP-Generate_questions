// import { useState } from "react"
import {  Navbar } from "components"
// import { Link, useNavigate } from "react-router-dom"
// import { axiosRequest } from "api"
// import swal from "sweetalert2"


export default function Landing() {

  return (
    <div className="container justify-between self-center flex w-screen ">
      <div className="h-screen w-screen bg-amber-200 rounded"><p>hello</p></div>
      <div className="h-screen w-screen bg-amber-200 rounded"><Navbar /></div>
    </div>   
  )
}
