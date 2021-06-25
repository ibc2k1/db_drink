import * as React from "react"
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Blacktea from "./blacktea";



export default function Router_drink() {
  
  return (
    
      <div className="drinkType">
        <h1>請選擇飲料種類!</h1>
        <center><tr>
          <Link to="/allblacktea">
         
          <Button onClick={ () => { Blacktea('blacktea');} }>紅茶</Button>
          </Link>
          <Link to="/allgreentea">
            <Button>綠茶</Button>
          </Link>
          <Link to="/alloolong">
            <Button>烏龍茶</Button>
          </Link>
          <Link to="/allmilk">
            <Button>奶類</Button>
          </Link>
        </tr></center>
        <center><tr>
          <Link to="/allcoffee">
            <Button>咖啡</Button>
          </Link>
          <Link to="/allfruit">
            <Button>水果</Button>
          </Link>
          <Link to="/allsmoothie">
            <Button>冰沙</Button>
          </Link>
          <Link to="/allelse">
            <Button>其他</Button>
          </Link>
          <Link to="/allelsetea">
            <Button>其他茶</Button>
          </Link>
        </tr></center>
      </div>
    
  );
}