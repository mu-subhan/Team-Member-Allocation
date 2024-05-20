import React from 'react'
import TeamMembersCard from './TeamMembersCard'
const TeamMembers = ({employees,handleEmployeeCardClick,selectedTeam}) => {
  return (
    employees.map((employee)=>(
        <TeamMembersCard employee={employee} handleEmployeeCardClick ={handleEmployeeCardClick} selectedTeam={selectedTeam}/>
    ))
  )
}

export default TeamMembers
