
export default function SignUp() {

  return (
    <div className="flex items-center justify-evenly m-auto pl-5 pr-5 max-w-[1240px] h-screen">
      <div className="w-[50%]"><img src="./images/logo.png" alt="logo" /></div>
      <div className="flex items-center justify-center w-[50%] h-[80%] p-10 bg-amber-200 rounded-xl">
        <div className="flex flex-col max-w-[400px] w-full space-y-5 ml-10 mr-10 items-center ">
          <p className="text-4xl font-medium mb-10">Study Budy</p>
          <input className="rounded-md p-2 w-full shadow-inner bg-white outline-gray-300 max-w-[400px]" placeholder="Email" type="Email" />
          <input className="rounded-md p-2 w-full shadow-inner bg-white outline-gray-300  max-w-[400px]" placeholder="Password" type="password" />
          {/* <div className="flex items-center gap-2 w-full max-w-[400px] p-1">
            <input type="checkbox" id="fname" name="fname" />
            <label for="fname" className="opacity-80">Remember me</label>
          </div> */}
          <button className="bg-white max-w-[400px] w-full rounded-md p-4 shadow-md hover:shadow-xl font-bold text-xl" type="submit">SignUp</button>
          <div className="w-full flex justify-end p-1 opacity-70">
          </div>
        </div>
      </div>

    </div>   
  )
}
