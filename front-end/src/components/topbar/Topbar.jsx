import React from 'react';
import {
  AppBar, Toolbar, Typography, Grid
} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './TopBar.css';
import UserMenu from "./UserMenu";
const axios = require('axios').default;

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#ef5350'
    }
  }
});

class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: this.props.view
    };
    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidUpdate() {
    if (this.state.view !== this.props.view) {
      this.setState({ view: this.props.view });
    }
  }

  logoutUser() {
    let type = this.props.currentUser.type;
    this.props.changeUser(undefined, "logout");
    axios.post("/api/" + type + "/logout", {}).then(
      () => {
        console.log("Successfully logged out");
      }
    ).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar className="topbar" position="absolute" color="secondary" elevation={0}>
          <Toolbar style={{ width: '100%' }}>
            {this.props.currentUser ? (
              <Grid container alignItems="center" justifyContent="space-between">
                
                {/* Left - Username */}
                <Grid item style={{ paddingLeft: '20px' }}>
                  <Typography variant="h6" style={{ color: 'white', fontWeight: '600' }}>
                    Hi {this.props.currentUser.userName}
                  </Typography>
                </Grid>

                {/* Center - View */}
                <Grid item xs style={{ textAlign: 'center' }}>
                  <Typography variant="h6" style={{ color: 'white', fontWeight: '600' }}>
                    {this.state.view}
                  </Typography>
                </Grid>

                {/* Right - My Account */}
                <Grid item style={{ marginLeft: 'auto', paddingRight: '30px' }}>
                  <UserMenu currentUser={this.props.currentUser} logoutUser={this.logoutUser} />
                </Grid>
              </Grid>
            ) : (
              <Typography variant="h4"><i><b>Please login</b></i></Typography>
            )}
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default Topbar;
