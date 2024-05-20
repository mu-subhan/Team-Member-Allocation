import React from 'react'
import maleProfile from './img/maleProfile.jpg'
import femaleProfile from './img/femaleProfile.jpg'

const TeamMembersCard = ({employee,handleEmployeeCardClick,selectedTeam}) => {
  return (
    <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2' )} 
    style={{cursor:'pointer'}} onClick={handleEmployeeCardClick}>
   


   {(employee.gender === 'male')? <img src={maleProfile} className='card-img-top' alt="Male Profile" />
     : <img src={femaleProfile} className='card-img-top' alt="female Profile" /> }
      
      
      <div className='card-body'>
        <h5 className='card-title'>Full Name: {employee.fullName}</h5>
     <p className='card-text'><b>Designation: </b>{employee.designation}</p>
      </div>
    </div>
  )
}

export default TeamMembersCard
