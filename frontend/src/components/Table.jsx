import React from "react"

export default function Table() {
  return (
        <div className="max-w-2xl mx-auto">
            <div className="flex flex-col">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <div className="inline-block min-w-full align-middle">
                    <div className="">
                        <table className="min-w-full divide-y divide-gray-200 table-fixed bg-amber-200">
                            <thead className=" bg-white">
                                <tr>
                                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase dark:text-black-500">
                                        Subject
                                    </th>
                                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase dark:text-black-500">
                                        Topic
                                    </th>
                                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase dark:text-black-500">
                                        Score
                                    </th>
                                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase dark:text-black-500">
                                        Date
                                    </th>
                                    <th scope="col" className="p-4">
                                        <span className="sr-only">Preview</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr className="">
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black opacity-50">CS101</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-black opacity-50">Computer</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black opacity-50">20/20</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black opacity-50">JAN/21/2022</td>
                                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                        <a href="#" className="text-green-600 dark:text-green-500 hover:bg-green-300 bg-green-100  rounded-full pt-1 pb-1 pl-3 pr-3">View</a>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black opacity-50">CS101</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-black opacity-50">Computer</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black opacity-50">20/20</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black opacity-50">JAN/21/2022</td>
                                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                        <a href="#" className="text-green-600 dark:text-green-500 hover:bg-green-300 bg-green-100  rounded-full pt-1 pb-1 pl-3 pr-3">View</a>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black opacity-50">CS101</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-black opacity-50">Computer</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black opacity-50">20/20</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black opacity-50">JAN/21/2022</td>
                                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                        <a href="#" className="text-green-600 dark:text-green-500 hover:bg-green-300 bg-green-100  rounded-full pt-1 pb-1 pl-3 pr-3">View</a>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
</div>
  )
}
