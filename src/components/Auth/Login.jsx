import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [formData, setFormData] = useState({
                                            email : "",
                                            password : "",

                                            })
                                       
    const changeHandler = (event) =>{
        const {name, value} = event.target
        setFormData((prevData)=>{
            return {
                ...prevData,
                [name] : value
            }
        })
    }


    const submitHandler = (e)=>{
        e.preventDefault()

        handleLogin(formData.email, formData.password)
        setFormData({
            email : "",
            password : "",
        })     
    }

  return (
      <div className='h-full max-w-maxContent overflow-hidden '>
        <div className='flex flex-col items-center justify-center mt-14 w-[50%] mx-auto'>
            <h2>for admin use - admin@example.com, admin123 </h2> 
            <h2> for employee use -employee1@example.com, pass123</h2> 
        </div>
        <div className='flex h-screen w-screen items-center justify-center'>

            <div className='border-2 border-emerald-500 rounded-xl p-20'>

                <div className='text-center mb-9 w-full -mt-10'>
                    <h1 className='text-6xl font-extrabold'>Login</h1>
                </div>

                <form className='flex flex-col items-center justify-center '
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                    
                    <input 
                        name='email'
                        type='email'
                        value={formData.email}
                        placeholder='Enter your email'
                        required
                        onChange={changeHandler}
                        className='outline-none bg-transparent border-2 border-emerald-600 text-xl 
                        py-3 px-5 rounded-full placeholder:text-gray-400'/>

                    <input 
                        name='password'
                        type='password'
                        value={formData.password}
                        placeholder='Enter your password'
                        required
                        onChange={changeHandler}
                        className='outline-none bg-transparent border-2 border-emerald-600 text-xl 
                        py-3 px-5 mt-3 rounded-full placeholder:text-gray-400'/>

                    <button className='mt-5 text-white outline-none border-none bg-emerald-500 text-lg 
                        py-2 px-8 w-full rounded-full placeholder:text-white'>
                            Log In
                    </button>
                </form>

            </div>
        </div>

    </div>
    
  )
}

export default Login
