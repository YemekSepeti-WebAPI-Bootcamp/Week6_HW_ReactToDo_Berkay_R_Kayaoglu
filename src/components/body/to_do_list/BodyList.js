import ToDoListItem from "./list_item/ToDoListItem";
import List from '@material-ui/core/List';


const BodyList = (props) => {
    const todos = props.tasks.map((todo, index) => {
        return <ToDoListItem content={todo} key={index} id={index} onDelete={props.onDelete} />
    })
    return (
        <List>
            {todos}
        </List>
    );
}

export default BodyList;