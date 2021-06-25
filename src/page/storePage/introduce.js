import $ from 'jquery';
import React from 'react';
import "./storeintro.css";

export default function StoreIntro() {

  var pathname = window.location.pathname.split( '/' );

  var store = pathname[2];

  const itemDataBlack = [];

  $.ajax(
  {
    url: 'http://54.172.217.12/api_store_name.php ',
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
          if(item.S_ID === store)
          {
            var inner = 
            {
              id:item.S_ID,
              tittle:item.S_name,
              intro:item.desc,
              Img:item.img,
            }
            itemDataBlack.push(inner);
          }
        });
      }
    }
  });

  return (
    <div class="INTRO">
      <div class="Tittle">
        <h2>{itemDataBlack[0].tittle}</h2>
      </div>
      <img className="storepic" src={itemDataBlack[0].Img} width="20%"/>
      <p class="word">{itemDataBlack[0].intro}</p>
  </div>
  );
}