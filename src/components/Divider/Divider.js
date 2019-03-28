import React from 'react'
import PropTypes from 'prop-types'

import defaultStyles from './styles'

/**
 * Create a simple and beautiful divisor with 3 icon in page.
 */
const Divider = ({ icon: Icon, lineLeftStyle, lineRightStyle, rootStyle, iconStyle }) => {
  return (
    <div style={{ ...defaultStyles.root, ...rootStyle }}>
      <span style={{ ...defaultStyles.line, ...lineLeftStyle }} />
      <Icon fontSize={'small'} style={{ ...iconStyle }} />
      <Icon fontSize={'large'} style={{ ...iconStyle }} />
      <Icon fontSize={'small'} style={{ ...iconStyle }} />
      <span style={{ ...defaultStyles.line, ...lineRightStyle }} />
    </div>
  )
}

Divider.defaultProps = {
  lineLeftStyle: {
    marginRight: 20,
    width: '25%'
  },
  lineRightStyle: {
    marginLeft: 20,
    width: '25%'
  },
  iconStyle: {
    color: '#7f8c8d'
  },
  rootStyle: {
    margin: '20px 0'
  }
}

Divider.propTypes = {
  /** Style to root element */
  rootStyle: PropTypes.object,
  /** Style applied to line left */
  lineLeftStyle: PropTypes.object,
  /** Style applied to line right */
  lineRightStyle: PropTypes.object,
  /** Style applied to icon */
  iconStyle: PropTypes.object,
  /** Component for render icon on center line */
  icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.func
  ]).isRequired
}

export default Divider
