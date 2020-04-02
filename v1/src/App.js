import React from 'react';
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

//Page
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff'
    },
    typography: {
      useNextVariants: true
    },
    form:{
      textAlign: 'center',
    },
    image:{
      maxWidth:130,
    },
    title:{
      marginBottom: 20,
    },
    textField:{
      margin: '10px auto 10px auto' 
    },
    button:{
      marginTop: "20px",
      position: 'relative'
    },
    customError:{
      color:'red',
      fontSize: '0.8rem',
      marginTop: 10
    },
    circularProgress:{
      position: 'absolute'
  
    }
  }
})

function App() {
  
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
      <Router>
        
      <div>
             
        <Switch>
           <Route exact path='/' component={home} />
           <Route exact path='/login' component={login} />
           <Route exact path='/signup' component={signup} />
        </Switch>
      </div>
        
      </Router>
      
    </div>
    </MuiThemeProvider>
  );
}

export default App;
