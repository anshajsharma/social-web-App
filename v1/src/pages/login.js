import React, { Component } from 'react'
import withStyle from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types'
import appIcon from '../images/logo.png'
import axios from  'axios'
import {Link} from 'react-router-dom'
//MUI 
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
const styles={
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
};

 
// const handleChange = (event) =>{
//   console.log('Hi');
// }

export class login extends Component {
  constructor(){
    super();
    this.state={
      email: '',
      password:'',
      loading:false,
      errors:{}
    }
  }
  handleSubmit = (event) =>{
    // Stop default form submit behaviour and stop reloading of page
    event.preventDefault();
    this.setState({
      loading: true
    });
    const userData = {
      email:this.state.email,
      password:this.state.password
    }
    axios.post('/signIn' , userData)
    .then(res =>{
      console.log(res.data);
      this.setState({
        loading:false
      })
      this.props.history.push('/')          //Reirects to home page........
    })
    .catch(err =>{
      this.setState({
        errors:err.response.data,
        loading:false
      })
    })

  }
  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    const { classes } = this.props;
    const {errors ,loading } = this.state;
        return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm xs={12}>
          <img className={classes.image} src={appIcon} alt="social Image" />
          <Typography variant="h3" className={classes.title} >
            Login
           
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            {/* // in TextField helperText is used to give hints or set errors */}
            <TextField id="email" name="email" type="email" label="Email" className={classes.textField} helperText={errors.email}
              error={errors.email?true:false}  value={this.state.email} onChange={this.handleChange} fullWidth />
            <TextField id="password" name="password" type="password" label="Password" className={classes.textField} helperText={errors.password}
               error={errors.password?true:false} value={this.state.password} onChange={this.handleChange} fullWidth />
             {errors.err && (
               <Typography variant="body2" className={classes.customError}>{errors.err}</Typography>
             ) }
            <Button type="submit" variant="contained" color="primary" className={classes.button} disabled={loading}>
              Login
              {loading && (
              <CircularProgress size={30} className={classes.circularProgress}/>
            )}
              </Button>
            <br/>
            <small>don't have an account ? sign up<Link to="/signup">here</Link> </small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    )
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyle(styles)(login);
