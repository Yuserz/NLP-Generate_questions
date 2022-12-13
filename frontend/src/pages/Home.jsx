import { ContextForm, Header,  Navbar } from "components"

export default function Home() {
    return (
    <div className="grid-container bg-slate-50">
        <Header />
        <div className="flex justify-between">
            <Navbar />
            <div className="w-screen p-10 bg-amber-200 ">
                <ContextForm />
            </div>
       </div>
    </div> 
    )
  }
