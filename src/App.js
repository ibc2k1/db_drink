import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/homePage/home";
import Drink_c from "./page/drinkPage/drinkC";
import Blacktea from "./page/drinkPage/blacktea";
import Greentea from "./page/drinkPage/greentea";
import Oolong from "./page/drinkPage/oolong";
import Milk from "./page/drinkPage/milk";
import Coffee from "./page/drinkPage/coffee";
import Fruit from "./page/drinkPage/fruit";
import Smoothie from "./page/drinkPage/smoothie";
import Else from "./page/drinkPage/else";
import Store_c from "./page/storePage/store";
import SignIn from "./page/signInPage/sign";
import List from "./page/listPage/list";
import Router_c from "./component/router";
import Router_drink from "./page/drinkPage/router_drink";


export default function App() {
  return (
    <Router>
      <div className="App">
        
          <Route exact path="/" >
            <Router_c/>
            <Home/>
          </Route>

          <Route path="/Drink_c" >
            <Router_c/>
            <Router_drink/>
          </Route>

          <Route path="/Store_c" >
            <Router_c/>
            <Store_c/>
          </Route>
          
          <Route path="/SignIn" >
            <SignIn/>
          </Route>

          <Route path="/List" >
            <Router_c/>
            <List/>
          </Route>
          
          <Route path="/blacktea" >
            <Router_c/>
            <Blacktea/>
          </Route>

          <Route path="/greentea" >
            <Router_c/>
            <Greentea/>
          </Route>

          <Route path="/oolong" >
            <Router_c/>
            <Oolong/>
          </Route>
          
          <Route path="/milk" >
            <Router_c/>
            <Milk/>
          </Route>

          <Route path="/coffee" >
            <Router_c/>
            <Coffee/>
          </Route>

          <Route path="/fruit" >
            <Router_c/>
            <Fruit/>
          </Route>
          
          <Route path="/smoothie" >
            <Router_c/>
            <Smoothie/>
          </Route>

          <Route path="/else" >
            <Router_c/>
            <Else/>
          </Route>
        
      </div>
    </Router>
  );
}