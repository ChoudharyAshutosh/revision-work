import './Home.css';
import Header from './Header'

function App() {
  const height={height:window.innerWidth>700?'fit-content':window.screen.height}
  return (
    <div className="container">
      <div className="header" style={height}>
        <Header/>  
      </div>
      <div className="home_content">
        <div className="normal_statement">enroll today</div>
        <div className="larger_statement">learning</div>
        <div className="larger_statement_focused">play guitar</div>
        <button className="start_button">start now</button>
      </div>
    </div>
  );
}

export default App;
