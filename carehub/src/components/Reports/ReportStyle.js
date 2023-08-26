// // ReportsPageStyles.js
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     marginTop: theme.spacing(4),
//   },
//   card: {
//     marginBottom: theme.spacing(2),
//   },
//   divider: {
//     margin: theme.spacing(2, 0),
//   },
// }));

// export default useStyles;
// ReportsPageStyles.js
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  
  card: {
    marginTop: theme.spacing(2),
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Increased shadow
    borderRadius: '12px', // Increased border radius
    padding: theme.spacing(1), // Added padding
    backgroundColor: 'white', 
  },
  submitButton: {
    marginTop: theme.spacing(3),
  },
 
}));

export default useStyles;
