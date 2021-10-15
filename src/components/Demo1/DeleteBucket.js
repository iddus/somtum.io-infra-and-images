import PropTypes from "prop-types"; // ES6
import { Fragment } from "react";
// https://www.npmjs.com/package/prop-types
import Modal from "../UI/Modal";

const DeleteBucket = ({ showDeleteModalHandler, content }) => {
  return (
    <Fragment>
      <Modal toggle={showDeleteModalHandler}>{content}</Modal>
    </Fragment>
  );
};

DeleteBucket.propTypes = {
  showDeleteModalHandler: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default DeleteBucket;
