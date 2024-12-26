import PropTypes from "prop-types"


export default function NestedDynamicKey({ params }) {
  return (
    
    <div>{params.anotherDK}</div>
  )
}

NestedDynamicKey.propTypes = {
  params : PropTypes.string.isRequired,
}
