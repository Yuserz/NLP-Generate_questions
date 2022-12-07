import { Test, Header, Footer, Navbar } from "components"
import { useLocation } from "react-router-dom"
import { useEffect } from 'react'

export default function TestPage() {
    const location = useLocation()

    useEffect(() => {
        if (!location.state) {
            console.log('empty')
        } 
    }, [location])

    return (
        <div className="grid-container w-screen h-screen bg-slate-50">
            <Header />
            <div className="m-auto flex justify-between">
                <Navbar />
                <div className=" w-screen p-10 bg-amber-200 ">
                    <Test
                        subject={location.state.subject}
                        topic={location.state.topic}
                        context={location.state.context}
                        questions={location.state.data}
                    />
                </div>
            </div>
        </div>
    )
}
