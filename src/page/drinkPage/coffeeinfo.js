import $ from 'jquery';
import React from 'react';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import './adrink.css'

export default function Coffeeinfo() {
    
    var pathname = window.location.pathname.split( '/' );
    var drink = pathname[2];  
    const drinkDataB = [];
    $.ajax(
    {
        url: 'http://100.24.235.73/api/drink/coffee_intro.php',
        type: 'post',
        cache: false,
        async: false,
        dataType: 'json',
        success: function(data)
        {
            if(data)
            {
                $.each(data, function(i, item)
                {
                    if(item.D_ID === drink)
                    {
                        var inner = 
                        {
                            did:item.D_ID,
                            sid:item.S_ID,
                            name:item.D_Name,
                            img:item.Picture,
                            vol:item.Volume,
                            cal:item.Cal,
                            pri:item.Price,
                        }
                        drinkDataB.push(inner);
                    }
                });
            }
        }
    });
    var adrinkname = drinkDataB[0].name;
    var adrinkpic = drinkDataB[0].img;
    var adrinkid = drinkDataB[0].sid;

    return (
        
        <div>
            <h1>{adrinkname}</h1>
            <img className="drinkimg" src={adrinkpic} width="20%"/>
            <Link to={`/storedetail/${adrinkid}`}>
                <Button className="shop">查看店家</Button>
            </Link>
            <table class="tb1">
            <tr>
            <th id="name" colspan="3">商品資訊</th>
            </tr>
            <tr>
                <th>容量</th>
                <th>熱量</th>
                <th>價錢</th>
            </tr>
            {drinkDataB.map((item) => (
                <tr>
                    <td>{item.vol}</td>
                    <td>{item.cal}cal</td>
                    <td>${item.pri}</td>
                </tr>
            ))}
            </table>
        </div>
    );
}