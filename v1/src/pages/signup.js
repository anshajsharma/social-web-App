// import React, { Component } from 'react'
// import withStyle from '@material-ui/core/styles/withStyles';
// import PropTypes from 'prop-types'
// import appIcon from '../images/logo.png'
// import axios from  'axios'
// import {Link} from 'react-router-dom'
// //MUI 
// import Grid from '@material-ui/core/Grid'
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'
// import CircularProgress from '@material-ui/core/CircularProgress'
// const styles= (theme)=> ({
//     ...theme                           // As same style is shared by login ans signup.. I copied that in global variable 'theme' in app.js
// })

 
// // const handleChange = (event) =>{
// //   console.log('Hi');
// // }

// export class signup extends Component {
//   constructor(){
//     super();
//     this.state={
//       email: '',
//       password:'',
//       confirmPassword:'',
//       handle:'',
//       loading:false,
//       errors:{}
//     }
//   }
//   handleSubmit = (event) =>{
//     // Stop default form submit behaviour and stop reloading of page
//     event.preventDefault();
//     this.setState({
//       loading: true
//     });
//     const newUserData = {
//       email:this.state.email,
//       password:this.state.password,
//       confirmPassword:this.state.confirmPasswrod,
//       handle:this.state.handle
//     }
//     axios.post('/signUp' , newUserData)
//     .then(res =>{
//       console.log(res.data);
//       localStorage.setItem('FBIdToken'  , `Barer ${res.data.token}`);       // Saving tokenId locally in browser so that if we close window it can be recovered
//       this.setState({
//         loading:false
//       })
//       this.props.history.push('/')          //Reirects to home page........
//     })
//     .catch(err =>{
//       this.setState({
//         errors:err.response.data,
//         loading:false
//       })
//     })

//   }
//   handleChange = (event) =>{
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }
//   render() {
//     const { classes } = this.props;
//     const {errors ,loading } = this.state;
//         return (
//       <Grid container className={classes.form}>
//         <Grid item sm />
//         <Grid item sm xs={12}>
//           <img className={classes.image} src={appIcon} alt="social Image" />
//           <Typography variant="h3" className={classes.title} >
//             Signup
//           </Typography>
//           <form noValidate onSubmit={this.handleSubmit}>
//             {/* // in TextField helperText is used to give hints or set errors */}
//             <TextField id="email" name="email" type="email" label="Email" className={classes.textField} helperText={errors.email}
//               error={errors.email?true:false}  value={this.state.email} onChange={this.handleChange} fullWidth />
//             <TextField id="password" name="password" type="password" label="Password" className={classes.textField} helperText={errors.password}
//                error={errors.password?true:false} value={this.state.password} onChange={this.handleChange} fullWidth />
//             <TextField id="confirmPassword" name="confirmPassword" type="password" label="Confirm Password" className={classes.textField} helperText={errors.password}
//                error={errors.confirmPassword?true:false} value={this.state.confirmPassword} onChange={this.handleChange} fullWidth />
//             <TextField id="userHandle" name="userHandle" type="text" label="Handle" className={classes.textField} helperText={errors.handle}
//                error={errors.handle?true:false} value={this.state.handle} onChange={this.handleChange} fullWidth />
//              {errors.err && (
//                <Typography variant="body2" className={classes.customError}>{errors.err}</Typography>
//              ) }
//             <Button type="submit" variant="contained" color="primary" className={classes.button} disabled={loading}>
//               Signup
//               {loading && (
//               <CircularProgress size={30} className={classes.circularProgress}/>
//             )}
//               </Button>
//             <br/>
//             <small>Already have an account ? sign in <Link to="/login">here</Link> </small>
//           </form>
//         </Grid>
//         <Grid item sm />
//       </Grid>
//     )
//   }
// }

// signup.propTypes = {
//   classes: PropTypes.object.isRequired
// }

// export default withStyle(styles)(signup);
