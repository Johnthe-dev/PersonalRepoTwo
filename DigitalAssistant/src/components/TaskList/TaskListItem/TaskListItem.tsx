import styles from './TaskListItem.module.css'

const tabColors = {
    red: styles.taskListItemRed,
    blue: styles.taskListItemBlue,
    green: styles.taskListItemGreen,
    purple: styles.taskListItemPurple,
    yellow: styles.taskListItemYellow,
} as const

interface iTaskListItem {
    tabIndex: number,
    color: typeof tabColors[keyof typeof tabColors],
    label: string
}

const TaskListItem = ({tabIndex, color, label}: iTaskListItem)=>{
    return (
        <button className={tabColors[color]} tabIndex={tabIndex}>
            {label}
        </button>
    )
}

export default TaskListItem