export interface iAssistantData {
    position: iLayoutData,
    data: iWidgetData
    id: string
}


export interface iLayoutData {
    startingPosition: {x:number, y:number},
    endingPosition: {x:number, y:number},
    color: 'purple'|'red'|'green'|'blue'|'yellow',
}
export interface iWidgetData {
    widgetType: 'note'|'splitTimer'|'todoList'|'pieTimer'|'taskTimer',
    widgetData: iNoteData | iSplitTimerData | iTodoListData | iPieTimerData | iTaskTimerData
}

interface iNoteData {
    content: string
}

interface iSplitTimerData {
    totalTime: number,
    splitTime: number
}

interface iTodoListData {
    todoItems: {
       icon?: string
       position: number,
       description: string,
       done: boolean
    }[]
}

interface iPieTimerData {
    timeRemaining: {
        initial: number,
        current: number
    }
}

interface iTaskTimerData {
    tasks: {
        title: string,
        timeRemaining: {
            initial: number,
            current: number
        }
    }[]
}