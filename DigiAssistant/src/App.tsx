import React, { memo } from 'react'
import Index from './pages/Index'

import ErrorBoundary from './components/ErrorBoundary'

const App: React.FC = memo(() => (
    <Index />
))
App.displayName = 'App'
export default App
