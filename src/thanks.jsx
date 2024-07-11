import thanks from "../images/illustration-thank-you.svg";

function Thanks({ rating, setShow }) {
  return (
    <>
      <div>
        <div>
          <main>
            <div className="card">
              <img className="phone-img" src={thanks} alt="" />
              <div className="select">
                <p>You selected {rating} out of 5 </p>
              </div>
              <div className="header">
                <h2 className="">Thank you!</h2>
              </div>
              <div>
                <p className="prag">
                  We appreciate you taking the time to give a rating. If you
                  ever need more support, don’t hesitate to get in touch!
                </p>
              </div>
              <button className="rate-btn" onClick={() => setShow(false)}>
                Rate again
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Thanks;
