import { ContextArea, Header } from "components"

export default function Dashboard() {
    return (
      <div className="container justify-between self-center flex w-screen ">
        <Header />
        <div className="h-screen w-screen bg-amber-200 rounded"><p></p></div>
        <div className="h-screen w-screen bg-amber-200 rounded">
            <ContextArea />
        </div>
      </div>   
    )
  }
  