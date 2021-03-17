import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '0px',
    height: '100%',
    position: 'relative',
    marginTop: '20px',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',

  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10px',
    // boxShadow: '0px 0px 5px #000000',
    borderRadius: '10px',
  },
  button: {
    margin: '10px',
    backgroundColor: '#f7f7f7',
    marginLeft: 'auto',
    marginRight: 'auto',
    bottom: '0',
  },
});
