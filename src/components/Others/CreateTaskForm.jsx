import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTaskForm = () => {

    const [userData, setUserData] = useContext(AuthContext) ;

    const [formData, setFormData] = useState({
                                                title : "",
                                                date : "",
                                                assignTo : "",
                                                category : "",
                                                description : "",
                                            })

    const [newTask, setNewTask] = useState({})

    const changeHandler=(event)=>{
        const {name, value} = event.target
        setFormData(prevData => {
            return{
                ...prevData,
                [name] : value
            }
        })
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        const {title, date, category, description, assignTo} = formData
        
        const newTask = {
            title,
            date,
            category,
            description,
            active: "false",
            new_task: "true",
            completed: "false",
            failed: "false"
        };

        const updatedUserData = { ...userData };
        updatedUserData.employees = updatedUserData.employees.map(emp => {
            if (emp.name === assignTo) {
                return {
                    ...emp,
                    tasks: [...emp.tasks, newTask],
                    taskCounts: {
                        ...emp.taskCounts,
                        new_task: emp.taskCounts.new_task + 1
                    }
                };
            }
            return emp;
        });

        setUserData(updatedUserData);
        localStorage.setItem("UpdatedUserData", JSON.stringify(updatedUserData));

        console.log("Updated userData:", updatedUserData);

        setFormData({
            taskTitle : "",
            date : "",
            assignTo : "",
            category : "",
            desc : "",
        }) 

    }


  return (
    <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
            <form onSubmit={submitHandler}
                className='flex flex-wrap w-full items-start justify-between'>

                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            required 
                            name="title" 
                            type="text" 
                            value={formData.title}
                            placeholder='Mode of UI design'
                            onChange={changeHandler}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none
                                bg-transparent border-[1px] border-gray-400 mb-4'       
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            required
                            name='date'
                            type='date'
                            value={formData.date}
                            onChange={changeHandler}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none
                                bg-transparent border-[1px] border-gray-400 mb-4'
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input
                            required
                            name='assignTo'
                            type='text'
                            value={formData.assignTo}
                            placeholder='Employee name'
                            onChange={changeHandler}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none
                                bg-transparent border-[1px] border-gray-400 mb-4'
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            required
                            name =  'category'
                            type='text'
                            value={formData.category}
                            placeholder='design, dev, etc'
                            onChange={changeHandler}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none
                                bg-transparent border-[1px] border-gray-400 mb-4'
                        />
                    </div>
                </div>
                
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea 
                            required
                            name='description' 
                            value={formData.description}
                            onChange={changeHandler}
                            className='w-full h-44 text-sm py-2 px-4 rounded outline-none 
                                    bg-transparent border-[1px] border-gray-400' >
                    </textarea>
                    
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
                        Create Tasks
                    </button>
                </div>               

            </form>
      </div>
  )
}

export default CreateTaskForm