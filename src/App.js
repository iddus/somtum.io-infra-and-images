import Footer from "./components/Layout/Footer";
import Nav from "./components/Layout/Nav";

const App = () => {
  return (
    <div>
      <header>
        <h1>LLC</h1>
        <nav>
          <Nav></Nav>
        </nav>
      </header>
      <main>
        <article>
          <h2>Projects</h2>
          <section>
            <h3>Project a ("card" ui component)</h3>
            <article>
              <h4>Details of project a</h4>
            </article>
          </section>
          <section>
            <h3>Project b ("card" ui component)</h3>
            <article>
              <h4>Details of project b</h4>
            </article>
          </section>
          <section>
            <h3>Project c ("card" ui component)</h3>
            <article>
              <h4>Details of project c</h4>
            </article>
          </section>
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
