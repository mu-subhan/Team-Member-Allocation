import React, { useState } from 'react'
import TeamMembers from './TeamMembers';
import Team from './Team';
const Employees =({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {
 
 
    return (
   
   <main className='container'>
  <div className='row justify-content-center mt-3 mb-3'>
    <div className='col-6'>
   {/* <Team/> */}
   {/* <select className='form-select form-select-lg'value={selectedTeam} onChange={handleTeamSelectionChange}>
      <option value='TeamA'>Team A</option>
      <option value='TeamB'>Team B</option>
      <option value='TeamC'>Team C</option>
      <option value='TeamD'>Team D</option>
   </select> */}
   <Team selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange}/>
</div>
</div>

    <div className='row justify-content-center mt-3 mb-3'>
    <div className='col-8'>
      <div className='card-collection'>
      <TeamMembers employees={employees}
      handleEmployeeCardClick={handleEmployeeCardClick}
      selectedTeam={selectedTeam} />
      {/* <TeamMembers/> */}
      </div>
    </div>
  </div>
</main>
  )
}

export default Employees
