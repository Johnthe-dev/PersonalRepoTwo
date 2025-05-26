import styles from './TaskList.module.css'
import TaskListItem from "./TaskListItem/TaskListItem";

export const TaskList = ()=>{
    return (
        <div className={styles.taskList}>
            <TaskListItem tabIndex={0} color={'red'} label={'index 1'}/>
            <TaskListItem tabIndex={1} color={'blue'} label={'index 1'}/>
            <TaskListItem tabIndex={2} color={'purple'} label={'index 1'}/>
            <TaskListItem tabIndex={3} color={'green'} label={'index 1'}/>
            <TaskListItem tabIndex={4} color={'yellow'} label={'index 1'}/>
            <TaskListItem tabIndex={5} color={'red'} label={'index 1'}/>
            <TaskListItem tabIndex={6} color={'blue'} label={'index 1'}/>

        </div>
    )
}