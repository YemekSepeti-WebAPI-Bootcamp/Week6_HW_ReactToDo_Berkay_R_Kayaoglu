
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function ToDoInput({ handleChange, value }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="To Do Item" variant="outlined" value={value}
                onChange={handleChange}  />
            </form>
        </div>
    );
}

export default ToDoInput;
