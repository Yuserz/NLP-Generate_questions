import { useState } from "react"
import { useNavigate } from "react-router-dom"
import swal from 'sweetalert';

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
}

export default function SignUp() {
  const [
    { firstName, lastName, email, password },
    setState,
  ] = useState(initialState)

  const navigate = useNavigate();
  const [error, setError] = useState()

  const onChange = (event) => {
    const { name, value } = event.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  // const onSubmit = async (event) => {
  //   event.preventDefault()

  //   if (password !== confirm_password) {
  //     setError('Password does not match!')
  //   }

  //   if (error) {
  //     swal.fire({
  //       title: error,   
  //       icon: "error",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         return
  //       }
  //     })
  //   }
  //   else {
  //     try {
  //       const datas = {
  //         firstName,
  //         lastName,
  //         email,
  //         userType,
  //         password,
  //       }

  //       const response = await axiosRequest.post("/api/v1/signup", datas)

  //       const { status } = response

  //       if (status === 201) {
  //         swal.fire({
  //           title: "Successfully Signup",
  //           text: "click ok to continue",
  //           icon: "success",
  //         }).then((result) => {
  //           if (result.isConfirmed) {
  //             navigate('/')
  //           }
  //         })
  //       }
  //     } catch (error) {
  //       const { status } = error.response

  //       if (status === 500) {
  //         swal.fire({
  //           title: "Oops!! Error 500",
  //           text: "server not found",
  //           icon: "warning",
  //         })
  //       }

  //       if (status === 404) {
  //         swal.fire({
  //           title: "Oops!!",
  //           text: "something went wrong, please try again :(",
  //           icon: "warning",
  //         })
  //       }

  //       if (status === 409) {
  //         swal.fire({
  //           title: "Error",
  //           text: "Email already taken!",
  //           icon: "warning",
  //         })
  //       }
  //     }
  //   }
  // }

  return (
    <div className="flex items-center justify-evenly m-auto pl-5 pr-5 max-w-[1240px] h-screen">
      <div className="w-[50%]"><img src="./images/logo.png" alt="logo" /></div>
      <div className="flex items-center justify-center w-[50%] h-[80%] p-10 bg-amber-200 rounded-xl">
        <div className="flex flex-col max-w-[400px] w-full space-y-5 ml-10 mr-10 items-center ">
          <p className="text-4xl font-medium mb-10">Study Budy</p>
          <div className='flex gap-5'>
            <input className="rounded-md p-2 w-full shadow-inner bg-white outline-gray-300 max-w-[400px]" placeholder="First Name" type="Email" />
            <input className="rounded-md p-2 w-full shadow-inner bg-white outline-gray-300  max-w-[400px]" placeholder="Last Name" type="password" />
          </div>
          <input className="rounded-md p-2 w-full shadow-inner bg-white outline-gray-300 max-w-[400px]" placeholder="Email" type="Email" />
          <input className="rounded-md p-2 w-full shadow-inner bg-white outline-gray-300  max-w-[400px]" placeholder="Password" type="password" />
          <button className="bg-white max-w-[400px] w-full rounded-md p-4 shadow-md hover:shadow-xl font-bold text-l" type="submit">Sign Up</button>
          <div className="w-full flex justify-end p-1 opacity-70">
            <p>Already have an account?</p>
          </div>
          <div>
            <button type="submit"></button>
          </div>
        </div>
      </div>
    </div>   
  )
}
