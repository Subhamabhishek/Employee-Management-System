import React from 'react'

const FailedTask = ({task}) => {
  return (
    <div>
    <div className='flex-shrink-0 p-5 h-full w-[300px] bg-blue-400 rounded-xl '>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{task.category}</h3>
            <h4 className='text-sm'>{task.date}</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>{task.title}</h2>
        <p className='text-sm mt-2'>{task.description}</p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm w-full'>Mark as Failed</button>
        </div>
    </div>
</div>
  )
}

export default FailedTask