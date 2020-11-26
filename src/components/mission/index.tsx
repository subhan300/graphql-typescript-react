import React from "react"
import {useLaunchProfileQuery} from "../../generated/graphql"
import SingleMissionInfo from "./SingleMissionInfo"
interface Props {
  Id:string
}
export const MissionContainer: React.FC<Props>=(Id)=>{
  console.log(Id.Id,"kkk")
    const {data,error,loading}=useLaunchProfileQuery({

        variables:{id:`${Id.Id}`},
    })
    if(loading)
    return(<div>loading</div>)
    console.log(data,"yehprofiledata")
    return(
      <>

<SingleMissionInfo data={data} Id={Id} />

      </>
    )
}