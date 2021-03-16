import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontSize: '50px',
    marginTop: '50px',
    marginLeft: '43%',
    marginRight: 'auto',
    alignItems: 'center',
  },
  block: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '30%',
    margin: '10px',
  },
}));
