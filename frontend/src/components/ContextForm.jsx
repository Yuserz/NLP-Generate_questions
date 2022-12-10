import React, { useState } from 'react'
import { axiosRequest } from "api"
import { useNavigate } from 'react-router-dom'
import swal from "sweetalert2"

const initialState = {
    context: "",
    topic: "",
    subject: ""
}

export default function ContextForm() {
    const [{ context, topic, subject }, setState] = useState(initialState)

    const url = "/generate"

    const navigate = useNavigate()

    const generate = async () => {
        if(!topic || !subject) {
            swal.fire({
                title: 'Please enter subject and topic!',
                icon: "warning",
              })
              return
        }

        try {
            const datas = { context }
            const response = await axiosRequest.post(url, datas)

            const { status, data } = response

            if (status === 200) {
                navigate('/Test', {state: {data: data.data, context: context, topic:topic, subject:subject}})
            }

        } catch (e){
            const {data} = e.response
            swal.fire({
                title: 'Error when generating questions!',
                text: 'Please remove special symbols or simplify the context first',
                icon: "error",
              }) 
        }
    }

    const onChange = (event) => {
        const { name, value } = event.target
        setState((prevState) => ({ ...prevState, [name]: value }))
    }

    return (
        <div className="flex flex-col m-8 gap-y-10 items-center ">
            <div className=" flex flex-col w-full max-w-[1200px] space-y-5 items-center">
                <div className="flex space-x-4 w-[100%]">
                    <textarea name="subject" value={subject} onChange={(event) => onChange(event)} cols="20" rows="1" placeholder="Subject" className="shadow-inner outline-gray-300 resize-none p-2 rounded-lg"></textarea>
                    <textarea name="topic" value={topic} onChange={(event) => onChange(event)} cols="20" rows="1" placeholder="Topic" className="shadow-inner outline-gray-300 resize-none p-2 rounded-lg"></textarea>
                </div>
                <textarea name="context" onChange={(event) => onChange(event)} value={context} rows="18" className="shadow-inner outline-gray-300 rounded-lg block resize-none p-2.5 w-full h-full text-sm " placeholder="Input your context here..."></textarea>
                <button onClick={generate} className="p-4 bg-white w-fit rounded-lg drop-shadow-md">Generate Question</button>
            </div>
        </div>
    )
}

