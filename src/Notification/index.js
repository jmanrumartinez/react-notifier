import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { CheckCircle, Info, WarningCircle, Warning, X } from 'phosphor-react'

import './style.scss'
import { capitalize } from '../utils'

const baseClass = 'notifier-notification'
export const notificationTypes = {
  error: 'error',
  warning: 'warning',
  success: 'success',
  info: 'info'
}
const iconProps = { color: 'white', size: 28 }
const typesIcons = {
  [notificationTypes.error]: <WarningCircle {...iconProps} />,
  [notificationTypes.warning]: <Warning {...iconProps} />,
  [notificationTypes.success]: <CheckCircle {...iconProps} />,
  [notificationTypes.info]: <Info {...iconProps} />
}

const Notification = ({ title, message, type = notificationTypes.info }) => {
  const notificationClassName = cx([baseClass, `${baseClass}-${type}`])

  return (
    <div className={notificationClassName}>
      <div className={`${baseClass}-leftIcon`}>
        <div className={`${baseClass}-leftIcon-container`}>
          {typesIcons[type]}
        </div>
      </div>
      <div className={`${baseClass}-textContainer`}>
        <h4 className={`${baseClass}-textContainer-title`}>
          {title || capitalize(type)}
        </h4>
        <p className={`${baseClass}-textContainer-message`}>{message}</p>
      </div>
      <div className={`${baseClass}-rightIcon`}>
        <X size={18} color='white' />
      </div>
    </div>
  )
}
Notification.propTypes = {
  type: PropTypes.oneOf(Object.values(notificationTypes)),
  title: PropTypes.string,
  message: PropTypes.string
}

export default Notification
