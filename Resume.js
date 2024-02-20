import React, { useContext } from 'react'
import { UserContext } from './UserProvider'

const Resume = () => {
    const {education} = useContext(UserContext);
    console.log("user Details : "+education);
  return (
    <div>
               <h1>User Deatils</h1>
               {
                education.map((user,index)=>(
                    <div key={index}>
                          <h2>course name : {user.courseName}</h2>
                    </div>
                ))
               }
    </div>
  )
}

export default Resume