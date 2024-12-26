import React from 'react'
import PropTypes from 'prop-types'

export default function SayGoodBye({ name }) {
  return (
    <div>
      See you later { name }!
    </div>
  )
}

SayGoodBye.propTypes = {
  name: PropTypes.string.isRequired,
}
