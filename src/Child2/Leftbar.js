import React from 'react'
import styled from 'styled-components';

const Kuchbhi= styled.div`
width: 20%;
height: 100%;
background-color: aliceblue;
.text{
    font-size: 40px;
    color: blue;
    font-weight: 800;
}
`;
export default function Leftbar() {
  return (
    <Kuchbhi>
        
        
     <h3 className='text'>Leftone</h3>


    </Kuchbhi>
  )
}
