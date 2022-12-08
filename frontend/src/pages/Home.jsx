import { ContextForm, Header, PublicBody, Navbar } from "components"

export default function Home() {
    return (
    <div className="grid-container w-screen h-screen overflow-hidden bg-slate-50">
        <Header />
        <div className="m-auto h-screen flex justify-between">
            <Navbar />
            <div className=" w-screen p-10 bg-amber-200 ">
                <ContextForm />
            </div>
       </div>
    </div> 
    )
  }
