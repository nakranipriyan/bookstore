import React from 'react'

const User = (props) => {
    const {a,uid}=props; //object destructuring
  return (
    <div>
        <div>User Component</div>
        <div>User Name:{a}</div>
        <div>User Id:{uid}</div>
    </div>
   
  )
}

export default User