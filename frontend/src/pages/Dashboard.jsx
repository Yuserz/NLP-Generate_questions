import { ContextArea, Header, Footer } from "components"

export default function Dashboard() {
    return (
    <div className="grid-container w-screen h-screen">
        <div className="item1"><Header /></div>
        <div className="item2">Menu</div>
        <div className="item3"><ContextArea /></div>  
        <div className="item5"><Footer/></div>
    </div> 
    )
  }
  