import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)
    // console.log(userData.employees)
    
  return (
    <div id='allTask' className='bg-[#1C1C1C] p-5 rounded mt-5'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between border rounded'>
            <h2 className='w-1/5'>Employee Name</h2>
            <h3 className='text-center text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-center text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-center text-lg font-medium w-1/5'>Completed Task</h5>   
            <h5 className='text-center text-lg font-medium w-1/5'>Failed Task</h5>                       
        </div>

        <div className=''>
            {
                userData.employees.map((emp, idx)=>{
                    // console.log(emp)
                    return(
                        <div key ={idx} className='mb-2 py-2 px-4 flex justify-between border rounded'>
                            <h2 className='text-lg font-medium w-1/5'>{emp.name}</h2>
                            <h3 className='text-center text-lg font-medium w-1/5 text-blue-600'>{emp.taskCounts.new_task}</h3>
                            <h5 className='text-center text-lg font-medium w-1/5 text-yellow-400'>{emp.taskCounts.active}</h5>
                            <h5 className='text-center text-lg font-medium w-1/5 text-green-600'>{emp.taskCounts.completed}</h5>   
                            <h5 className='text-center text-lg font-medium w-1/5 text-red-600'>{emp.taskCounts.failed}</h5>                       
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default AllTask