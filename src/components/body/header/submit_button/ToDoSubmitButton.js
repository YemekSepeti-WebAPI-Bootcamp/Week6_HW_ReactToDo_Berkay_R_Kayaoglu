import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function ToDoSubmitButton({ handleSubmit }) {
    const classes = useStyles();

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                onClick={handleSubmit}
            >
                Save
      </Button>
        </div>
    );
}

export default ToDoSubmitButton;
