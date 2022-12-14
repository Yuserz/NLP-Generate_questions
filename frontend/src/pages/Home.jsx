import { ContextForm, Header,  Navbar } from "components"

export default function Home() {
    return (
    <div className="grid-container overflow-hidden bg-slate-50">
        <Header />
        <div className="h-full flex justify-between">
            <Navbar />
            <div className="w-full p-10 bg-amber-200 ">
                <ContextForm />
            </div>
       </div>
    </div> 
    )
  }
