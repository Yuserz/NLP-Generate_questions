import React from "react"

export default function Table({ data }) {
    
    return (
        <div className="w-full select-none mx-auto">
            <div className="flex flex-col">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="">
                            <table className="min-w-full divide-y-2 bg-white divide-gray-300 table-fixed">
                                <thead className=" bg-white">
                                    <tr>
                                        <th scope="col" className="py-3 px-6 text-xs font-bold tracking-wider text-left uppercase dark:text-black-500">
                                            Subject
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-bold tracking-wider text-left uppercase dark:text-black-500">
                                            Topic
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-bold tracking-wider text-left uppercase dark:text-black-500">
                                            Score
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-bold tracking-wider text-left uppercase dark:text-black-500">
                                            Date
                                        </th>
                                        <th scope="col" className="p-4">
                                            <span className="sr-only">Preview</span>
                                        </th>
                                    </tr>
                                </thead>
                                {data ?
                                    <tbody className="bg-white">
                                        {data.map((context) => {
                                            return (
                                                <tr key={context.id} className=" border border-gray-100">
                                                    <td className=" py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black opacity-50">{context.subject}</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-black opacity-50">{context.topic}</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black opacity-50">{context.score}</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black opacity-50">{context.dateCreated}</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                        <a href={`/History/Test?id=${context.id}`} className="text-green-600 dark:text-green-500 hover:bg-green-300 bg-green-100  rounded-full pt-1 pb-1 pl-3 pr-3">View</a>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                    : null}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
