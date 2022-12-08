import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  Home,
  Login,
  SignUp,
  NotFound,
  TestPage,
  History
} from "pages"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/404" element={<NotFound />}/>
        <Route exact path="/" element={<Login />}/>
        <Route exact path="/SignUp" element={<SignUp />}/>
        <Route exact path="/Home" element={<Home />}/>
        <Route exact path="/Test" element={<TestPage />}/>
        <Route exact path="/History" element={<History />}/>
      </Routes>
    </Router>
  )
}

export default App
