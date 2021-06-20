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
import Manage from "./page/ManagePage/manage"
import Typeblack from "./page/drinkPage/typeblack"
import Typecof from "./page/drinkPage/typecof"
import Typeelse from "./page/drinkPage/typeelse"
import Typeeltea from "./page/drinkPage/typeeltea"
import Typefru from "./page/drinkPage/typefru"
import Typegre from "./page/drinkPage/typegre"
import Typemilk from "./page/drinkPage/typemilk"
import Typeoo from "./page/drinkPage/typeoo"
import Typesmo from "./page/drinkPage/typesmo"
import Branch from "./page/storePage/branch"
import Introduce from "./page/storePage/introduce"
import Menu from "./page/storePage/menu"

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
            <Introduce/>
            <Branch/>
            <Menu/>
          </Route>

          
          <Route path="/SignIn" >
            <SignIn/>
          </Route>

          <Route path="/Manage" >
            <Router_c/>
            <Manage/>
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
            <Typeblack/>
          </Route>

          <Route path="/allgreentea" >
            <Router_c/>
            <Greentea/>
          </Route>

          <Route path='/greentea/:id'>
            <Router_c/>
            <Typegre/>
          </Route>

          <Route path="/alloolong" >
            <Router_c/>
            <Oolong/>
          </Route>

          <Route path='/oolong/:id'>
            <Router_c/>
            <Typeoo/>
          </Route>
          
          <Route path="/allmilk" >
            <Router_c/>
            <Milk/>
          </Route>

          <Route path='/milk/:id'>
            <Router_c/>
            <Typemilk/>
          </Route>

          <Route path="/allcoffee" >
            <Router_c/>
            <Coffee/>
          </Route>

          <Route path='/coffee/:id'>
            <Router_c/>
            <Typecof/>
          </Route>

          <Route path="/allfruit" >
            <Router_c/>
            <Fruit/>
          </Route>

          <Route path='/fruit/:id'>
            <Router_c/>
            <Typefru/>
          </Route>
          
          <Route path="/allsmoothie" >
            <Router_c/>
            <Smoothie/>
          </Route>

          <Route path='/smoothie/:id'>
            <Router_c/>
            <Typesmo/>
          </Route>

          <Route path="/allelse" >
            <Router_c/>
            <Else/>
          </Route>

          <Route path='/else/:id'>
            <Router_c/>
            <Typeelse/>
          </Route>

          <Route path="/allelsetea" >
            <Router_c/>
            <Elsetea/>
          </Route>

          <Route path='/elsetea/:id'>
            <Router_c/>
            <Typeeltea/>
          </Route>
        
      </div>
    </Router>
  );
}