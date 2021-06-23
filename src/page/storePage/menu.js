import $ from 'jquery';
import React from 'react';
import { withStyles } from '@material-ui/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";


const Styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

export function aStore(id) {
    window.console.log("click");
    window.console.log(id);
    return id;
  }

export default function Menu() {
    const classes = withStyles(Styles);
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    var pathname = window.location.pathname.split( '/' );

    var store = pathname[2];

    var num = 0;

    const itemDataBlack = [];

    $.ajax(
    {
      url: 'http://54.88.4.245/api_store_menu.php',
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
                did:item.D_ID,
                drink:item.D_Name,
                Img:item.Picture,
              }
              num=num+1;
              itemDataBlack.push(inner);
            }
          });
        }
      }
    });

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                    <Typography className={classes.heading}>菜單</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <center><ImageList sx={{ width:"80%", height: "90%" }} cols={4} gap={60}>
                        {itemDataBlack.map((item) => (
                            <ImageListItem key={item.Img}>
                                <img src={item.Img} loading="lazy"/>
                            <ImageListItemBar
                            title={item.drink}
                            actionIcon={
                                <div className="links">
                                    <div className="storeChange">
                                    
                                    </div>
                                </div>
                            }
                            />
                            </ImageListItem>
                        ))}
                    </ImageList></center>
                </AccordionDetails>
            </Accordion>
        
        </div>
    );
}