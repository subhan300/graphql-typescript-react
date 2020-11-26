import * as React from 'react';
// import { LaunchProfileQuery } from '../../generated/graphql';


interface Props {
  data:any
  Id:any
}

const SingleMissionInfo : React.FC<Props> = ({data,Id }) => {
    console.log(data,)
  if (!data.launch) {
    return <div>No launch available</div>;
  }

  return (
  <>
  {/* <h1>SPECIFIED MISSION DETAILS</h1>
  <h3>mission name : {data.launch.mission_name}</h3>
  <h3>flight no : {data.launch.flight_number}</h3>
  {data.launch.launch_success ?<div>MISSON SUCCESSFUL</div>:<div>mission unsuccessfull</div>} */}


  <div className="card text-center" id="section2" >
  <h5 className="card-header">SPECIFIED MISSION DETAILS</h5>
  <div className="card-body " >
 
    <h5  className="card-title py-2">{data.launch.mission_name}</h5>
  <h5 className="card-title py-2">flight no : {data.launch.flight_number}</h5>
    <p className="card-text py-3">
      <h4>MISSION DETALS</h4>
      <p className="text-wrap">{data.launch.details}</p>
    {data.launch.launch_success ?<div>MISSON SUCCESSFUL</div>:<div>mission unsuccessfull</div>}
    </p>
    <img src={data.launch.links.flickr_images} className="img-fluid" alt={data.launch.mission_name}></img>
 <div className="py-4">
    <a href="#" className="btn btn-primary ">Go somewhere</a></div>
  </div>
</div>

  </>

  
  );
};

export default SingleMissionInfo ;