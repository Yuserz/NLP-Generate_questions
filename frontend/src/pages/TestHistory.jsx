import { useState, useEffect } from 'react'
import { axiosRequest } from 'api'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Navbar, Header } from 'components'
import { Check, X, Star } from 'react-feather'

export default function TestHistory() {
    const [data, setData] = useState([])
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    const url = `/history/test?id=${searchParams.get("id")}`

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const getHistoryData = async () => {
            try {
                const response = await axiosRequest.get(url)
                const { status, data } = response

                if (status === 200) {
                    setData(data.data)
                    setQuestions(data.data.questions)
                    console.log(data.data)
                }
            }
            catch (e) {
                const { status } = e.response
                if (status === 404) {
                    // code when no context is found
                    navigate('/404')
                }
            }
        }

        getHistoryData()
    }, [navigate, url])

    const getLetter = (index) => {
        const letters = ['A', 'B', 'C', 'D']
        return letters[index]
    }

    return (
        <div className="grid-container w-screen h-full bg-slate-50  ">
            <Header />
            <div className="m-auto h-full flex justify-between">
                <Navbar />
                <div className=" w-full p-2 h-full bg-amber-200 ">
                    {data ?
                        <>
                            <div className="flex flex-col m-8 gap-y-10 items-center ">
                                <div className=" flex flex-col w-full space-y-5 items-center">
                                    <div className="flex space-x-4 w-[100%]">
                                        <textarea name="subject" value={data.subject} cols="20" rows="1" placeholder="Subject" className="shadow-inner outline-gray-300 resize-none p-2 rounded-lg"></textarea>
                                        <textarea name="topic" value={data.topic} cols="20" rows="1" placeholder="Topic" className="shadow-inner outline-gray-300 resize-none p-2 rounded-lg"></textarea>
                                    </div>
                                    <textarea name="context" value={data.context} rows="18" className="shadow-inner outline-gray-300 rounded-lg block resize-none p-2.5 w-full h-full text-sm " placeholder="Input your context here..."></textarea>

                                </div>
                            </div>
                            <p className="font-medium mx-8">MULTIPLE CHOICE TEST </p>
                            <div className="flex flex-col  mx-8 mt-2 gap-y-3 h-fit bg-white rounded-lg p-10 ">
                                {questions.map((question, index) => {
                                    return (
                                        <div key={index} className="flex flex-col gap-y-5">
                                            <p className="font-medium">{index + 1}. {question.question}</p>
                                            <div className="flex flex-col ml-2 items-start gap-y-2">
                                                {question.choices.map((choice, i) => {
                                                    return (
                                                        <div key={i} className="w-full flex flex-row">
                                                            <input id={`c-${index}-${i}`}
                                                                type='radio'
                                                                name={index}
                                                                value={choice}
                                                                className="hidden peer"
                                                                disabled
                                                            />

                                                            <label htmlFor={`c-${index}-${i}`}
                                                                className={`rounded border flex flex-row justify-between  items-center w-full
                                                ${question.userAnswer === choice && question.answer === question.userAnswer ? 'bg-green-100' : question.userAnswer === choice ? 'bg-red-100' : ""}
                                                ${question.userAnswer !== choice && question.answer === choice ? 'border-green-300' : ''}
                                                `}
                                                            >

                                                                <div className="flex flex-row gap-x-3">
                                                                    <p className={`bg-gray-100 py-2 px-5 font-medium
                                                    ${question.userAnswer === choice && question.answer === question.userAnswer ? 'bg-green-300' : question.userAnswer === choice ? 'bg-red-300' : ""}
                                                    ${question.answer === choice && question.userAnswer !== choice ? 'bg-green-300' : ''}
                                                    `}
                                                                    >
                                                                        {getLetter(i)}</p>
                                                                    <p className="py-2 ">{choice}</p>
                                                                </div>
                                                                <div className="p-2">
                                                                    {question.userAnswer === choice ?
                                                                        question.answer === question.userAnswer ? <Check className='w-5' /> : <X className='w-5' />
                                                                        :
                                                                        null
                                                                    }
                                                                </div>
                                                            </label>
                                                        </div>
                                                    )
                                                }
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                        : null
                    }
                </div>
            </div>
        </div>

    )
}