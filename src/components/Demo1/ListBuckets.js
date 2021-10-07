import { useEffect, useState } from "react";
import { Fragment } from "react";
import useListBuckets from "./hooks/use-list-buckets";

const ListBuckets = () => {
  // calling custom hook and destructuring out what it returns
  const { listBuckets, isLoading, error, data } = useListBuckets();

  useEffect(() => {
    listBuckets();
  }, [listBuckets]);

  return (
    <Fragment>
      <table class="table table-sm">
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
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Bucket name</td>
            <td>Location type</td>
            <td>Location</td>
            <td>Storage class</td>
            <td>Created on</td>
            <td>Updated on</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListBuckets;
