import React from 'react'
import NotifierProvider from './NotifierProvider'

export const ExampleComponent = () => {
  return (
    <NotifierProvider>
      <div>
        <button>Appear Success Notification</button>
        <button>Appear Warning Notification</button>
        <button>Appear Info Notification</button>
        <button>Appear Success Notification</button>
      </div>
    </NotifierProvider>
  )
}
