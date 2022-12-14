import { ContextForm, Header, Navbar } from "components"
import {useEffect} from 'react'
import { axiosRequest } from "api"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    useEffect(() => {
        const checkLogin = async () => {
            const response = await axiosRequest.get('/login')
            const { status, data } = response
            if (status === 200) {
                if (!data.data) {
                    navigate('/')
                }
            }
        }
        checkLogin()
    }, [])

    return (
        <div className="grid-container h-screen  bg-slate-50">
            <Header />
            <div className="h-full flex justify-between">
                <Navbar />
                <div className="w-full bg-amber-200 ">
                    <ContextForm />
                </div>
            </div>
        </div>
    )
}
