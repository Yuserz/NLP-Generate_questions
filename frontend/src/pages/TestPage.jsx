import { Test, Header, Footer, Navbar } from "components"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'

export default function TestPage() {
    const location = useLocation()
    const navigate = useNavigate()
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!location.state) {
            navigate('/404')
        }
        else {
            setLoaded(true)
        }
    }, [location.state, navigate])

    return (
        <div className="grid-container w-screen h-screen bg-slate-50">
            <Header />
            <div className="m-auto flex justify-between">
                <Navbar />
                <div className=" w-screen p-10 bg-amber-200 ">
                    {isLoaded ?
                        <Test
                            subject={location.state.subject}
                            topic={location.state.topic}
                            context={location.state.context}
                            questions={location.state.data}
                            conID={location.state.conID}
                        /> : null
                    }
                </div>
            </div>
        </div>
    )
}
