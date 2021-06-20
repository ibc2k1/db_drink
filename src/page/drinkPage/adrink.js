import React, { useState } from 'react'
import './adrink.css'
import $ from "jquery";

var pathname = window.location.pathname.split( '/' );

var drinkid = pathname[2];

var num = 0;

const itemDataBlack =[];
  $.ajax(
  {
    url: 'http://54.88.4.245/api_drink_intro.php ',
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
                itemDataBlack.push(inner);
            }
          
        });
      }
    }
  });



export default function DrinkExample (){
    const volume = [];
    for(var i=0;i<num;i++){
        var pic=itemDataBlack[i].img;
    }

    for(var j=0;j<num;j++){
        if(drinkid===itemDataBlack[j].id){
            for(var k=0;k<num;k++){
                volume[k]=itemDataBlack[j].vol;
            }
        }
    }
    
    console.log(drinkid);
    console.log(itemDataBlack[0]);

    return (
      <>
        
        <h1>{itemDataBlack[0].title}</h1>
        <div>
        <img className="drinkimg" src={itemDataBlack[0].img} />
        </div>
  
        <h1>   </h1>
        
        <input type='button' value='加入心願清單' className="hopebt"  />
  
        <h1>   </h1> 
       

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
            <td>{itemDataBlack[0].vol}</td>
            <td>{itemDataBlack[0].cal}</td>
            <td>{itemDataBlack[0].pri}</td>
        </tr>
        <tr>
            <td>{itemDataBlack[1].vol}</td>
            <td>{itemDataBlack[1].cal}</td>
            <td>{itemDataBlack[1].pri}</td>
        </tr>
        </table>
        
      </>
    )
  }