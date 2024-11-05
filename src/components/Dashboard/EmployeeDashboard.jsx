import React from 'react'
import List from '../Others/List'
import TaskList from '../TaskList/TaskList'
import EmployeeHeader from '../Others/EmployeeHeader'

const EmployeeDashboard = ({changeUser, loggedInUserData}) => {
  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] h-full'>
            <EmployeeHeader changeUser={changeUser} loggedInUserData={loggedInUserData}/>
            <List loggedInUserData={loggedInUserData}/>
            <TaskList loggedInUserData={loggedInUserData}/>

        </div>
        
    </div>
  )
}

export default EmployeeDashboard