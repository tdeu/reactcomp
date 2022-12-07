import logo from './logo.svg';
import './App.css';
import Profile from './component/profile/ProfilePhoto';
import Fullname from './component/profile/FullName';
import Address from './component/profile/Address'

function App() {
  return (
    <div className="App">
    <> 
    <Profile/>
     <Fullname/>
     <Address/> 
     </>

    </div>
  );
}

export default App;
