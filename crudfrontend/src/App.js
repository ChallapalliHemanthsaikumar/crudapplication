import Tables from './components/toDo/todolist.component';
import './App.css';
import Form from './components/toDo/Edit.component'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,useHistory
} from "react-router-dom";
import Detail from './components/toDo/detail.component';


function App() {


 

  return (
    <div className="App" >
      <div style={{display:'flex',width:'100%',backgroundColor:'#006B82',height:'10%'}}></div>
     <Router>
      <div style={{height:'80%'}}> 
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
         
          
          <Route exact path="/">
          <Tables/>
         
          </Route>
          <Route exact path="/detail/:id">
          <Detail/>
         
          </Route>
          <Route path="/edit/:id">
            <Form />
            </Route>
          <Route path="/add">
            <Form />
       
          </Route>
        </Switch>
      </div>
    </Router>
      
    <div style={{display:'flex',width:'100%',backgroundColor:'#006B82',height:'10%'}}></div>

     
    </div>
  );
}

export default App;
