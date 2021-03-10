import React, { createContext } from 'react'
import PropTypes from 'prop-types'

const NotifierContext = createContext()

const NotifierProvider = ({ children }) => {
  return <NotifierContext.Provider>{children}</NotifierContext.Provider>
}

NotifierProvider.propTypes = {
  children: PropTypes.node
}

export default NotifierProvider
