import { useState } from 'react'
import { Check, X } from 'react-feather'

export default function Test({ context, questions }) {
    const [selected, setSelected] = useState([])
    const [correct, setCorrect] = useState([])
    const [isSubmit, setSubmit] = useState(false)
    const [showContext, setShowContext] = useState(false)

    const getLetter = (index) => {
        const letters = ['A', 'B', 'C', 'D']
        return letters[index]
    }

    const submit = () => {
        if (Object.keys(selected).length === questions.length)
            setSubmit(prevState => !prevState)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setSelected((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleCorrect = (event, answer, choice) => {
        const { name } = event.target
        setCorrect((prevState) => ({ ...prevState, [name]: answer === choice ? true : false }))
    }

    const show = () => {
        setShowContext(prevState => !prevState)
    }

    return (
        <div className="flex flex-col gap-y-5 items-center">
            {showContext ?
                <div className="bg-white p-5 rounded-lg">
                    {context}
                </div>
                : null
            }
            <button className="rounded border border-black w-40 p-3" onClick={show}>{showContext ? 'Hide' : 'Show'} Context</button>
            <div className="flex flex-col gap-y-3 w-fit h-fit bg-white rounded-lg p-10">
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
                                                onChange={e => { handleChange(e); handleCorrect(e, question.answer, choice) }}
                                                disabled={isSubmit}
                                            />

                                            <label for={`c-${index}-${i}`}
                                                className={`rounded border flex flex-row justify-between  items-center w-full
                                                ${selected[index] === choice && !isSubmit ? 'bg-blue-100' : ""}
                                                ${correct[index] && selected[index] === choice && isSubmit ? 'bg-green-100' : ''}
                                                ${!correct[index] && selected[index] === choice && isSubmit ? 'bg-red-100' : ''}
                                                ${!correct[index] && question.answer === choice && isSubmit ? 'bg-green-100' : ''}
                                                `}
                                            >
                                                <div className="flex flex-row gap-x-3">
                                                    <p className={`bg-gray-100 py-2 px-5 font-medium
                                                    ${selected[index] === choice && !isSubmit ? 'bg-blue-300' : ""}
                                                    ${correct[index] && selected[index] === choice && isSubmit ? 'bg-green-300' : ''}
                                                    ${!correct[index] && selected[index] === choice && isSubmit ? 'bg-red-300' : ''}
                                                    ${!correct[index] && question.answer === choice && isSubmit ? 'bg-green-300' : ''}
                                                    `}
                                                    >
                                                        {getLetter(i)}</p>
                                                    <p className="py-2 ">{choice}</p>
                                                </div>
                                                <div className="p-2">
                                                    {isSubmit && selected[index] === choice ?
                                                        correct[index] ? <Check className='w-5' /> : <X className='w-5' />
                                                        :
                                                        null
                                                    }
                                                </div>
                                            </label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            <button className="rounded border border-black w-40 p-3" onClick={submit}>SUBMIT ANSWER</button>
        </div>
    )
}