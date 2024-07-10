import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Landingpage 

function App() {
  

  return (
    <>
    <Router>
      <Routes>
          <Route path="/"element={<Landingpage/>}/>

    
      </Routes>
    <Router/>
    </>
  )
}

