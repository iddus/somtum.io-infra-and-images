import PropTypes from "prop-types"; // ES6
import { Fragment } from "react";
// https://www.npmjs.com/package/prop-types

const Template = ({ prop1, prop2 }) => {
  return (
    <Fragment>
      <p>hello</p>
    </Fragment>
  );
};

Template.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.string,
};

export default Template;
