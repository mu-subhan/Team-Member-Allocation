import Header from './Header';
import Footer from './Footer';
import './App.css';
import NotFound from './NotFound';
import Nav from './Nav';
import GroupedTeamMembers from './GroupedTeamMembers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import { useState,useEffect } from 'react';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';


function App() {

  const [selectedTeam,setTeam]=useState(JSON.parse(localStorage.getItem('selectedTeam')) ||'TeamB')
 const [employees,setEmployees]=useState(JSON.parse(localStorage.getItem('employeeList')) || [{

    id:1,
    fullName:'Joes Buttler',
    designation:'javascript Developer',
    gender:'male',
    teamName:'teamOne'
 },
 {
    id:19,
    fullName:'Joe',
    designation:'javascript Developer',
    gender:'female',
    teamName:'teamyes'
 },

 {
    id:2,
    fullName:' Buttler',
    designation:'javascript Developer',
    gender:'male',
    teamName:'teamTwo'
 },
 {
    id:3,
    fullName:'Ben Stokes',
    designation:'React native Developer',
    gender:'female',
    teamName:'teamthree'
 },
 {
    id:4,
    fullName:'Rashid',
    designation:'Back End',
    gender:'male',
    teamName:'teamFour'
 },
 {
    id:5,
    fullName:'Virat Kholi',
    designation:'Laravel Developer',
    gender:'male',
    teamName:'teamfifth'
 },
 {
    id:6,
    fullName:'Rohit Sharma',
    designation:'Cricketer',
    gender:'female',
    teamName:'teamIndia'
 },
 {
    id:7,
    fullName:'Muhammad Shami',
    designation:'javascript Developer',
    gender:'male',
    teamName:'teamseven'
 },
 {
    id:8,
    fullName:'Narine',
    designation:'Hiteler',
    gender:'male',
    teamName:'teamWest'
 },
 {
    id:9,
    fullName:'Allad din',
    designation:'Tv Actot',
    gender:'female',
    teamName:'teammovie'
 },
 {
    id:10,
    fullName:'Salt',
    designation:'javascrit',
    gender:'male',
    teamName:'i2c'
 },
 {
    id:11,
    fullName:'Martin Guptil',
    designation:'Nodes js  Developer',
    gender:'female',
    teamName:'teameOne'
 }


])

useEffect(()=>{
localStorage.setItem('employeeList',JSON.stringify(employees));

},[employees]);


useEffect(()=>{
localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam));

},[selectedTeam]);



 function handleTeamSelectionChange(event){
   console.log(event.target.value);
   setTeam(event.target.value);
 }
 function handleEmployeeCardClick(event){
   const transformedEmployees = employees.map((employee)=>employee.id === parseInt(event.currentTarget.id)
                 ?(employee.teamName === selectedTeam)?{...employee,teamName:''}:{...employee,teamName:selectedTeam}
               :employee);

               setEmployees(transformedEmployees);
 }

  return (
    <Router>
      <Nav/>
      <Header selectedTeam={selectedTeam}
      teamMemberCount={employees.filter((employee)=>employee.teamName===selectedTeam).length}
      
      />
      
      <Routes>
         <Route path='/' element={
      <Employees employees={employees}
      selectedTeam={selectedTeam}
      handleEmployeeCardClick={handleEmployeeCardClick}
      handleTeamSelectionChange={handleTeamSelectionChange}
      />}>
      </Route>
       <Route path='/GroupedTeamMembers' element ={<GroupedTeamMembers employees={employees} selectedTeam={selectedTeam} setItem={setTeam} />}>

       </Route>
       <Route path='*' element ={<NotFound/>}>

       </Route>
     </Routes>
      <Footer/>
      </Router>
  );
}

export default App;
