// Type rce to load whole snippets...

import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

//Components
import PrimarySearchAppBar from '../components/navbar'    // Navbar impoted
import Screams from '../components/screams'
// import Scream from '../components/comp2'


  
 

export class home extends Component {
 
    state = {
        screams: null
    }

    componentDidMount(){
        axios.get('/screams')
        .then(res=>{
            this.setState({
                screams: res.data,
            })
        })
        .catch(err => console.log(err))
    }


    render() {
        // const useStyles = makeStyles(theme => ({
        //     root: {
        //       flexGrow: 1,
        //     },
        //     paper: {
        //       padding: theme.spacing(2),
        //       textAlign: 'center',
        //       color: theme.palette.text.secondary,
        //     },
        //   }));
    // let recentScreameMarkup = this.state.screams ? (this.state.screams.map(scream => <p>{scream.body}</p>)) : <p>Loading...</p>   //Old Version(show only body)
    // Now we want a proper setup for screams
    let recentScreameMarkup = this.state.screams ? (this.state.screams.map(scream => <Screams key={scream.screamId} scream ={scream} />  )) : <p>Loading...</p>
    // const classes = useStyles();
        return (
            
   <div>
     <PrimarySearchAppBar />
       <div className="grid-root">
        <Grid container spacing={3}>
             <Grid xs={2} item sm={3}>
                <Hidden  smDown>
                     <Paper className="paper">smDown</Paper>
                 </Hidden>
             </Grid>
             <Grid item xs={8} sm={6}>
                 <Hidden xsDown>
                    <Paper >{recentScreameMarkup}</Paper>
                 </Hidden>         
             </Grid>
             <Grid item xs={2} sm={3}>
                 <Hidden smDown>
                     <Paper className="paper">Profile....</Paper>
                 </Hidden>
             </Grid>
        </Grid>
     </div>
      
  </div>

        )
    }
}

export default home
