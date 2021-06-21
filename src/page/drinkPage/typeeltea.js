import React, { useState } from 'react'
import './adrink.css'
import $ from "jquery";


export default function Typeeltea (){

var pathname = window.location.pathname.split( '/' );

var drinkid = pathname[2];

var num = 0;

const itemDataElTea =[];
  $.ajax(
  {
    url: 'http://54.88.4.245/api/drink/othertea_intro.php  ',
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
            if(item.D_ID === drinkid)
            {
                var inner = 
                {
                    img : item.Picture,
                    title : item.D_Name,
                    id : item.D_ID,
                    vol : item.Volume,
                    cal : item.Cal,
                    pri : item.Price,
                }
                num=num+1;
                itemDataElTea.push(inner);
            }
          
        });
      }
    }
  });

var countfact = 0;  
const allfact = [];
$.ajax(
    {
      url: 'http://54.88.4.245/api/drink/othertea_fact.php ',
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
              if(item.D_ID === drinkid)
              {
                  var inner = 
                  {
                      id : item.D_ID,
                      fact : item.I_Name,
                  }
                  countfact=countfact+1;
                  allfact.push(inner);
              }
            
          });
        }
      }
    });

    const type = [];

    for(var a=0;a<8;a++){
        type[a]='';
    }

    for(var j=0;j<countfact;j++){
        for(var k=0;k<7;k++){
            if(drinkid===allfact[j].id){
                type[k]=allfact[j].fact;
            }
        }
    }


    for(var i=0;i<num;i++){
        var pic=itemDataElTea[i].img;
    }
    
    console.log("drinkid", drinkid);
    console.log(itemDataElTea[0]);

    return (
      <>
        
        <h1>{itemDataElTea[0].title}</h1>

        <input type='button' value='加入心願清單' className="hopebt"  />
        <div>
        <img className="drinkimg" src={itemDataElTea[0].img} />
        </div>
       
       <h4>原料:{type[0]} {type[1]} {type[2]} {type[3]} {type[4]} {type[5]} {type[6]} {type[7]}</h4>

        <table class="tb1">
        <colgroup span="3"></colgroup>
        <tr>
            <th id="name" colspan="3">商品資訊</th>
        </tr>
        <tr>
            <th>容量</th>
            <th>熱量</th>
            <th>價錢</th>
        </tr>
        <tr>
            <td>{itemDataElTea[0].vol}</td>
            <td>{itemDataElTea[0].cal}cal</td>
            <td>${itemDataElTea[0].pri}</td>
        </tr>
        <tr>
            <td></td>
            <td>cal</td>
            <td>$</td>
        </tr>
        </table>
        
      </>
    )
  }