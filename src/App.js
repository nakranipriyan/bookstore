import logo from './logo.svg';
import './App.css';
import User from './User';

const  App=()=> {
  const uname="priyan";
  const uid=50;
  return (
    <div className="App">
    App Component
     <User a={uname} uid={uid}/>
    </div>
  );
}

export default App;
