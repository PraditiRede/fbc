import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: '50px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
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
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
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
    backgroundColor: '#f7f7f7',
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
    fontSize: '18px',
    fontWeight: 'bold',
    paddingTop: '10px',
    marginRight: '10px',
  },
  image: {
    padding: '10px',
  },
  imagefail: {
    paddingLeft: '15px',
  },
  author: {
    marginTop: '10px',
    fontSize: '16px',
    marginRight: '10px',
  },
  description: {
    marginTop: '15px',
    marginBottom: '15px',
    marginRight: '10px',
  },
  button: {
      backgroundColor: '#f2f2f2',
      marginLeft: '4px',
  },
  buttonbox: {
    // alignItems: 'right',
    position: 'absolute',
    right: '0',
    bottom: '0',
    padding: '15px',
  },
  container: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  form: {
    backgroundColor: '#f2f2f2',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textDecoration: 'none',
  },
  formin: {
    textDecoration: 'none',
    width: '100%',
    padding: '10px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  block: {
    backgroundColor: '#f2f2f2',
    width: '180px',
    height: '225px',
    // marginRight: '40px',
    // marginLeft: '40px',
    marginBottom: '20px',
    // display: 'inline',
  },
  section: {
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'flex',
    marginTop: '100px',
  },
  bname: {
    padding: '20px',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  searchby: {
    marginLeft: '20%',
  },
  uploadtitle: {
    marginTop: '200px',
    fontSize: '30px',
    marginRight: 'auto',
    marginLeft: 'auto',
    alignItems: 'center',
    width: '17%',
  },
  invalid: {
    marginTop: '50px',
    marginLeft: '48%',
    fontSize: '20px',
  },
}));