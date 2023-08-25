import { RoundedCorner } from '@material-ui/icons';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    pageContainer: {
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden'
      },
      background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: "url('/images/Bg.png')", // Adjust the path
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.2, // Set the desired opacity
        overflow: 'hidden',
      },
  container: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ccc', // Add a box border
    boxShadow: '0 8px 16px rgba(0, 0, 255, 0.2)', 
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '10px'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
    
  },
  submitButton: {
    marginTop: theme.spacing(3),
  },
}));
export default useStyles;
