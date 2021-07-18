// import Firstapp from './components/firstapp';
import './App.css';
import Salad from './pages/salad';
import Homepage from './components/homepage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Barnyard from './pages/barnyard';
import Biryani from './pages/biryani';
import HenHouse from './pages/henhouse';
import Seafood from './pages/sea';
import Fastfood from './pages/fastfood';
function App(item) {
//  function hyy(y){
//    alert(y)
//  }
  return (
   <>
    
   <Router>
   {/* <Firstapp value='blue' navigate="parent to child" func={hyy}/> */}
   <Homepage/>
   <Switch>
           
   <Route exact path="/salad" component={Salad}></Route>
  <Route exact path="/barnyard" component={Barnyard}></Route>
  <Route exact path="/henhouse" component={HenHouse}></Route>
  <Route exact path="/sea" component={Seafood}></Route>
  <Route exact path="/biryani" component={Biryani}></Route>
  <Route exact path="/fastfood" component={Fastfood}></Route>
   </Switch>
   
   </Router>
   </>
  );
}

export default App;
