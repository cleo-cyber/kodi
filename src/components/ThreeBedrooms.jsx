import React from 'react'
import styled from 'styled-components'
import House1 from "../assets/House1.jpg"
import House2 from "../assets/House2.jpg"
import { Splide } from '@splidejs/react-splide'
import {Fade} from "react-reveal"
function ThreeBedrooms() {
    const rooms = [{
        roomImage: House1,
        houseLocation: "Nairobi,Kenya",
        rent: 123454,
        distance: "4332 Kilometers away"
    },

    {
        roomImage: House2,
        houseLocation: "Mombasa,Kenya",
        rent: 123454,
        distance: "4332 Kilometers away"
    },
    {
        roomImage: House2,
        houseLocation: "Mombasa,Kenya",
        rent: 123454,
        distance: "4332 Kilometers away"
    },
    {
        roomImage: House2,
        houseLocation: "Mombasa,Kenya",
        rent: 123454,
        distance: "4332 Kilometers away"
    },
    {
        roomImage: House2,
        houseLocation: "Mombasa,Kenya",
        rent: 123454,
        distance: "4332 Kilometers away"
    },
    {
        roomImage: House2,
        houseLocation: "Mombasa,Kenya",
        rent: 123454,
        distance: "4332 Kilometers away"
    }
    ]
  return (
    
    <Wrapper>
        <h2>Other Listings</h2>
        <OtherListings>
        
        {rooms.map((room)=>{
            return(
                <Fade bottom>
                <Card>
                <div>
                    <img src={room.roomImage} alt="" />
                </div>
                <h3>{room.houseLocation}</h3>
                <small>{room.distance}</small>
                <h3>$ {room.rent}</h3>

            </Card>
            </Fade>
            )
        })}
        </OtherListings>
    </Wrapper>
  )
}
const Wrapper=styled.div`
margin:3rem 2rem;

h2{
    font-weight:300;
    font-size:2rem;
    color:#333;
    text-align:left;
    
}

`
const OtherListings=styled.div`

display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
grid-gap:2rem;

`


const Card = styled.div`
min-height:25rem;
border-radius:2rem;
overflow:hidden;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}

`
export default ThreeBedrooms