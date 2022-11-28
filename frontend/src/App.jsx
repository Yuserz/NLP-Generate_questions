import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  Dashboard,
  Landing,
  NotFound,
} from "pages"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/404" element={<NotFound />}/>
        <Route exact path="/landing" element={<Landing />}/>
        <Route exact path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </Router>
  )
}

export default App
