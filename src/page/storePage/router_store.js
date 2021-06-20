import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function Router_s({ match }) {
  return (
    <div className="links">
      <div className="header">
        <Link to='/introduce'>
          <Button>品牌介紹</Button>
        </Link>
        <Link to="/branch">
          <Button>分店資訊</Button>
        </Link>
        <Link to="/menu">
          <Button>菜單</Button>
        </Link>

      </div>
    </div>
  );
}