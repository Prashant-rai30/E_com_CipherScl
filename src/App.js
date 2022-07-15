
import React ,{useState}from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SingleProductPage from "./SingleProduct/SingleProduct"; 
import ProductSection from "./components/ProductSection/ProductSection";
import CateogrySectionelec from "./components/CateogrySection/elec/CateogrySectionelec";
import Jewel from "./components/CateogrySection/Jewellery/Jewel";
import Men from "./components/CateogrySection/men/Men"
import Women from "./components/CateogrySection/women/Women"

function App() {
  // const [productCatName, setProductCatName] = useState("")
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductSection />} />

          <Route path="/electronics" element={<CateogrySectionelec  />} />
          <Route path="/jewellery" element={<Jewel  />} />
          <Route path="/mens-clothing" element={<Men  />} />
          <Route path="/womens-clothing" element={<Women  />} />
          {/* <Route path="/electronics/:id" element={<SingleProductPage />}  /> */}
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
