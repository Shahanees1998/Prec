import React from 'react'
import styled from 'styled-components';
const Wrapper = styled.div`
width: 100%;
height: 10%;
display: flex;
justify-content: space-between;
.center
{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;
  background-color: bisque;
}
`;
export default function Child() {
  return (
    <Wrapper>
      <div className='center'>
           <h3 style={{fontSize: '15px', fontWeight: '500'}}>LOGO</h3>

      </div>
      <div className='center'>
          <h3 style={{fontSize: '15px', fontWeight: '500'}}>LOGO</h3>

      </div>
    </Wrapper>
  )
}
