import { NOTIFIER_TYPES } from '..'
import useNotifierContext from './useNotifierContext'

const useNotifyRemove = () => {
  const { dispatch } = useNotifierContext()

  const remove = ({ id }) =>
    dispatch({
      type: NOTIFIER_TYPES.REMOVE,
      payload: { id }
    })

  return { remove }
}

export default useNotifyRemove
