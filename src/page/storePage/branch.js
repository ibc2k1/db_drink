import ImageList from '@material-ui/core/ImageList';
import $ from 'jquery';
import React from 'react';
import { withStyles } from '@material-ui/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './storeintro.css'

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


export default function Branch() {
    const classes = withStyles(Styles);
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    var pathname = window.location.pathname.split( '/' );

    var store = pathname[2];

    var num = 0;
    const storeData = [];
    $.ajax(
    {
        url: 'http://100.24.235.73/api_branch.php ',
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
                            name:item.B_Name,
                            tel:item.Phone,
                            map:item.Google_Map,
                            block:item.Area,
                            location:item.Address,
                            mont:item.Mon,
                            tuet:item.Tue,
                            wedt:item.Wed,
                            thut:item.Thu,
                            frit:item.Fri,
                            satt:item.Sat,
                            sunt:item.Sun,
                        }
                        num=num+1;
                        storeData.push(inner);
                    }
                });
            }
        }
    });

    console.log(store)  


    return (
        <div className={classes.root}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
            <Typography className={classes.heading}>????????????</Typography>
            <Typography className={classes.secondaryHeading}>(??????)</Typography>
            </AccordionSummary>

            <AccordionDetails>
                <center><ImageList sx={{ width:"80%", height: "90%" }} cols={2} gap={60}>

                    {storeData.map((item) => (
                        <div>
                            <p>{item.name}</p>
                            <p>??????:{item.tel}</p>
                            <p>??????:{item.location}</p>
                            <p>????????????:</p>
                            <p>?????????:{item.mont}     ?????????:{item.tuet}     ?????????:{item.wedt}</p>
                            <p>?????????:{item.thut}     ?????????:{item.frit}     ?????????:{item.satt}     ?????????:{item.sunt}</p>
                            <a href={item.map}>???????????????</a>
                        </div>
                    ))}
                </ImageList ></center>
            </AccordionDetails>
        </Accordion>
        
        </div>
    );
}