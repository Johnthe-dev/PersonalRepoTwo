import React, { memo } from 'react'

import {Box} from '../../components/Box'

import styles from './Assistant.module.css'
import {Layout} from "../../components/Layout";
import {TaskList} from "../../components/TaskList";

interface Props {

}

const Assistant: React.FC<Props> = memo(() => {
    return (
        <Layout>
            <TaskList/>
            <Box>
                Here is a second box
            </Box>
            <Box>
                Here is a fourth box
            </Box>
            <Box>
                Here is a fifth box
            </Box>
        </Layout>
    )
})
Assistant.displayName = 'Assistant'

export default Assistant