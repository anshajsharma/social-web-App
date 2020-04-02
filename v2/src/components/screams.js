import React, { Component } from 'react'
import withStyle from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
const style = {
    

}
const useStyles = {
    card: {
        display: 'flex',
        marginBottom: 20,
    },
    image:{
        minWidth: 200,
    },
    content:{
        padding: 25,
        objectFit: 'cover',
    }
  };

export class screams extends Component {
    render() {
        const {classes , scream : {body,createdAt,userImage,commentsCount,likesCount,screamId,userHandle} } =  this.props;
        dayjs.extend(relativeTime);
      
        return (
            
                <Card className={classes.card}>
                    <CardMedia
                    image={userImage}
                    className = {classes.image}
                    title="Profile Image" 
                    />
                    <CardContent className={classes.content}>
                        <Typography variant="h5" component={Link} to={`/users/${userHandle}`} color="primary">{userHandle}</Typography>
                        <Typography variant="body2" color="textSecondary">{dayjs(createdAt).fromNow()}</Typography>
                        <Typography variant="body1" >{body}</Typography>
                    </CardContent>
                </Card>
            
        )
    }
}

export default (withStyle(useStyles)(screams))
