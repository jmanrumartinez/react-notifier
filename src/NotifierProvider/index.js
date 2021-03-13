import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import Notification from '../Notification'
import { generateUuid } from '../utils'

const NOTIFIER_TYPES = {
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

const NotifierContext = createContext()

const NotifierProvider = ({ children }) => {
  const [notifications, dispatch] = useReducer(notifierReducer, [])

  return (
    <NotifierContext.Provider value={{ dispatch }}>
      {children}
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          id={notification.id}
          title={notification.title}
          message={notification.message}
          type={notification.type}
        />
      ))}
    </NotifierContext.Provider>
  )
}

NotifierProvider.propTypes = {
  children: PropTypes.node
}

export default NotifierProvider

const useNotifierContext = () => {
  const context = useContext(NotifierContext)
  if (!context)
    throw new Error('useNotify should be used within a NotifierProvider')

  return context
}

// TODO: A function to add Notification to the queue to be displayed
export const useNotify = () => {
  const context = useNotifierContext()

  const notify = ({ type, title, message }) =>
    context.dispatch({
      type: NOTIFIER_TYPES.ADD,
      payload: { type, title, message }
    })

  return { notify }
}

export const useNotifyRemove = () => {
  const context = useNotifierContext()

  const remove = ({ id }) =>
    context.dispatch({
      type: NOTIFIER_TYPES.REMOVE,
      payload: { id }
    })

  return { remove }
}
