import {  Header, Navbar, Table } from "components"
import { useState } from "react"
import { axiosRequest } from "api"

export default function History() {
      const url = "/"

    const showRecord = async () => {
        axiosRequest.get(url)
        .then(data => {
            console.log(data)
        }).catch(error => {
            console.log(error)
        })
    }


    return (
        <div className="grid-container w-screen h-screen bg-slate-50 overflow-hidden">
        <Header />
        <div className="m-auto h-full  flex justify-between">
            <Navbar className="bg-amber-200 font-bold" />
            <div className="flex flex-col gap-5  items-center w-screen p-10 bg-amber-200 ">
                <Table />
                <button onClick={showRecord} className=" shadow-md p-4 bg-white w-fit rounded-lg">Show Record</button>
            </div>
        </div>
    </div> 
    )
}