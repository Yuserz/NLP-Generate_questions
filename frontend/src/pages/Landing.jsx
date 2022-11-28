import { useState } from "react"
import { PublicLayout, Navbar } from "components"
// import { Link, useNavigate } from "react-router-dom"
// import { axiosRequest } from "api"
// import swal from "sweetalert2"


export default function Landing() {


  return (
    <div class="container justify-between self-center flex w-screen ">
      {/* <div class="h-screen flex w-screen justify-center">
        <PublicLayout svgImage="images/logo.png" />
      </div> */}
      <div class="h-screen w-screen bg-amber-200 rounded"><Navbar /></div>
    </div>   
  )
}
