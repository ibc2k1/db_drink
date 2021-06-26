import $ from 'jquery';
import React from 'react';
import { withStyles } from '@material-ui/styles';

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

export default function Elseteafact() {
    var pathname = window.location.pathname.split( '/' );

    var drink = pathname[2];

    const drinkData = [];
    $.ajax(
    {
        url: ' http://100.24.235.73/api/drink/othertea_fact.php    ',
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
            <div className="adrinkfact">
            <h2>原料:&emsp;</h2>
                

                    {drinkData.map((item) => (
                        
                        <div>
                            <h2>{item.fact}&emsp;</h2>
                        </div>
                    ))}
                
                </div>

        
        </div>
    );
}