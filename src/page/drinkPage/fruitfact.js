import ImageList from '@material-ui/core/ImageList';
import $ from 'jquery';
import React from 'react';
import { withStyles } from '@material-ui/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

export default function Fruitfact() {
    var pathname = window.location.pathname.split( '/' );

    var drink = pathname[2];

    const drinkData = [];
    $.ajax(
    {
        url: ' http://54.88.4.245/api/drink/fruit_fact.php ',
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
                            fact:item.I_Name,
                        }
                        drinkData.push(inner);
                    }
                });
            }
        }
    });

    const classes = withStyles(Styles);

    return (
        <div className={classes.root}>
            <h4>原料:</h4>
                <ImageList className="fact" sx={{ width:"23%", height:"20%" }} cols={4}>

                    {drinkData.map((item) => (
                        <div>
                            <p>{item.fact} </p>
                        </div>
                    ))}
                </ImageList >
            

        
        </div>
    );
}