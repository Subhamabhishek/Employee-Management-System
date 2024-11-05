import React from 'react'
import ActiveTask from './ActiveTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({loggedInUserData}) => {

  return (
    <div id='taskList' className='h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap'>

        {
            loggedInUserData.tasks.map( (elem, idx) =>{
                if(elem.active){
                    return <ActiveTask key={idx} task={elem} />
                }
                if(elem.new_task){
                    return <NewTask key={idx} task={elem} />
                }
                if(elem.completed){
                    return <CompleteTask key={idx} task={elem} />
                }
                if(elem.failed){
                    return <FailedTask key={idx} task={elem} />
                }                
            })
        }

    </div>
  )
}

export default TaskList