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
    width: '60%',
  },
  title: {
    fontSize: '50px',
    marginTop: '50px',
    marginLeft: '20px',
    alignItems: 'center',
    color: '#00688B',
  },
  block: {
    float: 'left',
    width: '150px',
    height: '320px',
    padding: '2px',
  },
}));
