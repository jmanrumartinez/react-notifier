import React from 'react'
import Notification, { notificationTypes } from './Notification'

export const ExampleComponent = () => {
  return (
    <div>
      <Notification
        title='Error'
        message='An error has ocurred'
        type={notificationTypes.error}
      />
      <Notification
        title='Info'
        message='Something was updated'
        type={notificationTypes.info}
      />
      <Notification
        title='Warning'
        message='Something went wrong'
        type={notificationTypes.warning}
      />
      <Notification
        title='Success'
        message='Something went well'
        type={notificationTypes.success}
      />
    </div>
  )
}
