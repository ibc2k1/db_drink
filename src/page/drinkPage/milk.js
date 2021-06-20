import * as React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import $ from "jquery";
import { Link } from "react-router-dom";

const itemDataMilk = [];
  
  $.ajax(
  {
    url: 'http://54.88.4.245/api_drink_milk.php',
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
          itemDataMilk.push(inner);
        });
      }
    }
  });

export default function TitlebarImageList() {
  return (
    <center><ImageList sx={{ width: 1000, height: 850 }} cols={5} gap={8}>
      {itemDataMilk.map((item) => (
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
                <div className="storeChange">
                  <Link to={`/milk/${item.id}`}>
                  <IconButton component={Link} to={`/milk/${item.id}`}
                  
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`} 
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

