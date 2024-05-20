import React from 'react'

const Team = ({selectedTeam , handleTeamSelectionChange}) => {
  return (
    <div>
      <select className='form-select form-select-lg'value={selectedTeam} onChange={handleTeamSelectionChange}>
      <option value='TeamA'>Team A</option>
      <option value='TeamB'>Team B</option>
      <option value='TeamC'>Team C</option>
      <option value='TeamD'>Team D</option>
   </select>
    </div>
  )
}

export default Team
