function Contactpage() {
  return (
    <section className="contactbackground wrapper">
      <div>
        <h1 className="section-heading">Book interview</h1>
        <p className="contactpara">
          The interview will be scheduled on Calendly
          <br />
          <span className="helper">
            {" "}
            no account ? no worries you can login via google account too! 😊
          </span>
        </p>
        <button
          className="button"
          onClick={() => {
            window.open(
              "https://calendly.com/interview-aditya/interview-aditya"
            );
          }}
        >
          Book now
        </button>
        <span></span>
        <p className="copyright">
          Looking forward to work with the Dev team 🎉
        </p>
      </div>
    </section>
  );
}

export default Contactpage;
