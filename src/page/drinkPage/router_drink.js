import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { RestaurantMenu } from "@material-ui/icons";



export default function Router_drink() {
  return (
    
      <div className="drinkType">
        <center><tr>
          <Link to="/blacktea">
         
          <Button onclick="style.display = 'none'">紅茶</Button>
          </Link>
          <Link to="/greentea">
            <Button>綠茶</Button>
          </Link>
          <Link to="/oolong">
            <Button>烏龍茶</Button>
          </Link>
          <Link to="/milk">
            <Button>奶類</Button>
          </Link>
        </tr></center>
        <center><tr>
          <Link to="/coffee">
            <Button>咖啡</Button>
          </Link>
          <Link to="/fruit">
            <Button>水果</Button>
          </Link>
          <Link to="/smoothie">
            <Button>冰沙</Button>
          </Link>
          <Link to="/else">
            <Button>其他</Button>
          </Link>
        </tr></center>
      </div>
    
  );
}