import React from 'react'
import styled from 'styled-components';

const Kuchbhi2= styled.div`
width: 80%;
height: 100%;
background-color: aliceblue;
background-color: brown;
display: flex;
align-items: center;
justify-content: center;
.text{
    font-size: 40px;
    color: blue;
    font-weight: 800;
}
`;
export default function Rightbar() {
  return (
    <Kuchbhi2>
        <h3 className='text'>
        rightbar
        </h3>
        
        
    </Kuchbhi2>
  )
}
