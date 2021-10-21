import Footer from "./components/Layout/Footer";
import Nav from "./components/Layout/Nav";
import classes from "./App.module.css";
import ListBuckets from "./components/Demo1/ListBuckets";
import React, { useState, useEffect, useCallback } from "react";

const companyName = "Refayat Haque LLC";

const App = () => {
  let [buckets, setBuckets] = useState({});

  // buckets
  const fetchBucketsHandler = useCallback(async () => {
    try {
      const response = await fetch("/api/buckets");
      const data = await response.json();
      console.log(data);
      setBuckets(data);
    } catch (error) {
      console.log(error);
    }
    // if you try to console.log(buckets) here you won't be able to log the buckets state value as React will complain that you're missing "buckets" in the dependency array below
  }, []);

  useEffect(() => {
    fetchBucketsHandler();
  }, [fetchBucketsHandler]);

  return (
    <div className={classes.pagewrap}>
      {/* https://dev.to/akshay_rajput/keep-footer-at-bottom-of-page-using-flexbox-4a6f */}
      <header>
        <h1>{companyName}</h1>
        <nav>
          <Nav></Nav>
        </nav>
      </header>
      <ul>
        {buckets.map((bucket) => (
          <li key={bucket.id}>{bucket.name}</li>
        ))}
      </ul>
      <main className={classes.main}>
        <h2>Demo1</h2>
        <ListBuckets></ListBuckets>
      </main>
      <footer id="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default App;

// refs:
// got semantic structure from here and from the mozilla page below: https://www.pluralsight.com/guides/semantic-html#module-maincontent
// A given document can have multiple articles in it; for example, on a blog that shows the text of each article one after another as the reader scrolls, each post would be contained in an <article> element, possibly with one or more <section>s within. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article#examples
// footer has custom css in index.css
