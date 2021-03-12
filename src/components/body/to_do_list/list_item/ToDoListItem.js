import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor:'#fff'
    },
}));

const ToDoListItem = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ListItem>
                <ListItemText primary={props.content} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => { props.onDelete(props.id) }} >
                        X
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    );
}


export default ToDoListItem;