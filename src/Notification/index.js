import React, { createRef, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { CheckCircle, Info, WarningCircle, Warning, X } from 'phosphor-react'

import './style.scss'
import { capitalize } from '../utils'
import { useNotifyRemove } from '../NotifierProvider'

const baseClass = 'notifier-notification'
const notificationTypes = {
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

const Notification = ({
  id,
  title,
  message,
  type = notificationTypes.info
}) => {
  const notificationClassName = cx([baseClass, `${baseClass}-${type}`])
  const { remove } = useNotifyRemove()
  const [progressBarWidth, setProgressBarWidth] = useState(0)

  const handleClickClose = () => {
    remove({ id })
  }

  useEffect(() => {
    const interval = setInterval(
      () => setProgressBarWidth((prevValue) => prevValue + 25),
      500
    )

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progressBarWidth >= 125) {
      remove({ id })
    }
  }, [progressBarWidth])

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
      <div
        className={`${baseClass}-rightIcon`}
        onClick={() => handleClickClose()}
      >
        <X size={18} color='white' />
      </div>
      <div
        className={`${baseClass}-progressBar`}
        style={{ width: `${progressBarWidth}%` }}
      />
    </div>
  )
}
Notification.propTypes = {
  type: PropTypes.oneOf(Object.values(notificationTypes)),
  title: PropTypes.string,
  message: PropTypes.string
}

Notification.types = notificationTypes

export default Notification
