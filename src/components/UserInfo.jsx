import React from 'react'

const UserInfo = () => {

  const usersinfo = [
    {
      username : "M'Imea",
      email: "imea@hmail.com",
      location: "Timau",
    },

    {
      username : "Thuranira",
      email: "imeagerald@hmail.com",
      location: "Gobit",
    },

    {
      username : "Mutembei",
      email: "imea123@hmail.com",
      location: "Nanyuki",
    }
]



return (
    <div>
 {usersinfo.map(user => 
                  <ul key={Math.random()}>
                      <li>{user.username}</li>
                      <li>{user.email}</li>
                      <li>{user.location}</li>

                  </ul>


 )
 }


    </div>
  )
}

export default UserInfo