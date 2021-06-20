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
import Elsetea from "./page/drinkPage/elsetea"
import Store_c from "./page/storePage/store";
import SignIn from "./page/signInPage/sign";
import List from "./page/listPage/list";
import Router_c from "./component/router";
import Router_drink from "./page/drinkPage/router_drink";
import StoreDetail from "./page/storePage/storedetail"
import aStore from "./page/storePage/store"
import Router_s from "./page/storePage/router_store"
import DrinkExample from "./page/drinkPage/adrink"

export default function App() {
  console.log("hi");
  
  
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

          <Route path='/storedetail/:id'>
            <Router_c/>
            <Router_s/>
          </Route>

          
          <Route path="/SignIn" >
            <SignIn/>
          </Route>

          <Route path="/List" >
            <Router_c/>
            <List/>
          </Route>
          
          <Route path="/allblacktea" >
            <Router_c/>
            <Blacktea/>
          </Route>

          <Route path='/blacktea/:id'>
            <Router_c/>
            <DrinkExample/>
          </Route>

          <Route path="/allgreentea" >
            <Router_c/>
            <Greentea/>
          </Route>

          <Route path='/greentea/:id'>
            <Router_c/>
            <DrinkExample/>
          </Route>

          <Route path="/alloolong" >
            <Router_c/>
            <Oolong/>
          </Route>

          <Route path='/oolong/:id'>
            <Router_c/>
            <DrinkExample/>
          </Route>
          
          <Route path="/allmilk" >
            <Router_c/>
            <Milk/>
          </Route>

          <Route path='/milk/:id'>
            <Router_c/>
            <DrinkExample/>
          </Route>

          <Route path="/allcoffee" >
            <Router_c/>
            <Coffee/>
          </Route>

          <Route path='/coffee/:id'>
            <Router_c/>
            <DrinkExample/>
          </Route>

          <Route path="/allfruit" >
            <Router_c/>
            <Fruit/>
          </Route>

          <Route path='/fruit/:id'>
            <Router_c/>
            <DrinkExample/>
          </Route>
          
          <Route path="/allsmoothie" >
            <Router_c/>
            <Smoothie/>
          </Route>

          <Route path='/smoothie/:id'>
            <Router_c/>
            <DrinkExample/>
          </Route>

          <Route path="/allelse" >
            <Router_c/>
            <Else/>
          </Route>

          <Route path='/else/:id'>
            <Router_c/>
            <DrinkExample/>
          </Route>

          <Route path="/allelsetea" >
            <Router_c/>
            <Elsetea/>
          </Route>

          <Route path='/elsetea/:id'>
            <Router_c/>
            <DrinkExample/>
          </Route>
        
      </div>
    </Router>
  );
}