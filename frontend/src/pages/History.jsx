import { Header, Navbar, Table } from "components"
import { useState, useEffect } from "react"
import { axiosRequest } from "api"

export default function History() {
    const url = "/history"

    const [data, setData] = useState(0);
    useEffect(() => {
        const showData = async () => {
            const response = await axiosRequest.get(url)
            const { status, data } = response

            if (status === 200) {
                setData(data.data)
            }
        }
        showData();
    }, []);


    return (
        <div className="grid-container bg-slate-50">
            <Header />
                <div className="m-auto h-full min-h-screen flex justify-between">
                    <Navbar className="bg-amber-200 font-bold" />
                    <div className="flex flex-col gap-5 items-center w-screen bg-amber-200">
                        <div className="outline-none w-full pl-10 pr-10 m-10">
                            <Table data={data} />
                        </div>
                    </div>
                </div>
        </div>
    )
}