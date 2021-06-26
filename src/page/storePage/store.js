import * as React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import $ from "jquery";
import { Link } from "react-router-dom";

const itemDataShop = [];
  
  $.ajax(
  {
    url: 'http://100.24.235.73/api_store_all.php ',
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
          var inner = 
          {
            img : item.img,
            title : item.S_name,
            id : item.S_ID,
          }
          itemDataShop.push(inner);
        });
      }
    }
  });

export function aStore(id) {
    window.console.log("click");
    window.console.log(id);
    return id;
}

export default function Store_c() {
  return (
    <center>
      <div className="links">
      </div>
      <ImageList sx={{ width: "80%", height: "90%" }} cols={5} gap={60}>
      {itemDataShop.map((item) => (
        <ImageListItem key={item.img}> 
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format 1x,
                ${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <div className="links">
                <div className="storeChange">
                  <Link to={`/storedetail/${item.id}`}>
                  <IconButton component={Link} to={`/storedetail/${item.id}`}
                  
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`} 
                    onClick={ () => { aStore(item.id);} }
                    >
                    <InfoIcon />
                  </IconButton>
                  </Link>
                </div>
              </div>
              
            }
          />
        </ImageListItem>
      ))}
    </ImageList></center>
  );
}
  