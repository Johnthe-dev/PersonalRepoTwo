import styles from './TaskListItem.module.css'

const TaskListItem = ({tabIndex})=>{
    return (
        <button className={[styles.taskListItemBlueActive]} tabIndex={tabIndex}>
                Test Item 1
        </button>
    )
}

export default TaskListItem