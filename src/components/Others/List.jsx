import React from 'react'

const List = ({loggedInUserData}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen flex-wrap flex-shrink-0'>
        <div className='rounded-xl py-6 px-9 w-[45%] bg-red-400'>
            <h2 className='text-4xl font-bold'>{loggedInUserData.taskCounts.new_task}</h2>
            <h3 className='text-xl font-semibold'> New Task</h3>
        </div>
        <div className='rounded-xl py-6 px-9 w-[45%] bg-blue-400'>
            <h2 className='text-4xl font-bold'>{loggedInUserData.taskCounts.completed}</h2>
            <h3 className='text-xl font-semibold'> Completed Task</h3>
        </div>
        <div className='rounded-xl py-6 px-9 w-[45%] bg-green-400'>
            <h2 className='text-black text-4xl font-bold'>{loggedInUserData.taskCounts.active}</h2>
            <h3 className='text-xl font-semibold text-black'> Active Task</h3>
        </div>
        <div className='rounded-xl py-6 px-9 w-[45%] bg-yellow-400'>
            <h2 className='text-4xl font-bold'>{loggedInUserData.taskCounts.failed}</h2>
            <h3 className='text-xl font-semibold'> Failed Task</h3>
        </div>

    </div>
  )
}

export default List