import PropTypes from "prop-types"; // ES6
import { Fragment } from "react";
// https://www.npmjs.com/package/prop-types
import Modal from "../UI/Modal";

const UpdateBucket = ({ showUpdateModalHandler, content }) => {
  return (
    <Fragment>
      <Modal toggle={showUpdateModalHandler}>{content}</Modal>
    </Fragment>
  );
};

UpdateBucket.propTypes = {
  showUpdateModalHandler: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default UpdateBucket;
