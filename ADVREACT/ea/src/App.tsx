import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'

import LandingPage from "./Components/LandingPage/LandingPage";
import Property from "./Components/Property/Property";
import Seller from "./Components/Seller/Seller";
import SellerProperty from "./Components/Seller/SellerProperty";
import Buyer from "./Components/Buyer/Buyer";
import NoPage from "./NoPage";
import Booking from "./Components/Booking/Booking";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}>
            <Route index element={<Property />} />
            <Route path="property" element={<Property />} />
            <Route path="seller" element={<Seller />}></Route>
            <Route path="seller/:sellerId/property" element={<SellerProperty />}></Route>
            <Route path="buyer" element={<Buyer/>}/>
            <Route path="property/:propertyId/booking" element={<Booking/>}/>
            <Route path="*" element={<NoPage/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
