import {BrowserRouter, Routes, Route} from "react-router-dom";
import Hub from './views/Hub';
import Header from "./components/Header";

function App() {

  return (
    <div className="meow">
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/Pointtracker/*" element={<Hub/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
