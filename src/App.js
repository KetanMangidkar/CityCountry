import { useState ,useEffect} from 'react'
import './App.css';
import { AddCountry } from "./components/AddCountry";
import { Showcountry } from "./components/Country";


function App() {
  const [show,setShow]=useState(true)
  return (
    <div className="App">
      <button onClick={()=>{setShow(!show)}} className="togglebtn">
        {show ?  "Add a new Country" : "go to  list" }
      </button>
      {show ?  null :<AddCountry /> }
      {show ?  <Showcountry/>:null }
      
    </div>
  );
}

export default App;
