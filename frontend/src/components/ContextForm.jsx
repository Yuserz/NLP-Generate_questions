import React, { useState } from 'react'
import { axiosRequest } from "api"

const initialState = {
    context: "",
    topic: "",
    subject: ""
}

export default function ContextForm() {
    const [questions, setQuestions] = useState([])
    const [{ context, topic, subject }, setState] = useState(initialState)

    const url = "/generate"

    const generate = async () => {
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
    
    const getLetter = (index) => {
        const letters = ['A', 'B', 'C', 'D']
        return letters[index]
    }

    return (
        <div className="flex flex-col gap-y-10">
            <div className=" flex flex-col space-y-5 items-center">
                <div className="flex space-x-4 w-[100%]">
                    <textarea name="course" value={subject} onChange={(event) => onChange(event)} cols="20" rows="1" placeholder="Subject" className="outline-none  resize-none p-2 rounded-lg"></textarea>
                    <textarea name="subject" value={topic} onChange={(event) => onChange(event)} cols="20" rows="1" placeholder="Topic" className="outline-none resize-none p-2 rounded-lg"></textarea>
                </div>
                <textarea name="context" onChange={(event) => onChange(event)} value={context} rows="18" className="outline-none rounded-lg block resize-none p-2.5 w-full  text-sm " placeholder="Input your context here..."></textarea>
                <button onClick={generate} className="p-4 bg-white w-fit rounded-lg">Generate Question</button>
            </div>
            <div className="flex flex-col gap-y-3 w-fit h-fit">
                {questions ? questions.map((question, index) => {
                    return (
                        <div key={index} className="flex flex-col gap-y-1">
                            <p>Question: {question.question}</p>
                            
                            <p>Multiple Choice:</p>
                            <div className="flex flex-col ml-2">
                                
                                {question.choices.map((choice, index) => {
                                    return <p key={index}>{getLetter(index)}. {choice}</p>
                                })}
                            </div>

                            <p>Correct Answer: {question.answer}</p>
                        </div>
                    )
                }) : null}
            </div>

        </div>
    )
}

