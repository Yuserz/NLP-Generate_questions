import { ContextForm, Header, PublicBody, Navbar } from "components"

export default function Home() {
    return (
    <div className="grid-container w-screen overflow-hidden h-screen bg-slate-50">
        <Header />
        <div className="m-auto h-full flex justify-between">
            <Navbar />
            <div className=" w-screen h-full p-10 bg-amber-200 ">
                <ContextForm />
            </div>
       </div>
    </div> 
    )
  }
