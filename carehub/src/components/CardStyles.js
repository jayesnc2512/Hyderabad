import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
    card: {
      marginBottom: theme.spacing(2),
    },
    fullWidthCard: {
      width: '100%',
    },
  }));

  export default useStyles;