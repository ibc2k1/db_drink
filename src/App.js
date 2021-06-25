import "./App.css";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import HomePage from "./page/homePage/home";
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
import Router_c from "./component/router";
import Router_drink from "./page/drinkPage/router_drink";
import Router_s from "./page/storePage/router_store"
import DrinkExample from "./page/drinkPage/adrink"
import Manage from "./page/ManagePage/manage"

import Blackteafact from "./page/drinkPage/blackteafact"
import Blackinfo from "./page/drinkPage/blackinfo"

import Coffeefact from "./page/drinkPage/coffeefact"
import Coffeeinfo from "./page/drinkPage/coffeeinfo"

import Elsefact from "./page/drinkPage/elsefact"
import Elseinfo from "./page/drinkPage/elseinfo"

import Elseteafact from "./page/drinkPage/elseteafact"
import Elseteainfo from "./page/drinkPage/elseteainfo"

import Fruitfact from "./page/drinkPage/fruitfact"
import Fruitinfo from "./page/drinkPage/fruitinfo"

import Grefact from "./page/drinkPage/grefact"
import Greeninfo from "./page/drinkPage/greeninfo"

import Milkfact from "./page/drinkPage/milkfact"
import Milkiofo from "./page/drinkPage/milkinfo"

import Oolongfact from "./page/drinkPage/oolongfact"
import Oolonginfo from "./page/drinkPage/oolonginfo"

import Smoothiefact from "./page/drinkPage/smoothiefact"
import Smoothieinfo from "./page/drinkPage/smoothieinfo"

import Branch from "./page/storePage/branch"
import Introduce from "./page/storePage/introduce"
import StoreMenu from "./page/storePage/menutest"

import ControlledOpenSelect from './page/drinkPage/menu'
import MyContextProvider from './contexts/myContext';
import Home from './component/home';

export default function App() {
  console.log("hi");
  
  
  return (
    <Router>
      <div className="App">

          <Route exact path="/" >
            <Router_c/>
            <HomePage/>
          </Route>

          <Route path="/Drink_c" >
            <Router_c/>
            <h1>請選擇飲料種類!</h1>
            <ControlledOpenSelect/>
          </Route>

          <Route path="/Store_c" >
            <Router_c/>
            <h1>請選擇店家!</h1>
            <Store_c/>
          </Route>

          <Route path='/storedetail/:id'>
            <Router_c/>
            <Introduce/>
            <Branch/>
            <StoreMenu/>
          </Route>

          <Route path="/SignIn" >
            <Router_c/>
            <br></br>
            <MyContextProvider>
              <Home/>
            </MyContextProvider>
          </Route>

          <Route path="/Manage" >
            <Router_c/>
            <Manage/>
          </Route>
          
          <Route path="/allblacktea" >
            <Router_c/>
            <h1>請選擇飲料種類!</h1>
            <ControlledOpenSelect/>
            <Blacktea/>
          </Route>

          <Route path="/allgreentea" >
            <Router_c/>
            <h1>請選擇飲料種類!</h1>
            <ControlledOpenSelect/>
            <Greentea/>
          </Route>

          <Route path="/alloolong" >
            <Router_c/>
            <h1>請選擇飲料種類!</h1>
            <ControlledOpenSelect/>
            <Oolong/>
          </Route>
          
          <Route path="/allmilk" >
            <Router_c/>
            <h1>請選擇飲料種類!</h1>
            <ControlledOpenSelect/>
            <Milk/>
          </Route>

          <Route path="/allcoffee" >
            <Router_c/>
            <h1>請選擇飲料種類!</h1>
            <ControlledOpenSelect/>
            <Coffee/>
          </Route>

          <Route path="/allfruit" >
            <Router_c/>
            <h1>請選擇飲料種類!</h1>
            <ControlledOpenSelect/>
            <Fruit/>
          </Route>
          
          <Route path="/allsmoothie" >
            <Router_c/>
            <h1>請選擇飲料種類!</h1>
            <ControlledOpenSelect/>
            <Smoothie/>
          </Route>

          <Route path="/allelse" >
            <Router_c/>
            <h1>請選擇飲料種類!</h1>
            <ControlledOpenSelect/>
            <Else/>
          </Route>

          <Route path="/allelsetea" >
            <Router_c/>
            <h1>請選擇飲料種類!</h1>
            <ControlledOpenSelect/>
            <Elsetea/>
          </Route>

          <Route path='/blacktea/:id'>
            <Router_c/>
            <Blackteafact/>
            <Blackinfo/>
            </Route>

            <Route path='/greentea/:id'>
            <Router_c/>
            <Grefact/>
            <Greeninfo/>
            </Route>

            <Route path='/oolong/:id'>
            <Router_c/>
            <Oolongfact/>
            <Oolonginfo/>
            </Route>
            
            <Route path='/coffee/:id'>
            <Router_c/>
            <Coffeefact/>
            <Coffeeinfo/>
            </Route>

            <Route path='/else/:id'>
            <Router_c/>
            <Elsefact/>
            <Elseinfo/>
            </Route>

            <Route path='/elsetea/:id'>
            <Router_c/>
            <Elseteafact/>
            <Elseteainfo/>
            </Route>

            <Route path='/fruit/:id'>
            <Router_c/>
            <Fruitfact/>
            <Fruitinfo/>
            </Route>
        
            <Route path='/milk/:id'>
            <Router_c/>
            <Milkfact/>
            <Milkiofo/>
            </Route>

            <Route path='/smoothie/:id'>
            <Router_c/>
            <Smoothiefact/>
            <Smoothieinfo/>
            </Route>
      </div>
    </Router>
  );
}