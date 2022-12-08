import { ContextForm, Header,  Navbar } from "components"

export default function Home() {
    return (
    <div className="grid-container w-screen h-screen bg-slate-50  ">
        <Header />
        <div className="m-auto h-full flex justify-between">
            <Navbar />
            <div className=" w-full p-2 h-full bg-amber-200 ">
                <ContextForm />
            </div>
       </div>
    </div> 
    )
  }
