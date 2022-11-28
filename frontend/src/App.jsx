import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  Landing,
  NotFound,
} from "pages"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/landing" element={<Landing />}/>
        <Route exact path="/404" element={<NotFound />}/>
      </Routes>
    </Router>
  )
}

export default App
