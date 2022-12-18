import "./Styles/Faq.css"

function Faq() {
  return (
    <>
      <h1>FAQ</h1>
      <div className="faq-questions">
      <p>Will there be a cermony?</p>
        <p>We had a small ceremony last year at City Hall. We're just having the party in July! </p>
      </div>
      <div className="faq-questions">
      <p>Can I bring the kids or a guest?</p>
        <p> We ask that you only bring those listed on your invitation. We'd love to accomodate others, but there are space limitations. </p>
      </div>
      <div className="faq-questions">
      <p>What's the best way to get there?</p>
        <p> There's plenty of parking at Captain Bill's, so driving is a good option. City friends, you can take the LIRR to the Bay Shore station and hop in a cab or Uber/Lyft.  </p>
        </div>
      </>
  )
}

export default Faq