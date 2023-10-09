import {BrowserRouter, Routes, Route} from "react-router-dom";
import Hub from './views/Hub';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hub/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
