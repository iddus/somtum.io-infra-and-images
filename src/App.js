import Footer from "./components/Layout/Footer";
import Nav from "./components/Layout/Nav";
import Card from "./components/UI/Card";
import classes from "./App.module.css";

const companyName = "Refayat Haque LLC";

const App = () => {
  return (
    <div className={classes.pagewrap}>
      {/* https://dev.to/akshay_rajput/keep-footer-at-bottom-of-page-using-flexbox-4a6f */}
      <header>
        <h1>{companyName}</h1>
        <nav>
          <Nav></Nav>
        </nav>
      </header>
      <main className={classes.main}>
        <article>
          <h2>Areas of expertise:</h2>
          <div class="container">
            <div class="row row-cols-2">
              {/* https://getbootstrap.com/docs/5.0/layout/grid/#row-columns */}
              {/* https://getbootstrap.com/docs/5.0/components/card/#grid-cards */}
              <div class="col">
                <section>
                  <Card
                    imgSrc="https://images.unsplash.com/photo-1589296261182-633d73de3995?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2369&q=80"
                    // https://daveceddia.com/react-image-tag/
                    title="Web App Development"
                    description="blah blah"
                    buttonText="helloWorld"
                  ></Card>
                </section>
              </div>
              <div class="col">
                <section>
                  <Card
                    imgSrc="https://images.unsplash.com/photo-1589296261182-633d73de3995?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2369&q=80"
                    title="CI/CD"
                    description="blah blah"
                    buttonText="docker"
                  ></Card>
                </section>
              </div>
              <div class="col">
                <section>
                  <Card
                    imgSrc="https://images.unsplash.com/photo-1589296261182-633d73de3995?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2369&q=80"
                    title="DLP"
                    description="blah blah"
                    buttonText="someStuff"
                  ></Card>
                </section>
              </div>
              <div class="col">
                <section>
                  <Card
                    imgSrc="https://images.unsplash.com/photo-1589296261182-633d73de3995?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2369&q=80"
                    title="Automation of Business Processes"
                    description="blah blah"
                    buttonText="someStuffAgain"
                  ></Card>
                </section>
              </div>
              <div class="col">
                <section>
                  <Card
                    imgSrc="https://images.unsplash.com/photo-1589296261182-633d73de3995?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2369&q=80"
                    title="Data Sterilization"
                    description="blah blah"
                    buttonText="covid is gone!"
                  ></Card>
                </section>
              </div>
              <div class="col">
                <section>
                  <Card
                    imgSrc="https://images.unsplash.com/photo-1589296261182-633d73de3995?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2369&q=80"
                    title="Cloud Security and Billing Optimization"
                    description="blah blah"
                    buttonText="someStuff"
                  ></Card>
                </section>
              </div>
            </div>
          </div>
        </article>
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
