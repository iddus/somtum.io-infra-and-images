import { Fragment, useState } from "react";
import UpdateBucket from "./UpdateBucket";
import DeleteBucket from "./DeleteBucket";

const ListBuckets = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const showUpdateModalHandler = () => {
    setShowUpdateModal(!showUpdateModal);
  };

  const showDeleteModalHandler = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  return (
    <Fragment>
      {showUpdateModal && (
        <UpdateBucket
          showUpdateModalHandler={showUpdateModalHandler}
          content="update"
        ></UpdateBucket>
      )}
      {showDeleteModal && (
        <DeleteBucket
          showDeleteModalHandler={showDeleteModalHandler}
          content="delete"
        ></DeleteBucket>
      )}
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Bucket name</th>
            <th scope="col">Location type</th>
            <th scope="col">Location</th>
            <th scope="col">Storage class</th>
            <th scope="col">Created on</th>
            <th scope="col">Updated on</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bucket name</td>
            <td>Location type</td>
            <td>Location</td>
            <td>Storage class</td>
            <td>Created on</td>
            <td>Updated on</td>
            <td>
              <button
                onClick={showUpdateModalHandler}
                type="button"
                className="btn btn-info"
              >
                Update
              </button>
            </td>
            <td>
              <button
                onClick={showDeleteModalHandler}
                type="button"
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListBuckets;
