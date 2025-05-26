import type { PropsWithChildren } from 'react'
import React from 'react'

import styles from './Layout.module.css'

export const Layout: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
    return (
        <main className={styles.layout} {...rest}>
            {children}
        </main>
    )
}
