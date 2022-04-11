import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Child from './Header/Child';
import homeimage from './assets/images/homeimage.svg'
import Leftbar from './Child2/Leftbar';
import Rightbar from './Child2/Rightbar';
const Homepage = styled.div`
width: 100%;
height: 100vh;
background-color: yellow;
.mainimage{
  width: 100%;
  height: '10vh'
}
.child2{
  width: 100%;
  height: 70vh;
  background-color: blueviolet;
  display: flex;
}

`;
function App() {
  return (
    <Homepage>
      <Child />
      <div className='mainimage'>
        <img src={homeimage} className="mainimage" />
      </div>
      <div className='child2'>
<Leftbar />
<Rightbar />
      </div>
    </Homepage>
  );
}

export default App;
