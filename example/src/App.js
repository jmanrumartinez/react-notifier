import React from 'react'

import { useNotify, Notification } from 'react-notifier'
import 'react-notifier/dist/index.css'

const App = () => {
  const { notify } = useNotify()

  return (
    <div>
      <button
        onClick={() =>
          notify({
            type: Notification.types.success,
            message: 'Success notification from Button!'
          })
        }
      >
        Appear Success Notification
      </button>
      <button
        onClick={() =>
          notify({
            type: Notification.types.info,
            message: 'Info notification from Button!'
          })
        }
      >
        Appear Info Notification
      </button>
      <button
        onClick={() =>
          notify({
            type: Notification.types.warning,
            message: 'Warning notification from Button!'
          })
        }
      >
        Appear Warning Notification
      </button>
      <button
        onClick={() =>
          notify({
            type: Notification.types.error,
            message: 'Error notification from Button!'
          })
        }
      >
        Appear Error Notification
      </button>
    </div>
  )
}

export default App
