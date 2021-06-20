import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { RestaurantMenu } from "@material-ui/icons";


export default function Router_drink() {
  
  return (
    
      <div className="drinkType">
        <center><tr>
          <Link to="/allblacktea">
         
          <Button onclick="style.display = 'none'">紅茶</Button>
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
        <h1>請選擇飲料種類!</h1>
      </div>
    
  );
}