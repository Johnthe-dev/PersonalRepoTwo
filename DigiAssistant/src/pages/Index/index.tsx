import React, { memo } from 'react'

import Box from '../../components/Box'
import logo from '../../logo.svg'

import Counter from './Counter'
import styles from './index.module.css'
import Layout from "@/components/Layout/Layout";
import TaskList from "@/components/TaskList/TaskList";

interface Props {}

const Index: React.FC<Props> = memo(() => {
  return (
    <Layout>
        <TaskList/>
      <Box>
          Here is a second box
      </Box>
      <Box>
        <Counter />
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
Index.displayName = 'Index'

export default Index
