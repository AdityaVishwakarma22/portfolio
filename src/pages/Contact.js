function Contactpage() {
  return (
    <section className="contactbackground wrapper">
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
          window.open("https://calendly.com/interview-aditya/interview-aditya");
        }}
      >
        Book now
      </button>
      <p className="copyright">Looking forward to work with the Dev team 🎉</p>
    </section>
  );
}

export default Contactpage;
