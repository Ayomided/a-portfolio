import Main from "./components/Main"
import Footer from "./components/Footer"
import BriefOne from './pages/BriefOne'
import BriefTwo from "./pages/BriefTwo"
import BriefThree from "./pages/BriefThree"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Home(){
  return (
    <div className="bg-gray-100 h-screen">
      <Main />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/briefOne/*" element={<BriefOne />} />
        <Route exact path="/briefTwo/*" element={<BriefTwo />} />
        <Route exact path="/briefThree/*" element={<BriefThree />} />
      </Routes>
    </Router>
  )
}

export default App