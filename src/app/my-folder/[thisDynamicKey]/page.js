import PropTypes from "prop-types";

// you may only have one dynamic file per directory

export default function DynamicRoute({ params }) {
  
  return <div>ID = {params.thisDynamicKey}</div>;
}

DynamicRoute.propTypes = {
  params : PropTypes.string.isRequired, 
}
