import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import ImageAvatars from "./Avatar";

export default function Router_c() {
  return (
    <nav>
      
      <ImageAvatars/>
      <h1>PICK ME 飲料酷</h1>
      <div className="links">
        <Link to="/">
          <Button>首頁</Button>
        </Link>
        <Link to="/Drink_c">
          <Button>飲料</Button>
        </Link>
        <Link to="/Store_c">
          <Button>店家</Button>
        </Link>
        <Link to="/Manage">
          <Button>管理者介面</Button>
        </Link>
      </div>
    </nav>
  );
}
