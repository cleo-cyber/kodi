import React from 'react'
import OneBedroom from '../components/Listings/OneBedroom'
import Single from '../components/Listings/SingleRooms'
import ThreeBedrooms from '../components/Listings/ThreeBedrooms'
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