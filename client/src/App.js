import './App.css';
import { Route, useLocation } from "react-router-dom";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import Form from "./views/Form/Form";
import Detail from './views/Detail/Detail';
import NavBar from './components/NavBar/NavBar';

const App =()=>{

  const location = useLocation();
  return(
    <div className='App'>
      
        {location.pathname !=='/'&& <NavBar/> }
        <Route  path="/home" render={()=><Home/>} />
        <Route exact path="/" render={()=><Landing/>} />
        <Route exact path="/create" render={()=><Form />} />
        <Route exact path="/detail/:id" component={Detail} />
        
   
    </div>
  )

}

export default App;