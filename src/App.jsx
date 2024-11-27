import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  
  
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(()=>{    
      const loggedInUser = localStorage.getItem("loggedInUser")

      if(loggedInUser){
        const userData = JSON.parse(loggedInUser) // imp if you want to be logged in 
        setUser(userData.role)
        setLoggedInUserData(userData.user)
      }

  },[])


const handleLogin = (email, password) =>{
    
    if(userData){
      const admin = userData.admin.find((e) => e.email ===  email && e.password === password)
      const employee = userData.employees.find((e) => e.email ===  email && e.password === password)

      if(admin){
        setUser("admin")
        setLoggedInUserData(admin)
        localStorage.setItem("loggedInUser", JSON.stringify({role:"admin", user: admin}))      
      } 
      else if(employee){
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({role:"employee", user: employee}))
      } 
      else{
        alert("invalid credentials")
      }
    } 
}


return (
    <div>         
      {!user  ?  
              (<Login handleLogin={handleLogin}/> )
              : user === 'admin' ? 
                                (<AdminDashboard changeUser={setUser} loggedInUserData={loggedInUserData}/>) 
                                : (<EmployeeDashboard changeUser={setUser} loggedInUserData = {loggedInUserData}/>)
      }
    </div>
  )
}

export default App
