import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyWork from './Components/MyWork'
import WhoAmI from './Components/WhoAmI'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WhoAmI />} />
        <Route path="/who-i-am" element={<WhoAmI />} />
        <Route path="/my-work" element={<MyWork />} />
        {/* <Route path="/curriculum" element={<Curriculum />} /> */}
        <Route path="*" element={<WhoAmI />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
