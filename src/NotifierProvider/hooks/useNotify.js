import { NOTIFIER_TYPES } from '..'
import useNotifierContext from './useNotifierContext'

const useNotify = () => {
  const { dispatch } = useNotifierContext()

  const notify = ({ type, title, message }) =>
    dispatch({
      type: NOTIFIER_TYPES.ADD,
      payload: { type, title, message }
    })

  return { notify }
}

export default useNotify
