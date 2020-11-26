// import React from 'react'
// import {LaunchProfileQuery} from "../../generated/graphql"

// interface Props{
//     data:any
// }
// const MissionInfoList:React.FC<Props>=({data})=>{
//     console.log(data.launch.mission_name,"data arha g")
//     const l:any=[]
//     l.push(data)
//   console.log("llll",l[0].launch.mission_name,l)

//     return (
//         <div>
//        <h1>MISSION LISTS </h1>
//        <ul>
//        {
    
          
//            l.launch?.map((val:any)=>{
//             console.log("ldatal :",l,"name : ",l.mission_name )
//             return(<div>
 
             
//             <li>{val?.mission_name}</li>
                
//             </div>)
//         })
      
//        }
//        </ul>
      

            
//         </div>
//     )
// }


// export default MissionInfoList
import * as React from 'react';
import { LaunchListQuery } from '../../generated/graphql';
import "./st.css"


interface Props {
  data:any
  Id:any
}


const  MissionInfoList: React.FC<Props> = ({ data,Id }) =>{
  
    console.log(data.launches)
    return(
    
 
        <div className="text-center py-4" >
        
          <ol className="list-group text-center" style={{overflowY:"auto",height:"250px"}} id="olh">
     <li   className="list-group-item list-group-item-action">    <h3 style={{color:"purple"}}>ALL MISSION OF SPACEX</h3></li>
            {!!data.launches &&
              data.launches.map(
                (launch:any) =>
                  !!launch && (
                    <li   onClick={()=>{Id[1](`${launch.flight_number}`)}} className="list-group-item list-group-item-action">
                      {launch.mission_name} 
          ({launch.launch_year}
          {/* {<button 
          onClick={()=>{Id[1](`${launch.flight_number}`)}}>{launch.mission_name} 
          ({launch.launch_year}</button>}
                  ) */}




                    </li>
                  ),
              )}
          </ol>


         
        </div>
      )
}




export default  MissionInfoList;