import "./Styles/Faq.css";
import { Link } from "react-router-dom";
import MovingComponent from "react-moving-text";
import skull from "../images/skull.GIF";

import { FaRegCopyright } from "react-icons/fa";

function Faq() {
  return (
    <>
      <main>
        <MovingComponent
          type="swing"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <img src={skull} alt="skull gif" className="faq-skull-gif" />
        </MovingComponent>
        <h1>FAQ</h1>
        <div className="faq-questions">
          <p>So it's in the Captain Bill's restaurant?</p>
          <p className="faq-answers">
            {" "}
            It's in the Bayview House which is on the same property as the
            restaurant. It's very easy to find.{" "}
          </p>
        </div>
        <div className="faq-questions">
          <p>Will there be a cermony?</p>
          <p className="faq-answers">
            We had a small ceremony last year at City Hall. We're just having
            the party in July!{" "}
          </p>
        </div>
        <div className="faq-questions">
          <p>Can I bring the kids or a guest?</p>
          <p className="faq-answers">
            {" "}
            We ask that you only bring those listed on your invitation. We, of
            course believe "the more the merrier", but there are space
            limitations.{" "}
          </p>
        </div>
        <div className="faq-questions">
          <p>Do you have a registry?</p>
          <p className="faq-answers">Coming soon, folks!</p>
        </div>
        <div className="faq-questions">
          <p>What's the best way to get there?</p>
          <p className="faq-answers">
            There's plenty of parking at Captain Bill's, so driving is a good
            option. NYC friends, you can take the LIRR to the Bay Shore station
            and hop in a cab or Uber/Lyft. It's only a 5 minute drive from the
            station. The <Link to="/travel">Travel & Stay</Link> section is
            still in the works! Check back for more information.
          </p>
        </div>
        <div className="faq-questions">
          <p>How should I dress?</p>
          <p className="faq-answers">Cocktail attire or semi-formal is good!</p>
        </div>
        <div className="faq-questions">
          <p>Will there be an after party?</p>
          <p className="faq-answers">
            Maybe we'll all go out in Bay Shore if we are feeling up to it?!
            We'll post more once we come up with a more solid plan.
          </p>
        </div>
        <div className="faq-questions">
          <p>Are you Lauren "Newman" or "Powers"?</p>
          <p className="faq-answers">
            I am still Lauren Powers! I do love the Newmans and I'm so excited
            to be a part of their family!
          </p>
        </div>
      </main>
      <footer>
        <Link className="faq-about-this-page" to="/aboutthispage">
          {" "}
          <FaRegCopyright /> Lauren Powers 2023
        </Link>
      </footer>
    </>
  );
}

export default Faq;
