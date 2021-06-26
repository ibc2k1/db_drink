import * as React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import $ from "jquery";
import { Link } from "react-router-dom";

export function aStore(id) {
  window.console.log("click");
  window.console.log(id);
  return id;
}

export default function Blacktea() {
  
  const itemDataBlack = [];
    
    $.ajax(
    {
      url: `http://100.24.235.73/api_drink_blacktea.php`,
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
              img : item.Picture,
              title : item.D_NAME,
              id : item.D_ID,
            }
            itemDataBlack.push(inner);
          });
        }
      }
    });
  

  return (
    <center><ImageList sx={{ width: "80%", height: "90%" }} cols={5} gap={60}>
      {itemDataBlack.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format 1x,
            ${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`
            }
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <div className="links">
                <div className="blackteachange">
                  <Link to={`/blacktea/${item.id}`}>
                    <IconButton component={Link} to={`/blacktea/${item.id}`}
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
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

