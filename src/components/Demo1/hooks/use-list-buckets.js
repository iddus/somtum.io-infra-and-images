import { useState, useCallback } from "react";

const useListBuckets = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([null]);

  const listBuckets = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    console.log("hi");
    try {
      const response = await fetch("https://demo-1-bi7p4glmnq-uk.a.run.app", {
        mode: "no-cors",
      });
      console.log(response);
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);
  return { listBuckets, isLoading, error, data };
};

export default useListBuckets;

// const response = await storage.getBuckets();
// const [buckets] = response;
// buckets.forEach((bucket) => {
//   console.log(bucket.metadata);
// });
