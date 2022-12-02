import { ContextForm, Header, Footer, Navbar } from "components"

export default function Home() {
    return (
    <div className="grid-container w-screen h-screen bg-slate-50">
        <Header />
        <div className="m-auto flex justify-between">
            <Navbar />
            <div className=" w-screen p-10 bg-amber-200 ">
                <ContextForm />
            </div>
        </div>
    </div> 
    )
  }
  