import React from 'react'

function UserTripCardItem({trip}) {
  return (
    <div>
        <img src="/Airplane.jpg" className='object-cover rounded-xl'/>
        <div>
            <h2>{}</h2>
        </div>
    </div>
  )
}

export default UserTripCardItem