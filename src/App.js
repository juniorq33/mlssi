import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Goals from './components/Goals'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter >
      <Navbar />
        <Routes>
          { <Route path="/" element={<Home/>}>  </Route>}
          { <Route path="/Stats" element={<Stats/>}>  </Route>}
          { <Route path="/Goals" element={<Goals/>}>  </Route>}
        </Routes>
    </BrowserRouter >
  );
}

export default App;
