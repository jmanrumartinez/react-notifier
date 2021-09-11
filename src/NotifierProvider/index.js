import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import Notification from '../Notification'
import { generateUuid } from '../utils'
import useNotify from './hooks/useNotify'
import useNotifyRemove from './hooks/useNotifyRemove'

export const NOTIFIER_TYPES = {
  ADD: 'ADD',
  REMOVE: 'REMOVE'
}

const notifierReducer = (state, action) => {
  const { type: actionType, payload } = action

  switch (actionType) {
    case NOTIFIER_TYPES.ADD:
      return [
        ...state,
        {
          id: generateUuid(),
          type: payload.type,
          title: payload.title,
          message: payload.message
        }
      ]

    case NOTIFIER_TYPES.REMOVE:
      return state.filter((notification) => notification.id !== payload.id)
    default:
      throw new Error('Action type not supported for notifierReducer')
  }
}

export const NotifierContext = createContext()

const NotifierProvider = ({ children }) => {
  const [notifications, dispatch] = useReducer(notifierReducer, [])

  return (
    <NotifierContext.Provider value={{ dispatch }}>
      {children}
      <div className='notification-container'>
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            id={notification.id}
            title={notification.title}
            message={notification.message}
            type={notification.type}
          />
        ))}
      </div>
    </NotifierContext.Provider>
  )
}

NotifierProvider.propTypes = {
  children: PropTypes.node
}

export { useNotify, useNotifyRemove }
export default NotifierProvider
