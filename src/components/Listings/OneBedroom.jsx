import React from 'react'
import styled from 'styled-components'
import House1 from "../../assets/House1.jpg"
import House2 from "../../assets/House2.jpg"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Fade } from 'react-reveal'

function OneBedroom() {
    const rooms = [{
        id:1,
        roomImage: House1,
        houseLocation: "Nairobi,Kenya",
        rent: 123454,
        distance: "4332 Kilometers away"
    },

    {
        id:1,
        roomImage: House2,
        houseLocation: "Mombasa,Kenya",
        rent: 123454,
        distance: "4332 Kilometers away"
    },
    {
        id:2,
        roomImage: House2,
        houseLocation: "Mombasa,Kenya",
        rent: 123454,
        distance: "4332 Kilometers away"
    },
    {
        id:3,
        roomImage: House2,
        houseLocation: "Mombasa,Kenya",
        rent: 123454,
        distance: "4332 Kilometers away"
    },
    {
        id:4,
        roomImage: House2,
        houseLocation: "Mombasa,Kenya",
        rent: 123454,
        distance: "4332 Kilometers away"
    },
    {
        id:5,
        roomImage: House2,
        houseLocation: "Mombasa,Kenya",
        rent: 123454,
        distance: "4332 Kilometers away"
    }
    ]
    return (
        <Wrapper>
            <h2>One Bedroom Houses</h2>
            <Splide
                options={
                    {
                        perPage: 4,
                        arrows: false,
                        gap: 10,
                        pagination: false,
                    }
                }>
                {rooms.map((room) => {
                    return (
                        <SplideSlide key={room.id}>
                              <Fade right>
                            <Card >
                                <div>
                                    <img src={room.roomImage} alt="" />
                                </div>
                                <h3>{room.houseLocation}</h3>
                                <small>{room.distance}</small>
                                <h3>$ {room.rent}</h3>

                            </Card>
                            </Fade>
                        </SplideSlide>
                    )
                })}

            </Splide>
        </Wrapper>
    )
}
const Wrapper = styled.div`
margin:3rem 2rem;
h2{
    font-weight:300;
    font-size:2rem;
    color:#333;
    text-align:left;
    
}
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
export default OneBedroom