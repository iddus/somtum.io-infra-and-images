import Card from "../UI/Card";

const CompanyPage = () => {
  return (
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
  );
};

export default CompanyPage;
