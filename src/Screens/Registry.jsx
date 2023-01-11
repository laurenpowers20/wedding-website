import deer from "../images/deer.jpeg";

function Registry() {
  return (
    <>
      <main className="registry">
        <div className="registry-text">
          <p>Everyone: "Are you gonna have a registry?"</p>
        </div>
        <div className="registry-text">
          <p>Us:</p>
          <img src={deer} alt="deer in the headlights" className="deer" />
          <p>More coming soon</p>
        </div>
      </main>
    </>
  );
}

export default Registry;
