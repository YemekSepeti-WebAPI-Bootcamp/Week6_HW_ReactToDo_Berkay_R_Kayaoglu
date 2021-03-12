import BodyHeader from "./header/BodyHeader";
import BodyList from "./to_do_list/BodyList";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React from 'react';

const Body = () => {

    const [tasks, setTasks] = React.useState([...JSON.parse(localStorage.getItem('toDoTasks'))] || ['Example Task 1', 'Example Task 2']);

    // Similar to componentDidMount and componentDidUpdate:
    React.useEffect(() => {
        localStorage.setItem('toDoTasks', JSON.stringify(tasks))
    }, [tasks]);

    const handleSubmit = task => {

        setTasks([...tasks, task])
        //destruct and add new task
    }

    const handleDelete = (index) => {
        const newTask = [...tasks]; //destruct object and assign array
        //console.log(newTask)
        newTask.splice(index, 1);
        //console.log(newTask)
        setTasks(newTask)
    }

    return (
        <div>
            <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc', height: '70vh' }}>
                <Grid  >
                    <Grid item xs={12} >
                        <BodyHeader onFormSubmit={handleSubmit} />
                        <hr />
                    </Grid>
                    <Grid item xs={12}>
                        <BodyList tasks={tasks} onDelete={handleDelete} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Body;