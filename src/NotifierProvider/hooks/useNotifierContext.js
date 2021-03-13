import { useContext } from 'react'
import { NotifierContext } from '../'

const useNotifierContext = () => {
  const context = useContext(NotifierContext)
  if (!context)
    throw new Error('useNotify should be used within a NotifierProvider')

  return context
}

export default useNotifierContext
