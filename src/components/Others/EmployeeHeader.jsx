import React from 'react'

const EmployeeHeader = ({changeUser,loggedInUserData}) => {

    const logOutUser = () =>{
        localStorage.setItem("loggedInUser", '')
        changeUser('')
    }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-3xl font-medium'>Hello <br/> <span className='text-5xl font-semibold'>{loggedInUserData.name} 👋</span> </h1>
        <button 
            onClick={logOutUser}
            className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm 
            hover:bg-red-600 transition duration-300'
            >
                Log out
        </button>
    </div>
  )
}

export default EmployeeHeader