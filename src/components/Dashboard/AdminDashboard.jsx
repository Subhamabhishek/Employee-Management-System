import React from 'react'
import CreateTaskForm from '../Others/CreateTaskForm'
import AllTask from '../Others/AllTask'
import AdminHeader from '../Others/AdminHeader'

const AdminDashboard = ({changeUser,loggedInUserData}) => {
  return (
    <div className='h-screen w-full p-7'>

        <AdminHeader changeUser={changeUser} loggedInUserData={loggedInUserData}/>
        <CreateTaskForm/>
        <AllTask/>
                
    </div>
  )
}

export default AdminDashboard