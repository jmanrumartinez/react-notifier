import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { NotifierProvider } from 'react-notifier'
import App from './App'

ReactDOM.render(
  <NotifierProvider>
    <App />
  </NotifierProvider>,
  document.getElementById('root')
)
