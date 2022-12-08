import { ContextForm, Header, Navbar, Table } from "components"

export default function Home() {
    return (
    <div className="grid-container w-screen h-screen bg-slate-50 overflow-hidden">
        <Header />
        <div className="m-auto h-full  flex justify-between">
            <Navbar className="bg-amber-200 font-bold" />
            <div className=" w-screen p-10 bg-amber-200 ">
                <Table />
            </div>
        </div>
    </div> 
    )
  }
  