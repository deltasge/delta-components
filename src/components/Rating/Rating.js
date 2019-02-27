import React from 'react'
import PropTypes from 'prop-types'

import Rating from 'react-rating'

import withStyles from '@material-ui/core/styles/withStyles'
import StarBorderIcon from '@material-ui/icons/StarBorderOutlined'
import StarIcon from '@material-ui/icons/Star'

console.log(Rating)

export const styles = () => ({
  icon: {
    color: 'rgb(255, 204, 0)'
  }
})

const RatingComponent = props => {
  const { rating, classes, ...otherProps } = props
  return (
    <Rating
      initialRating={rating}
      emptySymbol={<StarBorderIcon />}
      fullSymbol={<StarIcon className={classes.icon} />}
      {...otherProps}
    />
  )
}

RatingComponent.defaultValue = {
  rating: 0
}

RatingComponent.propTypes = {
  rating: PropTypes.number,
  name: PropTypes.string
}

export default withStyles(styles)(RatingComponent)
