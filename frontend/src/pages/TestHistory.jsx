import { useState, useEffect } from 'react'
import { axiosRequest } from 'api'
import { useSearchParams } from 'react-router-dom'

export default function TestHistory() {
    const [data, setData] = useState([])
    const [searchParams] = useSearchParams()
    const url = `/history/test?id=${searchParams.get("id")}`

    useEffect(() => {
        const getHistoryData = async () => {
            try {
                const response = await axiosRequest.get(url)
                const { status, data } = response

                if (status === 200) {
                    setData(data.data)
                    console.log(data.data)
                }
            }
            catch (e) {
                const {status} = e.response
                if (status===404) {
                    // code when no context is found
                }
            }
        }

        getHistoryData()
    }, [])

    return (
        <div>
            {data ?

                // add code here
                <p>{data.context}</p>

                : null
            }
        </div>
    )
}