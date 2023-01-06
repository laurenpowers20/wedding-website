import { Link } from "react-router-dom";

function Travel() {
  return (
    <>
      <main>
        <h1>Travel & Stay</h1>
        <p>More coming soon.</p>
        <p>I promise I'm on it!</p>
        <h2>
          <Link to="/faq">Back</Link>
        </h2>
      </main>
    </>
  );
}

export default Travel;
