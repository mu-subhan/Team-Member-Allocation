// import React from 'react'
// import { useState } from 'react'
// import Employees from './Employees'

// const GroupedTeamMembers = ({employees,selectedTeam,setTeam}) => {

//   const [groupedEmployees,setGroupedData]=useState(groupTeamMembers());

// function groupTeamMembers(){

//     var teams=[];

// var teamAMembers = employees.filter((employee)=>employee.teamName ==='TeamA');
// var teamA = {team:'TeamA',members:teamAMembers,collapsed:selectedTeam=== 'TeamA' ? false:true}
// teams.push(teamA);

    
//     var teamBMembers = employees.filter((employee)=>employee.teamName ==='TeamB');
//     var teamB = {team:'TeamB',members:teamBMembers,collapsed:selectedTeam=== 'TeamB' ? false:true}
//     teams.push(teamB);y

    
//     var teamCMembers = employees.filter((employee)=>employee.teamName ==='TeamC');
//     var teamC = {team:'TeamC',members:teamCMembers,collapsed:selectedTeam=== 'TeamC' ? false:true}
//     teams.push(teamC);

    
//     var teamDMembers = employees.filter((employee)=>employee.teamName ==='TeamD');
//     var teamD = {team:'TeamD',members:teamDMembers,collapsed:selectedTeam=== 'TeamD' ? false:true}
//     teams.push(teamD);

//     return teams;

// }  

// function handleTeamClick(event){
//     var transformedGroupData = groupedEmployees.map((groupedData)=>
// groupedData.team===event.currentTarget.id
//     ?{...groupedData,collapsed:!groupedData.collapsed}
// :groupedData);

// setGroupedData(transformedGroupData);
// setTeam(event.currentTarget.id);
// }
  
//     return (

// <main className='container'>
// {
//     groupedEmployees.map((item)=>{
//    return(
//     <div key={item.team} className = 'card mt-2' style 
// ={{cursor:'pointer'}}>
//       <h4 id={item.team} className='card-header 
// text-secondary bg-white' onClick={handleTeamClick}>
//         Team Name: {item.team}
//       </h4>
//      <div id={'collapse_' + item.team}
//      className={item.collapsed === true ? "collapse" : ""}>
//       <hr/>
//       {item.members.map((member) =>{
//             return(
//                 <div className='mt-2'>
//                     <h5 className='card-title mt-2'>
                        // <span className='text-dark'>Full Name: {member.fullName}</span>
//                     </h5>
//                     <p>Designation: {member.designation}</p>
//                 </div>
//             )
//         })
//       }  
// </div>        
//       </div>
//     )
//     })


// }
//     </main>
//   )
// }

// export default GroupedTeamMembers






// import { useState } from "react";


// const GroupedTeamMembers = ({employees,selectedTeam,setTeam})=>{
  
// const [groupedEmployees,setGroupedData] = useState(groupTeamMembers());

// function groupTeamMembers()
// {
//    var teams = [];

//    var teamAMembers = employees .filter ((employee)=>employee.teamName === 'TeamA');
//    var teamA = {team:'TeamA' ,members:teamAMembers,collapsed:selectedTeam === 'TeamA' ? false:true}
//    teams.push(teamA);

//    var teamBMembers = employees .filter ((employee)=>employee.teamName === 'TeamB');
//    var teamB = {team:'TeamB' ,members:teamBMembers,collapsed:selectedTeam === 'TeamB' ? false:true}
//    teams.push(teamB);

//    var teamCMembers = employees .filter ((employee)=>employee.teamName === 'TeamC');
//    var teamC = {team:'TeamC' ,members:teamCMembers,collapsed:selectedTeam === 'TeamC' ? false:true}
//    teams.push(teamC);

//    var teamDMembers = employees .filter ((employee)=>employee.teamName === 'TeamD');
//    var teamD = {team:'TeamD' ,members:teamDMembers,collapsed:selectedTeam === 'TeamD' ? false:true}
//    teams.push(teamD);
//    return teams;

// }

// function handleTeamClick(event){

//   var transformedGroupData= groupedEmployees.map((groupedData)=>
//   groupedData.team=== event.currentTarget.id
//         ? {...groupedData,collapsed:!groupedData.collapsed}
//       :groupedData);

//       setGroupedData(transformedGroupData);
//       setTeam(event.currentTarget.id);
// }

//  return(
//   <main className="container">
//     {
//       groupedEmployees.map((item)=>{
//       return(
//         <div key={item.item} className="card mt-2"
//          style={{cursor:"pointer"}}>
//         <h4 id={item.team} className="card-header 
//         text-secondary bg-white"
//         onClick={handleTeamClick}>
//           Team Name:{item.team}
//         </h4>
//         <div id={"collapse_" + item.team}
//         className={item.collapsed === true ?"collapse" : " "}>
//           <hr/>
//           {
//             item.members.map(member=>{
//               return(
//                 <div className="mt-2">
//                   <h5 className="card-title mt-2">
//                     <span className="text-dark">Full Name:
//                     {member.fullName}</span>
//                   </h5>
//                   <p>Designation: {member.designation}</p>
//               </div>
//               )
//             })
//           }
//           </div>        
        
        
//         </div>
//       )


//       })
//     }
//   </main>
//  )


// }
// export default GroupedTeamMembers;




import { useState, useEffect } from 'react';

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {

  const [groupedEmployees, setGroupedData] = useState([]);

  useEffect(() => {
    setGroupedData(groupTeamMembers());
  }, [employees, selectedTeam]);

  function groupTeamMembers() {
    const teams = [];

    const teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
    const teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam !== 'TeamA' };
    teams.push(teamA);

    const teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
    const teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam !== 'TeamB' };
    teams.push(teamB);

    const teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
    const teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam !== 'TeamC' };
    teams.push(teamC);

    const teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
    const teamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeam !== 'TeamD' };
    teams.push(teamD);

    return teams;
  }

  function handleTeamClick(event) {
    const teamId = event.currentTarget.id;
    const transformedGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === teamId
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );
    setGroupedData(transformedGroupData);
    if (typeof setTeam === 'function') {
      setTeam(teamId);
    } else {
      console.error('setTeam is not a function');
    }
  }

  return (
    <main className="container">
      {groupedEmployees.map((item) => (
        <div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
          <h4
            id={item.team}
            className="card-header text-secondary bg-white"
            onClick={handleTeamClick}
          >
            Team Name: {item.team}
          </h4>
          <div id={"collapse_" + item.team} className={item.collapsed ? "collapse" : ""}>
            <hr />
            {item.members.map((member, index) => (
              <div className="mt-2" key={index}>
                <h5 className="card-title mt-2">
                  <span className="text-dark">Full Name: {member.fullName}</span>
                </h5>
                <p className="text-center">Designation: {member.designation}</p>
              </div>
            ))}
          </div>
          <hr />
        </div>
      ))}
    </main>
  );
};

export default GroupedTeamMembers;
