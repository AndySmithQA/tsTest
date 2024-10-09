import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'

import LandingPage from "./Components/LandingPage/LandingPage";
import Property from "./Components/Property/Property";
import Seller from "./Components/Seller/Seller";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}>
            <Route index element={<Property />} />
            <Route path="property" element={<Property />} />
            <Route path="seller" element={<Seller />}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
