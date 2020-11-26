import React,{useState} from 'react';
import {MissionInfoContainer} from "./components/missionInfo/index"
import {MissionContainer} from "./components/mission/index";
import Header from "./components/HEADER/Header"

function App() {
  const Id=useState("25");

  return (
    <div className="App ">
      <Header />


      <div className="py-4">
       <div className="row py-4">
         <div className="col-12 col-sm-5 py-4">
            
   <a href="#section2">  <div id="section1"> <MissionInfoContainer Id={Id}  /></div></a>


         </div>
         
         <div className="col-12 col-sm-7 py-4">
           <div className="py-4" id="section2" >  <MissionContainer Id={Id[0]}  /></div>
       
    
      
               </div>
       </div>
      </div>

    
    </div>
  );
}

export default App;
