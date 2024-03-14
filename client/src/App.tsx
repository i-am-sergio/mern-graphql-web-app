import { Navigate, Route, Routes } from "react-router-dom"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/projects" />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  )
}

export default App