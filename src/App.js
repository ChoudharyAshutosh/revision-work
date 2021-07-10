import './App.css';
import Home from './component/Home'

function App() {
  const setHeight=()=>{
    document.getElementsByTagName('html')[0].style.height=window.innerHeight;
  }
  return (
    <div>
          {setHeight()}
      <Home/>
    </div>
  );
}

export default App;
