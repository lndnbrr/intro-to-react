import React from 'react';
import PropTypes from 'prop-types';

export default function SayHello({ name, greeting = "what up doe!" }) {
  return (
    <>
    <p> Good Afternoon, {name}! </p>
    <p> When I see you out and about, this is how I will greet you: {greeting}</p>
    </>
  )
}

SayHello.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.string.isRequired,
}
