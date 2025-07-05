import React from 'react';
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Box
} from '@material-ui/core';

class RestaurantBar extends React.Component {
  render() {
    return (
      <div className="restaurant-sidebar">
        <Box mt={2} mb={2}>
          <Typography variant="h5" className="sidebar-title">
            <b><i>Restaurant ToolBar</i></b>
          </Typography>
        </Box>

        <List component="nav">
          <Link to={"/restaurant/home"} className="link">
            <ListItem button>
              <ListItemText primary="Home Page" />
            </ListItem>
            <Divider />
          </Link>

          <Link to={"/restaurant/information"} className="link">
            <ListItem button>
              <ListItemText primary="Restaurant Information" />
            </ListItem>
            <Divider />
          </Link>

          <Link to={"/restaurant/menu"} className="link">
            <ListItem button>
              <ListItemText primary="Menu" />
            </ListItem>
            <Divider />
          </Link>

          <Link to={"/restaurant/order"} className="link">
            <ListItem button>
              <ListItemText primary="My Active Orders" />
            </ListItem>
            <Divider />
          </Link>

          <Link to={"/restaurant/history"} className="link">
            <ListItem button>
              <ListItemText primary="My Order History" />
            </ListItem>
            <Divider />
          </Link>
        </List>
      </div>
    );
  }
}

export default RestaurantBar;
