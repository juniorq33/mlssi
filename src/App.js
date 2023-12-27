import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Goals from './components/Goals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter >
      <Navbar />
        <Routes>
          { <Route path="/Stats" element={<Stats/>}>  </Route>}
          { <Route path="/Goals" element={<Goals/>}>  </Route>}
        </Routes>
    </BrowserRouter >
  );
}

export default App;
