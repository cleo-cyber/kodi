import React from 'react'
import OneBedroom from '../components/OneBedroom'
import Single from '../components/SingleRooms'
import ThreeBedrooms from '../components/ThreeBedrooms'
function Listings() {
  return (
    <div>
      <OneBedroom />
      <Single />
      <ThreeBedrooms/>
    </div>
  )
}

export default Listings