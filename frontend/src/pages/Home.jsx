import { ContextForm, Header,  Navbar } from "components"

export default function Home() {
    return (
    <div className="grid-container h-screen  bg-slate-50">
        <Header />
        <div className="h-full flex justify-between">
            <Navbar />
            <div className="w-full bg-amber-200 ">
                <ContextForm />
            </div>
       </div>
    </div> 
    )
  }
