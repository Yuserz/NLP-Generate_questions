import React, { useState } from 'react'
import { axiosRequest } from "api"

const initialState = {
    context: "",
    course: "",
    subject: ""
  }

export default function ContextForm() {
    const [questions, setQuestions] = useState([])
    const [{context, course, subject}, setState] = useState(initialState)

    const url = "/generate"

    const generate = async() => {
        try {
            const datas = { context }
            const response = await axiosRequest.post(url, datas)
            
            const { status, data } = response

            if (status === 200) {
                setQuestions(data.data)
                console.log(data.data)
            }
            
        } catch {

        }
    }

    const onChange = (event) => {
        const { name, value } = event.target
        setState((prevState) => ({ ...prevState, [name]: value }))
    }

    return (
        <div className=" flex flex-col space-y-5 items-center">
            <div className="flex space-x-4 w-[100%]">
                <textarea name="course" value={course} onChange={(event) => onChange(event)} cols="20" rows="1" placeholder="Course" className="outline-none  resize-none p-2 rounded-lg"></textarea>
                <textarea name="subject" value={subject} onChange={(event) => onChange(event)} cols="20" rows="1" placeholder="Subject" className="outline-none resize-none p-2 rounded-lg"></textarea>
            </div>
            <textarea name="context" onChange={(event) => onChange(event)} value={context} rows="18" className="outline-none rounded-lg block resize-none p-2.5 w-full  text-sm " placeholder="Input your context here..."></textarea>
            <button onClick={generate} className="p-4 bg-white w-fit rounded-lg">Generate Question</button>
        </div>
    )
}

