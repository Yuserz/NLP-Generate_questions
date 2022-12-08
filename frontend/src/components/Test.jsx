import { useState } from 'react'
import { Check, X, Star } from 'react-feather'

export default function Test({ subject, topic, context, questions }) {
    const [selected, setSelected] = useState([])
    const [correct, setCorrect] = useState([])
    const [score, setScore] = useState(0)
    const [isSubmit, setSubmit] = useState(false)
    const [showContext, setShowContext] = useState(false)

    const [showModal, setModal] = useState(false)

    const getLetter = (index) => {
        const letters = ['A', 'B', 'C', 'D']
        return letters[index]
    }

    const submit = () => {
        if (Object.keys(selected).length === questions.length) {
            setSubmit(prevState => !prevState)

            let totalScore = 0
            Object.keys(correct).forEach((key) => {
                if (correct[key]) totalScore += 1
            })

            setScore(totalScore)
            setModal(true)
            console.log()
        }
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

    const confirm = () => {
        setModal(false)
    }

    return (
        <div className="flex flex-col gap-y-5 items-center">
            {/* {showContext ?
                <div className="bg-white p-5 rounded-lg">
                    {context}
                </div>
                : null
            }
            <button className="rounded border border-black w-40 p-3" onClick={show}>{showContext ? 'Hide' : 'Show'} Context</button> */}

            {showModal ?
                <div className="w-full h-full bg-black/25 fixed top-0 left-0 right-0 z-50 flex flex-col justify-center items-center">
                    <div className="flex flex-col bg-white rounded text-center">
                        <div className="flex justify-end px-2 pt-2">
                            <button onClick={confirm}>
                                <X className="text-gray-400 w-5" />
                            </button>
                        </div>
                        <div className="p-10">
                            <div className="flex flex-row gap-x-2 text-amber-300">
                                {Object.keys(correct).map((key, index) => {
                                    if (index < score) { return <Star size={40} fill="#FCD34D" /> }
                                    else { return <Star size={40} /> }
                                })}
                            </div>
                            <p className="text-base mt-3">You've got a</p>
                            <p className="text-lg font-bold">{score} out of {Object.keys(questions).length}</p>
                        </div>
                    </div>
                </div>
                : null
            }

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
                                                ${!correct[index] && question.answer === choice && isSubmit ? 'border-green-300' : ''}
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