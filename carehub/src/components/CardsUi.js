import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  IconButton,
  Collapse,
  TextField,
  Grid
} from '@mui/material';
import { ExpandMore,Share, GetApp, Visibility,Delete } from '@mui/icons-material';
import useStyles from './CardStyles';

export const CardsUi = () => {

  const classes = useStyles();

  return (

    
    <div className={classes.root}>
    <Grid container spacing={2}>
      {/* First Card */}
      <Grid item xs={6}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6">Reminders</Typography>
            {/* Content for Card 1 */}
          </CardContent>
        </Card>
      </Grid>
      
      {/* Second Card */}
      <Grid item xs={6}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6">Appointments</Typography>
            {/* Content for Card 2 */}
          </CardContent>
        </Card>
      </Grid>
      
      {/* Full Width Card */}
      <Grid item xs={12}>
        <Card className={`${classes.card} ${classes.fullWidthCard}`}>
        <CardContent>
        <Typography variant="h6">Recent Reports</Typography>

      <div className='card-all'>
      <div className='card-items'>
      <Typography variant="body1">
      Report 1
      </Typography>
      <div className='icon-buttons'>
          <IconButton>
            <Share />
          </IconButton>
          <IconButton>
            <GetApp />
          </IconButton>
          <IconButton>
            <Visibility />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
        </div>
        </div>
        
      </div>
      </CardContent>
        </Card>
      </Grid>
    </Grid>
  </div>
  )
}
export default CardsUi;