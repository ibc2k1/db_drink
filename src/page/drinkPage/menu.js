import React from 'react';
import { withStyles } from '@material-ui/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import $ from "jquery";
import { Link } from "react-router-dom";
import Blacktea from "./blacktea";

const styles =(theme) =>( ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = withStyles(styles);
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const names = [];

  $.ajax(
    {
      url: `http://100.24.235.73/api_type.php`,
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
              title : item.type,
              chname : item.c_name,
            }
            names.push(inner);
          });
        }
      }
    });


  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label"></InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <div className="links">
            <div className="storeChange">
               
            {names.map((item) => (
              <Link to={`/all${item.title}`}>
                <MenuItem value={item.title} component={Link} to={`/all${item.title}`} >
                  {item.chname}
                </MenuItem>
                </Link>
            ))}
            
          </div>
        </div>
          
        </Select>
      </FormControl>
    </div>
  );
}
