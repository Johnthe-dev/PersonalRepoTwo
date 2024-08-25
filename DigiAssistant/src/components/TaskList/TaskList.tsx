import styles from './TaskList.module.css'
import TaskListItem from "@/components/TaskListItem/TaskListItem";

const TaskList = ()=>{
    return (
        <div className={styles.taskList}>
            <TaskListItem tabIndex={0}/>
            <TaskListItem tabIndex={1}/>
            <TaskListItem tabIndex={2}/>
            <TaskListItem tabIndex={3}/>
            <TaskListItem tabIndex={4}/>
            <TaskListItem tabIndex={5}/>
            <TaskListItem tabIndex={6}/>

        </div>
    )
}
export default TaskList