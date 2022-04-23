
import './App.css';
import React from "react";

import Header from "./MyComponents/Header";
import Contents from "./MyComponents/Contents";
import Footer from "./MyComponents/Footer";
import CancerForm from "./MyComponents/CancerForm";
import DiabetesForm from "./MyComponents/DiabetesForm";
import HeartForm from "./MyComponents/HeartForm";
import LiverForm from "./MyComponents/LiverForm";
import KidneyForm from "./MyComponents/KidneyForm";
import MalariaForm from "./MyComponents/MalariaForm";
import PneumoniaForm from "./MyComponents/PneumoniaForm";
// import About from "./MyComponents/About";
import {BrowserRouter,Routes,Route} from 'react-router-dom' ;

function App() {
  return (
    <>

    
    <BrowserRouter>
    <Header title="HealthCare App"/>
    
    <Routes>
      <Route  path='/' element={<Contents/>}>
      </Route>
      <Route  path='Contents/' element={<Contents/>}> 
      </Route>
      
      {/* <Route  path='About/' element={<About/>}> 
      </Route> */}
      <Route  path='CancerForm/' element={<CancerForm/>}>
      </Route>
      <Route  path='DiabetesForm/' element={<DiabetesForm/>}>
      </Route>
      <Route  path='HeartForm/' element={<HeartForm/>}>
      </Route>
      <Route  path='LiverForm/' element={<LiverForm/>}>
      </Route>
      <Route  path='KidneyForm/' element={<KidneyForm/>}>
      </Route>
      <Route  path='MalariaForm/' element={<MalariaForm/>}>
      </Route>
      <Route  path='PneumoniaForm/' element={<PneumoniaForm/>}>
      </Route>
    </Routes>
    
   


    </BrowserRouter>
    
    <Footer/>

    
    </>
   
  );
}

export default App;
